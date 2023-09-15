import axios from 'axios';
import { useEffect } from 'react';

import * as S from './Auth.style';

const { Kakao } = window;

const Auth = () => {
  const initKakao = () => {
    if (Kakao && !Kakao.isInitialized()) {
      Kakao.init(`${import.meta.env.VITE_KAKAO_INIT}`);
      // Kakao.init('d4c1508770b1a0cd80b8c8fd3b1b5112');
    }
  };

  useEffect(() => {
    console.log(initKakao());
    initKakao();
  }, []);

  const kakaoLoginHandler = () => {
    Kakao.Auth.authorize({
      redirectUri: `https://super-final-front.vercel.app/`,
    });

    const params = new URL(document.location.toString()).searchParams;
    console.log(params);
    const code = params.get('code');
    console.log(code);

    axios
      .get(`${import.meta.env.VITE_BASE_URL}/api/v1/auth/login/kakao`, {
        params: {
          code: code,
        },
        // withCredentials: true,
      })
      .then((res) => {
        console.log(res.data.data);
        const { accessToken, refreshToken } = res.data.data;

        // 엑세스 토큰을 쿠키에 한시간 동안 저장;
        // setCookie('access_token', accessToken, 1);
        // // 리프레쉬 토큰을 쿠키에 30일간 저장;
        // setCookie('refresh_token', refreshToken, 30);

        console.log('Access Token:', accessToken);
        console.log('Refresh Token:', refreshToken);
      })
      .catch((err) => {
        console.error(err);
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
