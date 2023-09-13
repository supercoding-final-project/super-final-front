import * as S from './PostBox.style';

const StackBox = () => {
  const mock = ['url1', 'url2', 'url3'];
  const techStack = mock.map((item, index) => <img key={index} src={item} />);

  return (
    <S.StackBox>
      <div>코드 리뷰를 진행할 기술 스택 중 하나를 선택해 주세요!</div>
      <div>{techStack}</div>
    </S.StackBox>
  );
};

export default StackBox;
