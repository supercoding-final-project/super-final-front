import axios from 'axios';
import { useEffect, useState } from 'react';
import useJwtToken from 'src/hooks/useJwt';

import ReviewBox from './ReviewBox';

const MyReviews = () => {
  const { jwtToken } = useJwtToken();
  const [reviewableData, setReviewableData] = useState([]);
  const [myReviews, setMyReviews] = useState([]);
  const [reviewableCursor, setReviewableCursor] = useState(0);
  const [myReviewCursor, setMyReviewCursor] = useState(0);

  const getReviewable = async () => {
    // 공통 훅으로
    const res = await axios.get(
      `https://codevelop.store/api/v1/reviews/reviewable?cursor=${reviewableCursor}&pageSize=${5}`,
      {
        headers: {
          Authorization: jwtToken,
        },
      },
    );
    setReviewableData(res.data.data.content);
  };

  const getMyReviews = async () => {
    const res = await axios.get(
      `https://codevelop.store/api/v1/reviews/byUserId?cursor=${myReviewCursor}&pageSize=${5}`,
      {
        headers: {
          Authorization: jwtToken,
        },
      },
    );
    setMyReviews(res.data.data.content);
  };

  useEffect(() => {
    getReviewable();
    getMyReviews();
  }, [jwtToken, reviewableData, myReviews]);
  // const postMock = [
  //   {
  //     postId: 1,
  //     mento: '하진수',
  //     post: '[프론트엔드] 잘라 먹는 Typescript',
  //     time: 1,
  //     point: 20000,
  //   },
  //   {
  //     postId: 2,
  //     mento: '하방방',
  //     post: '[백엔드] 구워 삶는 Spring',
  //     time: 1,
  //     point: 25000,
  //   },
  // ];

  const headerOptions = ['신청 시간', '포인트', '리뷰 작성', '리뷰 내용', '별점', '리뷰 삭제'];
  return (
    <div>
      <ReviewBox
        title="리뷰 작성 가능한 포스트"
        headerOption={headerOptions.slice(0, 3)}
        btnValue="작성"
        data={reviewableData}
        type="POST"
      />
      <ReviewBox
        title="내가 작성한 리뷰"
        headerOption={headerOptions.slice(3, 6)}
        btnValue="삭제"
        data={myReviews}
        type="REVIEW"
      />
    </div>
  );
};

export default MyReviews;
