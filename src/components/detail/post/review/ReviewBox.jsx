import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import useJwtToken from 'src/hooks/useJwt';

import * as S from './Review.style';
import ReviewList from './ReviewList';
const ReviewBox = (props) => {
  const [data, setData] = useState([]);
  const [cursor, setCursor] = useState(0);
  const [last, setLast] = useState(false);
  const cursorRef = useRef(null);

  const { jwtToken } = useJwtToken();

  // const onReviewChange = async () => {
  //   await getMyReviews();
  // };

  useEffect(() => {
    const getMyReviews = async () => {
      const res = await axios.get(
        `https://codevelop.store/api/v1/reviews/${props.endPoint}?cursor=${cursor}&pageSize=5`,
        {
          headers: {
            Authorization: jwtToken,
          },
        },
      );
      const newData = res.data.data.content;
      if (newData.length > 0) {
        setCursor(newData[newData.length - 1].reviewId);
      }
      if (res.data.data.last) setLast(true);
      else setLast(false);
      setData((prevData) => [...prevData, ...newData]);
    };
    const options = {
      root: null,
      rootMargin: '6px',
      threshold: 0.7,
    };

    cursorRef.current = new IntersectionObserver(getMyReviews, options);

    if (cursorRef.current) {
      cursorRef.current.observe(triggerRef.current);
    }

    return () => {
      if (cursorRef.current) {
        cursorRef.current.disconnect();
      }
    };
  }, [cursor, data]);
  const triggerRef = useRef();

  return (
    <S.ReviewBoxWrap>
      <h1>{props.title}</h1>
      <S.ReviewBox>
        <S.BoxHeader>
          <div>멘토</div>
          <div style={{ width: '40%' }}>POST</div>
          {props.headerOption.map((option, i) => (
            <div key={i}>{option}</div>
          ))}
        </S.BoxHeader>
        {data.map((info, i) => (
          <ReviewList
            key={i}
            info={info}
            btnValue={props.btnValue}
            type={props.type}
            onReviewChange={onReviewChange}
          />
        ))}
        <div ref={triggerRef}></div>
      </S.ReviewBox>
    </S.ReviewBoxWrap>
  );
};

export default ReviewBox;
