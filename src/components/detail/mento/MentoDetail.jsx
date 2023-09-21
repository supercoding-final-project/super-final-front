import PostCardItem from 'src/pages/main/PostCardItem';

import * as S from './MentoDetail.style';
import MentoProfile from '../MentoProfile';

const MentoDetail = (props) => {
  return (
    <S.PostWrap>
      <S.PostContainer>
        <S.MentoDetailTitle>멘토 mentoName입니다.</S.MentoDetailTitle>
        <MentoProfile mentorId={props.mentorId} />
        <h1>멘토의 POST</h1>
        <S.CardWrap>
          <PostCardItem />
          <PostCardItem />
          <PostCardItem />
        </S.CardWrap>
      </S.PostContainer>
    </S.PostWrap>
  );
};

export default MentoDetail;
