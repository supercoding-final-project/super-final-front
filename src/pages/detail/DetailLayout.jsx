import axios from 'axios';
import { useEffect, useState } from 'react';
import MentoProfile from 'src/components/detail/MentoProfile';
import DetailIntro from 'src/components/detail/post/DetailIntro';
import DetailModal from 'src/components/detail/post/DetailModal';
import PostReview from 'src/components/detail/post/review/PostReview';
import useJwtToken from 'src/hooks/useJwt';

import * as S from './DetailLayout.style';

const DetailLayout = () => {
  const [postId, setPostId] = useState(10);
  const [postData, setPostData] = useState({});
  const { jwtToken } = useJwtToken();

  const getPostData = async () => {
    const res = await axios.get(
      `https://codevelop.store/api/v1/post/${postId}`,
      {},
      {
        headers: {
          Authorization: jwtToken,
        },
      },
    );
    console.log(res);
    setPostData(res.data.data);
  };

  useEffect(() => {
    getPostData();
  }, [postId]);
  // const mockDetail = {
  //   title: '[프론트엔드] 잘라먹는 Typescript',
  //   level: '초급',
  //   postStack: ['url1', 'url2', 'url3'],
  //   workCareer: ['카카오 프론트엔드 개발자', '전) SK C&C R&D센터 개발자'],
  //   educateCareer: [
  //     '카카오테크캠퍼스 출강 (포트폴리오, 기술면접)',
  //     '패스트캠퍼스 프론트엔드 부트캠프 5기 커리어 특강',
  //     '야놀자 Tech School 이력서/포트폴리오 강의, 커리어 멘토링',
  //     '국민대학교 디지털새싹 SW 교육캠프 멘토링',
  //   ],
  //   reviewStyle: ['전 진짜 대충해요', '근데 잘해요'],
  // };

  return (
    <S.DetailWrap>
      <DetailModal />
      <div style={{ width: '40%', marginRight: '15%' }}>
        <MentoProfile />
        <S.TitleBox>
          <span>{postData.level}</span>
          <h2>{postData.title}</h2>
        </S.TitleBox>
        <S.StackBox>
          <div>기술스택</div>
          <div>
            {postData.postStack &&
              postData.postStack.map((stack, i) => <S.StackImg key={i} src={stack} />)}
          </div>
        </S.StackBox>
        <S.IntroTitle>소개</S.IntroTitle>
        <DetailIntro olName="업무 경력" text={postData.workCareer} />
        <DetailIntro olName="강의 경력" text={postData.educateCareer} />
        <S.IntroTitle>코드리뷰는 방식으로 진행돼요</S.IntroTitle>
        <DetailIntro text={postData.reviewStyle} />
        <PostReview />
      </div>
    </S.DetailWrap>
  );
};

export default DetailLayout;
