import axios from 'axios';
import { m } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'src/components/common/icon/Icon';
import { theme } from 'src/globalLayout/GlobalStyle';

import * as S from './Header.style';
import MentiToMentoModal from './MentiToMentoModal';
import logo from '../../logo.svg';
import Modal from '../common/Modal';
import PostBox from '../post/PostBox';

// import PostBox from '../post/PostBox';
//유저를 조회함 멘티인지 멘토인지 확인 하기위해
// const menti_access_token =
//   'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjUyNTIsImF1dGhvcml0aWVzIjpbIk1FTlRFRSJdLCJpYXQiOjE2OTUwNTExMjQsImV4cCI6MTcyNjU4NzEyNH0.v0ly5U3mVe15JyctMOHxBT_YZUZev5szX623gy1ND8s';
// const mento_access_token =
//   'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjEwMDQsImF1dGhvcml0aWVzIjpbIk1FTlRPUiJdLCJpYXQiOjE2OTUwNTExMjQsImV4cCI6MTcyNjU4NzEyNH0.sCThkhy4Xe8YGCa0jdho1TteZ-BtLMl_iQHQSAeLn_w';
const Header = () => {
  const cookie = getCookie('access_token');

  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }

  const [showModal, setShowModal] = useState(false);
  const [mentiToMentoModal, setMentiToMentoModal] = useState(false);

  // 멘티 로그인일 때
  const response = {
    email: null,
    menteeId: 5337,
    nickname: '심채운',
    thumbnailImageUrl:
      'http://k.kakaocdn.net/dn/daSnSB/btsuejJ4Luj/yC1DsjfDmFmhFITZiuZCPK/img_110x110.jpg',
    userId: 8563,
    // mentorProfile: null,
    mentorProfile: {
      mentorId: 1,
      company: '슈퍼코딩',
      introduction: '헤이 모두들 안녕 내가 누군지 아니~?',
      currentDutyName: 'BACKEND_DEVELOPER',
      currentPeriod: '6년',
      searchable: true,
      careers: [
        {
          dutyName: 'BACKEND_DEVELOPER',
          period: '6년',
        },
      ],
      skillStacks: ['JAVA', 'SPRING'],
    },
  };

  const handleModalOpen = () => {
    setShowModal(true);
    document.body.style.overflowY = 'hidden';
  };

  const [user, setUser] = useState(null);
  const [loginState, setLoginState] = useState(null);

  const User = async () => {
    try {
      const response = await axios.get('https://codevelop.store/api/v1/users/info', {
        headers: {
          Authorization: cookie,
        },
      });
      console.log(response.data.data);
      if (response.data.data.mentorProfile === null) {
        setLoginState('MENTEE');
      } else {
        setLoginState('MENTOR');
      }
      setUser(response.data.data);
    } catch (error) {
      console.log(error);
      setLoginState(null);
    }
  };
  useEffect(() => {
    User();
  }, []);

  const checkUserInfo = () => {
    if (user === null) {
      return (
        <div className="header-menu">
          <div className="menu" style={{ color: theme.color.point }}>
            <Link to="/auth">로그인</Link>
          </div>
        </div>
      );
    } else if (user !== null && user.mentorProfile === null) {
      return (
        <div className="header-menu">
          <div className="menu">
            <Link to="/chatroom">채팅</Link>
          </div>
          <div className="menu">
            <Link to="/my/menti">마이페이지</Link>
          </div>
          <div className="menu">
            <Link to="/">로그아웃</Link>
          </div>
        </div>
      );
    } else {
      return (
        <div className="header-menu">
          <div className="menu" onClick={handleModalOpen}>
            포스팅 작성
          </div>
          <div className="menu">
            <Link to="/chatroom">채팅</Link>
          </div>
          <div className="menu">
            <Link to="/my/menti">마이페이지</Link>
          </div>
          <div className="menu">
            <Link to="/">로그아웃</Link>
          </div>
        </div>
      );
    }
  };

  useEffect(() => {
    checkUserInfo();
  }, [user]);

  const clickToggle = (role) => {
    console.log(role);
    if (role === 'MENTEE') {
      return;
    } else {
      setMentiToMentoModal(true);
    }
  };

  return (
    <S.HeaderWrap>
      <div className="nav-wrapper">
        <S.MentoMentoSwapBox>
          <S.MentiSwapButton>
            <span
              className={loginState === 'MENTEE' ? 'active' : ''}
              onClick={() => clickToggle('MENTEE')}
            >
              멘티
            </span>
          </S.MentiSwapButton>
          <Icon name="NavBar" size={20} style={{ padding: '0 10px' }} />
          <S.MentiSwapButton>
            <span
              className={loginState === 'MENTOR' ? 'active' : ''}
              onClick={() => clickToggle('MENTOR')}
            >
              멘토
            </span>
          </S.MentiSwapButton>
        </S.MentoMentoSwapBox>
      </div>
      <div className="header-wrapper">
        <header>
          <S.Logo>
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </S.Logo>
          {checkUserInfo()}
        </header>
      </div>
      {showModal && (
        <Modal setShowModal={setShowModal} width="660px" height="760px">
          <PostBox setShowModal={setShowModal} />
        </Modal>
      )}
      {mentiToMentoModal && (
        <Modal setShowModal={setMentiToMentoModal} width="800px" height="900px">
          <MentiToMentoModal />
        </Modal>
      )}
    </S.HeaderWrap>
  );
};

export default Header;
