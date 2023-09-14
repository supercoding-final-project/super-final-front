import { useEffect } from 'react';

import * as S from './Auth.style';

const { Kakao } = window;

const Auth = () => {
  const initKakao = () => {
    if (Kakao && !Kakao.isInitialized()) {
      Kakao.init(`${import.meta.env.VITE_KAKAO_INIT}`);
    }
  };

  useEffect(() => {
    initKakao();
  }, []);

  const kakaoLoginHandler = () => {
    Kakao.Auth.authorize({
      redirectUri: `http://localhost:5173`,
    });
  };

  return (
    <S.Container>
      <S.Wrap>
        <S.Title>
          <abbr>👋</abbr>
          <abbr>안녕하세요, 반갑습니다!</abbr>
          <abbr>
            <abbr style={{ color: '#29CC61' }}>소셜 계정</abbr>으로{' '}
            <abbr style={{ color: '#29CC61' }}>로그인</abbr> 해볼까요?
          </abbr>
        </S.Title>
        <S.IconBox>
          <S.Kakao onClick={kakaoLoginHandler} style={{ border: '0.5px solid #807E7D' }} />

          <S.Google style={{ border: '0.5px solid #807E7D' }} />
        </S.IconBox>
      </S.Wrap>
    </S.Container>
  );
};

export default Auth;
