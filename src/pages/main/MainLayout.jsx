import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'src/components/common/Button.jsx';
import { Icon } from 'src/components/common/icon/Icon.jsx';
import { theme } from 'src/globalLayout/GlobalStyle.js';

import * as S from './Main.style.jsx';
import MentoCardItem from './MentoCardItem.jsx';
import PostCardItem from './PostCardItem.jsx';

const MainLayout = () => {
  const [accessToken, setAccessToken] = useState('');
  const [refreshToken, setRefreshToken] = useState('');

  const setCookie = (name, value, days) => {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = 'expires=' + date.toUTCString();
    document.cookie = name + '=' + value + ';' + expires + ';path=/';
  };

  const refreshAccessToken = () => {
    axios
      .post(`${import.meta.env.VITE_BASE_URL}/api/v1/auth/token/refresh`, {
        refreshToken: refreshToken,
      })
      .then((response) => {
        const newAccessToken = response.data.accessToken;

        setAccessToken(newAccessToken);

        setCookie('access_token', newAccessToken, 1);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
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
        setCookie('access_token', accessToken, 1);
        // 리프레쉬 토큰을 쿠키에 30일간 저장;
        setCookie('refresh_token', refreshToken, 30);

        console.log('Access Token:', accessToken);
        console.log('Refresh Token:', refreshToken);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    const refreshTokenTimer = setInterval(
      () => {
        refreshAccessToken();
      },
      55 * 60 * 1000,
    );

    return () => {
      clearInterval(refreshTokenTimer);
    };
  }, []);

  return (
    <>
      <S.MainWrapper>
        <Link to="/auth">
          <S.StartCodeReviewBox>
            <Button
              text={'코드 리뷰 시작하기!'}
              bgcolor={theme.color.point}
              fontcolor={theme.color.bgc1}
            />
          </S.StartCodeReviewBox>
        </Link>
        <S.MainSearchContainer>
          <S.MainSearchList>
            <S.MainSearchItem className="active">멘토</S.MainSearchItem>
            <S.MainSearchItem>POST</S.MainSearchItem>
          </S.MainSearchList>
          <S.MainSearchBox>
            <form>
              <Icon name="Search" />
              <label>
                <input type="text" />
              </label>
              <button>검색</button>
            </form>
          </S.MainSearchBox>
          <S.BestTechStackBox>
            <h3>BEST10 기술 스택</h3>
            <S.BestTechStackList>
              <S.BestTechStackItem>
                <div></div>
                <span>Swift</span>
              </S.BestTechStackItem>
              <S.BestTechStackItem>
                <div></div>
                <span>JavaScript</span>
              </S.BestTechStackItem>
              <S.BestTechStackItem>
                <div></div>
                <span>Vue</span>
              </S.BestTechStackItem>
              <S.BestTechStackItem>
                <div></div>
                <span>Nextjs</span>
              </S.BestTechStackItem>
              <S.BestTechStackItem>
                <div></div>
                <span>Nodejs</span>
              </S.BestTechStackItem>
              <S.BestTechStackItem>
                <div></div>
                <span>Flutter</span>
              </S.BestTechStackItem>
              <S.BestTechStackItem>
                <div></div>
                <span>Kotlin</span>
              </S.BestTechStackItem>
              <S.BestTechStackItem>
                <div></div>
                <span>React</span>
              </S.BestTechStackItem>
              <S.BestTechStackItem>
                <div></div>
                <span>MSSQL</span>
              </S.BestTechStackItem>
              <S.BestTechStackItem>
                <div></div>
                <span>jQuery</span>
              </S.BestTechStackItem>
            </S.BestTechStackList>
          </S.BestTechStackBox>
        </S.MainSearchContainer>
        <S.MainCardsContainer>
          <article>
            <div>
              <h3>
                <span>HOT</span> 멘토!
              </h3>
              <p className="more">모든 멘토 보러가기 &gt;</p>
            </div>
            <ul>
              <MentoCardItem />
              <MentoCardItem />
              <MentoCardItem />
              <MentoCardItem />
            </ul>
          </article>
          <article>
            <div>
              <h3>
                <span>HOT</span> POST!
              </h3>
              <p className="more">모든 POST 보러가기 &gt;</p>
            </div>
            <ul>
              <PostCardItem />
              <PostCardItem />
              <PostCardItem />
              <PostCardItem />
            </ul>
          </article>
        </S.MainCardsContainer>
      </S.MainWrapper>
    </>
  );
};

export default MainLayout;
