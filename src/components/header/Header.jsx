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
const menti_access_token =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjUyNTIsImF1dGhvcml0aWVzIjpbIk1FTlRFRSJdLCJpYXQiOjE2OTUwNTExMjQsImV4cCI6MTcyNjU4NzEyNH0.v0ly5U3mVe15JyctMOHxBT_YZUZev5szX623gy1ND8s';
const mento_access_token =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjEwMDQsImF1dGhvcml0aWVzIjpbIk1FTlRPUiJdLCJpYXQiOjE2OTUwNTExMjQsImV4cCI6MTcyNjU4NzEyNH0.sCThkhy4Xe8YGCa0jdho1TteZ-BtLMl_iQHQSAeLn_w';
const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [mentiToMentoModal, setMentiToMentoModal] = useState(false);

  // 로그인여부 확인 상태
  const [loginState, setLoginState] = useState(false);
  // 멘티,멘토 상태
  const [mento, setMento] = useState(false);
  // User정보
  const [userInfo, setUserInfo] = useState('');

  //1. 쿠키를 확인해서 'access-token' 안에있으면 로그인여부 true
  //2. 로그인여부 true 멘티글자가 두꺼워짐

  const mentiMentoSwapButton = () => {
    setMento(!mento);
  };

  const handleModalOpen = () => {
    setShowModal(true);
    document.body.style.overflowY = 'hidden';
  };

  const mentiToMento = () => {
    if (userInfo === null) {
      console.log('멘토로 전환하자!!');
      setMentiToMentoModal(true);
    }
  };

  const User = async () => {
    try {
      const response = await axios.get('https://codevelop.store/api/v1/users/info', {
        headers: {
          Authorization: menti_access_token,
        },
      });
      setUserInfo(response.data.data.mentorProfile);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    User();
  }, []);

  // console.log(userInfo)

  return (
    <S.HeaderWrap>
      <div className="nav-wrapper">
        <S.MentoMentoSwapBox>
          <S.MentiSwapButton $mento={mento} onClick={mentiMentoSwapButton}>
            멘티
          </S.MentiSwapButton>
          <Icon name="NavBar" size={20} style={{ padding: '0 10px' }} />
          <S.MentoSwapButton
            $mento={mento}
            onClick={() => {
              mentiMentoSwapButton();
              mentiToMento();
            }}
          >
            멘토
          </S.MentoSwapButton>
        </S.MentoMentoSwapBox>
      </div>
      <div className="header-wrapper">
        <header>
          <S.Logo>
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </S.Logo>
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
            <div className="menu" style={{ color: theme.color.point }}>
              <Link to="/auth">로그인</Link>
            </div>
          </div>
        </header>
      </div>
      {showModal && (
        <Modal setShowModal={setShowModal} width="660px" height="760px">
          <PostBox setShowModal={setShowModal} />
        </Modal>
      )}
      {mentiToMentoModal && (
        <Modal setShowModal={setMentiToMentoModal} width="800px" height="700px">
          <MentiToMentoModal />
        </Modal>
      )}
    </S.HeaderWrap>
  );
};

export default Header;
