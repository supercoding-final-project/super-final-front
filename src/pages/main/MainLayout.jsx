import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import * as S from './Main.style.jsx';
import MainSearchContainer from './MainSearchContainer.jsx';
import MentoCardItem from './MentoCardItem.jsx';
import PostCardItem from './PostCardItem.jsx';

const MainLayout = () => {
  const [accessToken, setAccessToken] = useState('');
  const [refreshToken, setRefreshToken] = useState('');
  const [mentors, setMentors] = useState([]);

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

  const getMentoCard = async () => {
    const res = await axios.get('https://codevelop.store/api/v1/mentors?pageSize=4');
    setMentors(res.data.data.content);
    console.log(mentors);
  };

  useEffect(() => {
    getMentoCard();
  }, []);

  return (
    <>
      <S.MainWrapper>
        <S.StartCodeReviewBox>
          <Link to="/auth">코드 리뷰 시작하기!</Link>
        </S.StartCodeReviewBox>
        <MainSearchContainer />
        <S.MainCardsContainer>
          <article>
            <div>
              <h3>
                <span>HOT</span> 멘토!
              </h3>
              <p className="more">
                <Link to="/list/mento">모든 멘토 보러가기 &gt;</Link>
              </p>
            </div>
            <ul>
              {mentors.map((data, index) => (
                <MentoCardItem key={index} data={data} />
              ))}
            </ul>
          </article>
          <article>
            <div>
              <h3>
                <span>HOT</span> POST!
              </h3>
              <p className="more">
                <Link to="/list/post">모든 POST 보러가기 &gt;</Link>
              </p>
            </div>
            <ul>
              <PostCardItem />
            </ul>
          </article>
        </S.MainCardsContainer>
      </S.MainWrapper>
    </>
  );
};

export default MainLayout;
