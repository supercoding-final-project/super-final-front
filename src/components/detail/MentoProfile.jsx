import axios from 'axios';
import { useEffect, useState } from 'react';

import * as S from './post/Detail.style';

const MentoProfile = () => {
  const [mentoId, setMentoId] = useState(1005);
  const [mentoData, setMentoData] = useState({});
  const [mentoCareer, setMentoCareer] = useState([]);

  const getMentoData = async () => {
    const res = await axios.get(`https://codevelop.store/api/v1/mentors/detail/${mentoId}`);
    setMentoData(res.data.data);
    setMentoCareer(res.data.data.mentoCareerList);
  };

  useEffect(() => {
    getMentoData();
  }, [mentoId]);
  // const mock = {
  //   career: ['프론트엔드 2년 1개월', '백엔드 1년 2개월'],
  //   stack: ['React.js', 'Typescript', 'Next.js'],
  //   job: '토스뱅크 개발자',
  // };
  // const stackLi = .stack.map((item, index) => <li key={index}>{item}</li>);
  return (
    <S.MentoProfileBox>
      <S.SmallFont>멘토 소개</S.SmallFont>
      <S.ImgAndName>
        <img src={mentoData.thumbnailImageUrl}></img>
        {mentoData.nickname}
      </S.ImgAndName>
      <S.JobAndIntro>{mentoData.introduction}</S.JobAndIntro>
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
              <ul>
                {mentoCareer.map((c, i) => (
                  <li key={i}>{c.fullString}</li>
                ))}
              </ul>
            </li>
            <li>{/* <ul>{stackLi}</ul> */}</li>
            <li>{mentoData.company}</li>
          </ol>
        </S.CareerList>
      </S.Summary>
    </S.MentoProfileBox>
  );
};

export default MentoProfile;
