import axios from 'axios';
import { useEffect, useState } from 'react';
import PostCardItem from 'src/pages/main/PostCardItem';

import * as S from './MentoDetail.style';
import MentoProfile from '../MentoProfile';

const MentoDetail = (props) => {
  const [postData, setPostData] = useState([]);

  const getMentorPost = () => {
    const res = axios.get(
      `https://codevelop.store/api/v1/mentor?mentorId=${props.mentorId}&page=1&size=3`,
    );
    setPostData(res.data.data.postList);
  };

  useEffect(() => {
    getMentorPost();
  }, [props.mentorId]);

  return (
    <S.PostWrap>
      <S.PostContainer>
        <S.MentoDetailTitle>멘토 mentoName입니다.</S.MentoDetailTitle>
        <MentoProfile mentorId={props.mentorId} />
        <h1>멘토의 POST</h1>
        <S.CardWrap>
          {postData.map((index, item) => (
            <PostCardItem key={index} data={item} />
          ))}
        </S.CardWrap>
      </S.PostContainer>
    </S.PostWrap>
  );
};

export default MentoDetail;
