import { useState } from 'react';
import MentoProfile from 'src/components/detail/MentoProfile';
import DetailIntro from 'src/components/detail/post/DetailIntro';
import DetailModal from 'src/components/detail/post/DetailModal';
import { mockDetail } from 'src/components/detail/post/Mock';
import PostReview from 'src/components/detail/post/review/PostReview';

import * as S from './DetailLayout.style';

const DetailLayout = () => {
  const [data, setData] = useState(mockDetail);

  return (
    <S.DetailWrap>
      <DetailModal />
      <div style={{ width: '40%', marginRight: '15%' }}>
        <MentoProfile />
        <S.TitleBox>
          <span>{data.level}</span>
          <h2>{data.title}</h2>
        </S.TitleBox>
        <S.StackBox>
          <div>기술스택</div>
          <div>
            {mockDetail.postStack.map((stack, i) => (
              <S.StackImg key={i} src={stack} />
            ))}
          </div>
        </S.StackBox>
        <S.IntroTitle>소개</S.IntroTitle>
        <DetailIntro olName="업무 경력" text={data.workCareer} />
        <DetailIntro olName="강의 경력" text={data.educateCareer} />
        <S.IntroTitle>코드리뷰는 방식으로 진행돼요</S.IntroTitle>
        <DetailIntro text={data.reviewStyle} />
        <PostReview />
      </div>
    </S.DetailWrap>
  );
};

export default DetailLayout;
