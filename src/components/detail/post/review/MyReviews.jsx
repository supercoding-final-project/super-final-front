import * as S from './Review.style';
import ReviewBox from './ReviewBox';

const MyReviews = () => {
  const postMock = [
    {
      postId: 1,
      mento: '하진수',
      post: '[프론트엔드] 잘라 먹는 Typescript',
      time: 1,
      point: 20000,
    },
    {
      postId: 2,
      mento: '하방방',
      post: '[백엔드] 구워 삶는 Spring',
      time: 1,
      point: 25000,
    },
  ];
  const reviewMock = [
    {
      reviewId: 1,
      mento: '김지우',
      post: 'React스럽게~^^',
      reviewContent: '너무 좋은 강의였어요 특히, 추상화 부분이 맘에 듭니다.',
      rating: 5,
    },
    {
      reviewId: 2,
      mento: '홍종민',
      post: '대한민국 예비군의 기초',
      reviewContent: '충성! 1중대 1소대 병장 김지우입니다. 다름이 아니라...',
      rating: 4,
    },
    {
      reviewId: 3,
      mento: '조하윤',
      post: '퍼블리싱의 모든것',
      reviewContent: '진짜 전 퍼블리싱의 왕을 만났어요. 다시 태어났습니다.',
      rating: 5,
    },
    {
      reviewId: 4,
      mento: '스크롤',
      post: '확인용',
      reviewContent: '스크롤 확인용',
      rating: 5,
    },
  ];
  const headerOptions = ['신청 시간', '포인트', '리뷰 작성', '리뷰 내용', '별점', '리뷰 삭제'];
  return (
    <div>
      <ReviewBox
        title="리뷰 작성 가능한 포스트"
        headerOption={headerOptions.slice(0, 3)}
        btnValue="작성"
        data={postMock}
        type="POST"
      />
      <ReviewBox
        title="내가 작성한 리뷰"
        headerOption={headerOptions.slice(3, 6)}
        btnValue="삭제"
        data={reviewMock}
        type="REVIEW"
      />
    </div>
  );
};

export default MyReviews;
