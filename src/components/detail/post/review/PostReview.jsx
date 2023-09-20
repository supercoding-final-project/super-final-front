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
    const lastReview = newReviews[newReviews.length - 1];
    setCursor(lastReview.reviewId);
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
  }, [cursor, props.postId]);
  // const mockReview = [
  //   {
  //     reviewId: 1,
  //     name: '김소미',
  //     review: '항상 꼼꼼히 봐주셔서 감사합니다!',
  //     rating: 4,
  //   },
  //   {
  //     reviewId: 2,
  //     name: '김동준',
  //     review: '요즘같은 불경기에, 취업관련해서 도움이 되었어요',
  //     rating: 3,
  //   },
  //   {
  //     reviewId: 3,
  //     name: '미쿠',
  //     review: '역시 경력직이라 다른건가요?',
  //     rating: 5,
  //   },
  //   {
  //     reviewId: 4,
  //     name: '김지우',
  //     review: '스크롤 확인용',
  //     rating: 1,
  //   },
  //   {
  //     reviewId: 5,
  //     name: '김지우',
  //     review: '스크롤 확인용',
  //     rating: 1,
  //   },
  //   {
  //     reviewId: 6,
  //     name: '김지우',
  //     review: '스크롤 확인용',
  //     rating: 1,
  //   },
  // ];
  return (
    <>
      <S.ReviewList ref={cursorRef}>
        <S.ReviewTitle>멘티의 한 줄 리뷰</S.ReviewTitle>
        <S.ReviewBox>
          {reviews.map((d, i) => (
            <ReviewCard key={i} data={d} setCursor={setCursor} />
          ))}
        </S.ReviewBox>
      </S.ReviewList>
    </>
  );
};

export default PostReview;
