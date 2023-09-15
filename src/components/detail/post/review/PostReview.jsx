import * as S from 'src/pages/detail/DetailLayout.style';

import ReviewCard from './ReviewCard';
import ReviewRegister from './ReviewRegister';

const PostReview = () => {
  const mockReview = [
    {
      reviewId: 1,
      name: '김소미',
      review: '항상 꼼꼼히 봐주셔서 감사합니다!',
      rating: 4,
    },
    {
      reviewId: 2,
      name: '김동준',
      review: '요즘같은 불경기에, 취업관련해서 도움이 되었어요',
      rating: 3,
    },
    {
      reviewId: 3,
      name: '미쿠',
      review: '역시 경력직이라 다른건가요?',
      rating: 5,
    },
    {
      reviewId: 4,
      name: '김지우',
      review: '스크롤 확인용',
      rating: 1,
    },
    {
      reviewId: 5,
      name: '김지우',
      review: '스크롤 확인용',
      rating: 1,
    },
    {
      reviewId: 6,
      name: '김지우',
      review: '스크롤 확인용',
      rating: 1,
    },
  ];
  return (
    <>
      <S.ReviewList>
        <S.ReviewTitle>멘티의 한 줄 리뷰</S.ReviewTitle>
        <S.ReviewBox>
          {mockReview.map((d, i) => (
            <ReviewCard key={i} data={d} />
          ))}
        </S.ReviewBox>
      </S.ReviewList>
      <ReviewRegister />
    </>
  );
};

export default PostReview;
