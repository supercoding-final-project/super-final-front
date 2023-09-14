import PostCardItem from 'src/pages/main/PostCardItem';

import * as S from './MentoDetail.style';
import MentoProfile from '../MentoProfile';

const MentoDetail = () => {
  return (
    <S.PostWrap>
      <S.PostContainer>
        <MentoProfile />
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
