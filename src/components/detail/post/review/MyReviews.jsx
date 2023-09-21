import ReviewBox from './ReviewBox';

const MyReviews = () => {
  const headerOptions = ['신청 시간', '포인트', '리뷰 작성', '리뷰 내용', '별점', '리뷰 삭제'];
  return (
    <div>
      <ReviewBox
        title="리뷰 작성 가능한 포스트"
        headerOption={headerOptions.slice(0, 3)}
        btnValue="작성"
        endPoint="reviewable"
        type="POST"
        cursorPoint="orderSheetId"
      />
      <ReviewBox
        title="내가 작성한 리뷰"
        headerOption={headerOptions.slice(3, 6)}
        btnValue="삭제"
        endPoint="byUserId"
        type="REVIEW"
        cursorPoint="reviewId"
      />
    </div>
  );
};

export default MyReviews;
