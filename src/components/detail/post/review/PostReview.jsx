import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import * as S from 'src/pages/detail/DetailLayout.style';

import ReviewCard from './ReviewCard';

const PostReview = (props) => {
  const [reviews, setReviews] = useState([]);
  const [cursor, setCursor] = useState(0);
  const cursorRef = useRef(null);

  const getReviews = async () => {
    const res = await axios.get(
      `https://codevelop.store/api/v1/reviews/byPostId?postId=${
        props.postId
      }&cursor=${cursor}&pageSize=${10} `,
    );
    const newReviews = res.data.data.content;
    setReviews((prevReviews) => [...prevReviews, ...newReviews]);
    if (newReviews.length > 0) {
      setCursor((prevCursor) => {
        if (newReviews.length > 0) {
          return newReviews[newReviews.length - 1].reviewId;
        }
        return prevCursor;
      });
    }
  };

  const handleIntersection = (entries) => {
    if (entries[0].isIntersecting) {
      getReviews();
    }
  };

  useEffect(() => {
    getReviews();
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    });

    if (cursorRef.current) {
      observer.observe(cursorRef.current);
    }

    return () => {
      if (cursorRef.current) {
        observer.unobserve(cursorRef.current);
      }
    };
  }, [props.postId]);

  return (
    <>
      <S.ReviewList>
        <S.ReviewTitle>멘티의 한 줄 리뷰</S.ReviewTitle>
        <S.ReviewBox>
          {reviews.map((d, i) => (
            <ReviewCard key={i} data={d} />
          ))}
          <div ref={cursorRef}></div>
        </S.ReviewBox>
      </S.ReviewList>
    </>
  );
};

export default PostReview;
