import { useRecoilState } from 'recoil';

import ClosePath from '@/assets/close.svg';
import { loginModal } from '@/recoil/atom';
import * as S from './Auth.style';

const Auth = () => {
  const [isOpen, setIsOpen] = useRecoilState(loginModal);

  const kakaoLogin = () => {
    window.Kakao.Auth.authorize({
      redirectUri: `${import.meta.env.VITE_BASE_URL}api/v1/auth/login/kakao`,
      scope: 'account_email, gender',
    });
  };

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <S.Container>
      <S.Wrap>
        <S.Title>소셜 계정으로 로그인!</S.Title>

        <S.IconBox>
          <S.Kakao onClick={kakaoLogin} />

          <S.Google />
        </S.IconBox>

        <S.Image src={ClosePath} alt="close" onClick={handleModal} />
      </S.Wrap>
    </S.Container>
  );
};

export default Auth;
