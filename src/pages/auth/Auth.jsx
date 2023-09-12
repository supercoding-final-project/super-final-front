import { useState } from 'react';
import { toast } from 'react-toastify';

import googlePath from 'src/assets/google-logo.svg';
import kakaoPath from 'src/assets/kakao-logo.svg';
import logoPath from 'src/assets/login-logo.svg';
import Button from 'src/components/auth/auth-button/Button';
import * as S from './Auth.style';

const Auth = () => {
  const [selectedRole, setSelectedRole] = useState('menti');

  const handleRoleChange = (e) => {
    setSelectedRole(e.target.value);
  };

  const handleButton = () => {
    toast.success('dddd');
    toast.error('err');
  };

  return (
    <S.Container>
      <button onClick={handleButton}>asdfsd</button>
      <S.LogoWrap>
        <img src={logoPath} alt="logo" />
      </S.LogoWrap>

      <S.SideWrap>
        <S.TabsWrapper>
          <label>
            <input
              value="menti"
              type="radio"
              checked={selectedRole === 'menti'}
              onChange={handleRoleChange}
            />
            <span>멘티</span>
          </label>

          <label>
            <input
              value="mento"
              type="radio"
              checked={selectedRole === 'mento'}
              onChange={handleRoleChange}
            />
            <span>멘토</span>
          </label>

          <span className="selection"></span>
        </S.TabsWrapper>

        <h1>안녕하세요?</h1>

        <p>
          저희 멘토링에 오신걸
          <br />
          환영해요.
        </p>

        <S.ButtonBox>
          <Button label="카카오" color="#FAE500" imgSrc={kakaoPath} hoverColor="#EEDA00" />

          <Button label="구글" color="#F8F8F8" imgSrc={googlePath} hoverColor="#EAEAEA" />
        </S.ButtonBox>
      </S.SideWrap>
    </S.Container>
  );
};

export default Auth;
