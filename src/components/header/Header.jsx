import * as S from './Header.style';
import logo from '../../logo.svg';
import search from '../../assets/search.svg';

const Header = () => {
  return (
    <S.HeaderWrap>
      <header>
        <div className="header_start_menu">
          <S.Logo>
            <img src={logo} alt="logo" />
          </S.Logo>
          <S.Nav>
            <div className="menu">멘토</div>
            <div className="menu">코드리뷰</div>
          </S.Nav>
        </div>
        <div className="header_end_menu">
          <S.Nav>
            <form>
              <label>
                <input type="text" />
                <button type="button">
                  <img src={search} alt="search" />
                </button>
              </label>
            </form>
            <div className="menu">로그인</div>
            <div className="menu mento">멘토접속</div>
          </S.Nav>
        </div>
      </header>
    </S.HeaderWrap>
  );
};

export default Header;
