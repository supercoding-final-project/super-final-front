import * as S from './post/Detail.style';

const MentoProfile = () => {
  const mock = {
    career: ['프론트엔드 2년 1개월', '백엔드 1년 2개월'],
    stack: ['React.js', 'Typescript', 'Next.js'],
    job: '토스뱅크 개발자',
  };
  const careerLi = mock.career.map((item, index) => <li key={index}>{item}</li>);
  const stackLi = mock.stack.map((item, index) => <li key={index}>{item}</li>);
  return (
    <S.MentoProfileBox>
      <S.SmallFont>멘토 소개</S.SmallFont>
      <S.ImgAndName>
        <img></img>
        나는야 멘토
      </S.ImgAndName>
      <S.JobAndIntro>[프론트엔드] 전 진짜 대충하는 멘토에요</S.JobAndIntro>
      <S.SmallFont>멘토 이력</S.SmallFont>
      <S.Summary>
        <S.Career>
          <ol>
            <li>직무&경력</li>
            <li>기술스택</li>
            <li>현직</li>
          </ol>
        </S.Career>
        <S.CareerList>
          <ol>
            <li>
              <ul>{careerLi}</ul>
            </li>
            <li>
              <ul>{stackLi}</ul>
            </li>
            <li>{mock.job}</li>
          </ol>
        </S.CareerList>
      </S.Summary>
    </S.MentoProfileBox>
  );
};

export default MentoProfile;
