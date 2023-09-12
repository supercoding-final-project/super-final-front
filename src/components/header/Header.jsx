import * as S from './Header.style';
import logo from '../../logo.svg';
import { Icon } from '@/components/common/icon/Icon';

const Header = () => {
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
            <img src={logo} alt="logo" />
          </S.Logo>
          <div className="header-menu">
            <div className="menu">포스팅 작성</div>
            <div className="menu">채팅</div>
            <div className="menu">마이페이지</div>
            <div className="menu">로그아웃</div>
          </div>
        </header>
      </div>
    </S.HeaderWrap>
  );
};

export default Header;
