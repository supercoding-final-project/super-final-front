import ClosePath from '@/assets/close.svg';
import * as S from './Auth.style';

const Auth = () => {
  return (
    <S.Container>
      <S.Wrap>
        <S.Title>소셜 계정으로 로그인!</S.Title>

        <S.IconBox>
          <S.Kakao />

          <S.Google />
        </S.IconBox>

        <S.Image src={ClosePath} alt="close" />
      </S.Wrap>
    </S.Container>
  );
};

export default Auth;
