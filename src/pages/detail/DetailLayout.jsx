import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MentoProfile from 'src/components/detail/MentoProfile';
import DetailIntro from 'src/components/detail/post/DetailIntro';
import DetailModal from 'src/components/detail/post/DetailModal';
import PostReview from 'src/components/detail/post/review/PostReview';
import useJwtToken from 'src/hooks/useJwt';

import * as S from './DetailLayout.style';

const DetailLayout = () => {
  const { postId } = useParams();
  const [postData, setPostData] = useState({});
  const { jwtToken } = useJwtToken();

  const getPostData = async () => {
    const res = await axios.get(`https://codevelop.store/api/v1/post/${postId}`, {
      headers: {
        Authorization: jwtToken,
      },
    });
    setPostData(res.data.data);
  };

  useEffect(() => {
    getPostData();
  }, [postId]);

  return (
    <S.DetailWrap>
      <DetailModal
        price={postData.price}
        title={postData.title}
        mentorId={postData.mentorId}
        permission={postData.permission}
        postId={postId}
      />
      <div style={{ width: '40%', marginRight: '15%' }}>
        <MentoProfile mentorId={postData.mentorId} />
        <S.TitleBox>
          <span>{postData.level}</span>
          <h2>{postData.title}</h2>
        </S.TitleBox>
        <S.StackBox>
          <div>기술스택</div>
          <div>
            <S.StackImg src={postData.skillStackImg} />
          </div>
        </S.StackBox>
        <S.IntroTitle>소개</S.IntroTitle>
        <DetailIntro olName="업무 경력" text={postData.workCareer} />
        <DetailIntro olName="강의 경력" text={postData.educateCareer} />
        <S.IntroTitle>코드리뷰는 이런 방식으로 진행돼요</S.IntroTitle>
        <DetailIntro text={postData.reviewStyle} />
        <PostReview postId={postId} />
      </div>
    </S.DetailWrap>
  );
};

export default DetailLayout;
