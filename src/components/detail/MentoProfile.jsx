import axios from 'axios';
import { useEffect, useState } from 'react';

import * as S from './post/Detail.style';

const MentoProfile = (props) => {
  const [mentoData, setMentoData] = useState({});

  const getMentoData = async () => {
    const res = await axios.get(`https://codevelop.store/api/v1/mentors/detail/${props.mentorId}`);
    setMentoData(res.data.data);

    if (props.stackLoader) {
      props.stackLoader(res.data.data.mentorSkillStackList);
    }
  };

  useEffect(() => {
    getMentoData();
  }, [props.mentorId]);

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
                {mentoData.mentorCareerList &&
                  mentoData.mentorCareerList.map((c, i) => <li key={i}>{c.fullString}</li>)}
              </ul>
            </li>
            <li>
              <ul>
                {mentoData.mentorSkillStackList &&
                  mentoData.mentorSkillStackList.map((c, i) => <li key={i}>{c.skillStackName}</li>)}
              </ul>
            </li>
            <li>{mentoData.company}</li>
          </ol>
        </S.CareerList>
      </S.Summary>
    </S.MentoProfileBox>
  );
};

export default MentoProfile;
