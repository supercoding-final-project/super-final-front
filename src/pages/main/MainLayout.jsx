import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { keywordAtom, mentorListAtom } from 'src/store/filter/MentorListAtom.js';

import * as S from './Main.style.js';
import MainSearchContainer from './MainSearchContainer.jsx';
import MainSearchLink from './MainSearchLink.jsx';
import MentorCardItem from './MentorCardItem.jsx';
import PostCardItem from './PostCardItem.jsx';

const MainLayout = () => {
  const [accessToken, setAccessToken] = useState('');
  const [refreshToken, setRefreshToken] = useState('');

  // 모든 멘토 조회 API
  // const [mentors, setMentors] = useState([]);
  const [mentors, setMentors] = useRecoilState(mentorListAtom);
  // 멘토 키워드 조회 API
  // const [mentorsKeyword, setMentorsKeyword] = useState([]);
  const [mentorsKeyword, setMentorsKeyword] = useRecoilState(keywordAtom);
  const [keyword, setKeyword] = useState(''); // 입력 값을 관리하는 상태
  const [activeTab, setActiveTab] = useState('post'); // 초기값으로 'mentor' 탭을 활성화
  const navigate = useNavigate();
  // POST 키워드 조회 API
  const [posts, setPosts] = useState([]);

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

  const getMentorCard = async () => {
    const res = await axios.get('https://codevelop.store/api/v1/mentors?pageSize=4');
    setMentors(res.data.data.content);
    console.log(mentors);
  };

  useEffect(() => {
    getMentorCard();
  }, []);

  const getMentorKeywordCard = async () => {
    try {
      const res = await axios.get(`https://codevelop.store/api/v1/mentors?keyword=${keyword}`);
      setMentorsKeyword(res.data.data.content);
      console.log('mentorsKeyword', mentorsKeyword);
    } catch (error) {
      console.error('API 요청 에러:', error);
    }
  };

  useEffect(() => {
    getMentorKeywordCard();
  }, [keyword]); // keyword 상태가 변경될 때마다 API 요청을 다시 보냄

  const handleInputChange = (e) => {
    setKeyword(e.target.value); // useState()
    // setSearchInput(e.target.value); // recoil
  };

  const handleTabClick = (tab) => {
    // setActiveTab(tab); // useState()
    setActiveTab(tab); // recoil
  };

  const handleSearch = () => {
    if (activeTab === 'mentor') {
      navigate('/list/mentor'); // 멘토 탭이 active일 때 '/list/mentor'로 이동
    } else if (activeTab === 'post') {
      navigate('/list/post'); // POST 탭이 active일 때 '/list/post'로 이동
    }
    // 여기서 검색 결과를 필터링하고 표시하도록 로직을 추가하세요.
    // 검색 결과를 state에 저장하고, 이를 렌더링하는 방식으로 구현할 수 있습니다.
  };

  // POST 카드 API
  const getPostCard = async () => {
    // const res = await axios.get(`https://codevelop.store/api/v1/post/search?word= &page=1&size=8`);
    const res = await axios.get(`https://codevelop.store/api/v1/post/search?word=&page=1&size=4`);
    setPosts(res.data.data.postList);
    console.log('posts', posts);
    console.log('res.data.data.postList', res.data.data.postList);
  };

  useEffect(() => {
    getPostCard();
  }, []);

  return (
    <>
      <S.MainWrapper>
        {/* <S.StartCodeReviewBox>
          <Link to="/auth">코드 리뷰 시작하기!</Link>
        </S.StartCodeReviewBox> */}
        <MainSearchContainer
          activeTab={activeTab}
          handleTabClick={handleTabClick}
          handleSearch={handleSearch}
          handleInputChange={handleInputChange}
          keyword={keyword}
        />
        {/* <MainSearchLink activeTab={activeTab} handleSearch={handleSearch}>
          검색하기
        </MainSearchLink> */}
        <S.MainCardsContainer>
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
              {posts.map((data, index, postId) => (
                <PostCardItem key={index} data={data} id={postId} />
              ))}
            </ul>
          </article>
          <article>
            <div>
              <h3>
                <span>HOT</span> 멘토!
              </h3>
              <p className="more">
                <Link to="/list/mentor">모든 멘토 보러가기 &gt;</Link>
              </p>
            </div>
            <ul>
              {mentors.map((data, index) => (
                <MentorCardItem key={index} data={data} />
              ))}
            </ul>
          </article>
        </S.MainCardsContainer>
      </S.MainWrapper>
    </>
  );
};

export default MainLayout;
