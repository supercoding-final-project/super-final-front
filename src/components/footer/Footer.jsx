import { Link } from 'react-router-dom';

import * as S from './Footer.style';
import { Icon } from '../common/icon/Icon';

const Footer = () => {
  if (window.location === '/chatroom') return null;

  return (
    <S.FooterWrapper>
      <footer>
        <Link to="/">
          <div className="logo">CODEVELOPE</div>
        </Link>
        <S.Company>
          <ul>
            <li>
              <span>CODEVELOPE(주)</span>
              <Icon name="NavBar" size={16} style={{ padding: '0 8px' }} />
              <span>대표이사 : 홍길동, 홍길순</span>
            </li>
            <li>
              <span>서울시 송파구 송파대로 999</span>
            </li>
            <li>
              <span>사업자 등록번호 : 000-00-00000</span>
            </li>
          </ul>
          <p className="bold">사업자 정보</p>
        </S.Company>
        <S.Company>
          <ul>
            <li>
              <span>고객센터 : 0000-0000</span>
            </li>
            <li>
              <span>대표 메일 : codevelope@code.com</span>
            </li>
            <li>
              <span>제휴 문의의 : codevelope@code.com</span>
            </li>
          </ul>
          <p className="bold">서비스 이용약관</p>
          <p className="bold">FAQ</p>
          <p className="bold">개인정보 처리방침</p>
        </S.Company>
      </footer>
    </S.FooterWrapper>
  );
};

export default Footer;
