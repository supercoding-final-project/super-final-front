import * as S from 'src/pages/detail/DetailLayout.style';

const ReviewRegister = () => {
  const mock = '김지우';
  return (
    <S.ReviewPost>
      <span>리뷰 작성하기</span>
      <div>
        <S.Name>{mock}</S.Name>
        <S.Text>
          <input placeholder="한줄 리뷰를 입력해주세요." />
        </S.Text>
        <S.Rating>별저엄</S.Rating>
      </div>
      <button>리뷰 등록</button>
    </S.ReviewPost>
  );
};

export default ReviewRegister;
