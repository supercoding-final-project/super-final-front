import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import * as S from 'src/pages/detail/DetailLayout.style';

import ReviewCard from './ReviewCard';

const PostReview = (props) => {
  const [last, setLast] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [cursor, setCursor] = useState(0);
  const cursorRef = useRef(null);
  const [noReview, setNoReview] = useState(false);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getReviews = async (entries) => {
      if (last) return;
      if (entries[0].isIntersecting) {
        const res = await axios.get(
          `https://codevelop.store/api/v1/reviews/byPostId?postId=${
            props.postId
          }&cursor=${cursor}&pageSize=${5} `,
        );
        const newReviews = res.data.data.content;
        if (newReviews.length > 0) {
          setCursor(newReviews[newReviews.length - 1].reviewId);
          setNoReview(true);
        }
        if (res.data.data.last) setLast(true);
        else setLast(false);
        setReviews((prevReviews) => [...prevReviews, ...newReviews]);
      }
    };
    const options = {
      root: null,
      rootMargin: '6px',
      threshold: 0.7,
    };

    cursorRef.current = new IntersectionObserver(getReviews, options);

    if (cursorRef.current) {
      cursorRef.current.observe(triggerRef.current);
    }

    return () => {
      if (cursorRef.current) {
        cursorRef.current.disconnect();
      }
    };
  }, [cursor]);

  const triggerRef = useRef();

  return (
    <>
      <S.ReviewList>
        <S.ReviewTitle>멘티의 한 줄 리뷰</S.ReviewTitle>
        <S.ReviewBox>
          {noReview ? (
            reviews.map((d, i) => <ReviewCard key={i} data={d} />)
          ) : (
            <div>등록된 리뷰가 없습니다!</div>
          )}
          <div ref={triggerRef}></div>
        </S.ReviewBox>
      </S.ReviewList>
    </>
  );
};

export default PostReview;
