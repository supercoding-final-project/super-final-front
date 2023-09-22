import axios from 'axios';
import { useEffect, useState } from 'react';
import PostCardItem from 'src/pages/main/PostCardItem';

import * as S from './MentoDetail.style';
import MentoProfile from '../MentoProfile';

const MentoDetail = (props) => {
  const [postData, setPostData] = useState([]);
  const [isPost, setIsPost] = useState(false);

  const getMentorPost = async () => {
    const res = await axios.get(
      `https://codevelop.store/api/v1/post/mentor?mentorId=${props.mentorId}&page=1&size=3`,
    );
    setPostData(res.data.data.postList);
    if (res.data.data.postList.length !== 0) setIsPost(true);
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
          {isPost ? (
            postData.map((item, index) => <PostCardItem data={item} key={index} />)
          ) : (
            <div>멘토가 등록한 포스트가 없습니다!</div>
          )}
        </S.CardWrap>
      </S.PostContainer>
    </S.PostWrap>
  );
};

export default MentoDetail;
