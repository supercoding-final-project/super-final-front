import axios from 'axios';
import { useEffect, useState } from 'react';
import useJwtToken from 'src/hooks/useJwt';

import * as S from './Review.style';
import ReviewList from './ReviewList';
const ReviewBox = (props) => {
  const [data, setData] = useState([]);
  const [cursor, setCursor] = useState(0);
  const { jwtToken } = useJwtToken();

  const getMyReviews = async () => {
    const res = await axios.get(
      `https://codevelop.store/api/v1/reviews/${props.endPoint}?cursor=${cursor}&pageSize=5`,
      {
        headers: {
          Authorization: jwtToken,
        },
      },
    );
    setData(res.data.data.content);
  };

  const onReviewChange = async () => {
    await getMyReviews();
  };

  useEffect(() => {
    getMyReviews();
  }, [jwtToken]);
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
      </S.ReviewBox>
    </S.ReviewBoxWrap>
  );
};

export default ReviewBox;
