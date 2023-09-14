import { useState } from 'react';
import { Icon } from 'src/components/common/icon/Icon';
import { theme } from 'src/globalLayout/GlobalStyle';

import * as S from './Header.style';
import logo from '../../logo.svg';
import Modal from '../common/Modal';
import { Link } from 'react-router-dom';
import ModalPostBox from '../common/ModalPostBox';

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModalOpen = () => {
    setShowModal(true);
    document.body.style.overflowY = 'hidden';
  };

  return (
    <S.HeaderWrap>
      <div className="nav-wrapper">
        <nav>
          <div>멘티</div>
          <Icon name="NavBar" size={20} style={{ padding: '0 10px' }} />
          <div className="bold">멘토</div>
        </nav>
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
          <ModalPostBox />
        </Modal>
      )}
    </S.HeaderWrap>
  );
};

export default Header;
