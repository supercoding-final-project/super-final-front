import * as S from './PostBox.style';

const PostLevel = () => {
  return (
    <S.LevelBox>
      <div>코드 리뷰 난이도를 알려주세요!</div>
      <div>
        <button>입문</button>
        <button>초급</button>
        <button>중급</button>
        <button>고급</button>
        <button>최고급</button>
      </div>
    </S.LevelBox>
  );
};

export default PostLevel;
