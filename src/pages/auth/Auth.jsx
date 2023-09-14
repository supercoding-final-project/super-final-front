import * as S from './Auth.style';

const Auth = () => {
  const kakaoLogin = () => {
    window.Kakao.Auth.authorize({
      redirectUri: `https://super-final-front.vercel.app`,
    });
  };

  return (
    <S.Container>
      <S.Wrap>
        <S.Title>
          <abbr>👋</abbr>
          <abbr>안녕하세요, 반갑습니다!</abbr>
          <abbr>
            <abbr style={{ color: '#29CC61' }}>소셜 계정</abbr>으로{' '}
            <abbr style={{ color: '#29CC61' }}>로그인</abbr> 해볼까요?
          </abbr>
        </S.Title>
        <S.IconBox>
          <S.Kakao onClick={kakaoLogin} style={{ border: '0.5px solid #807E7D' }} />

          <S.Google style={{ border: '0.5px solid #807E7D' }} />
        </S.IconBox>
      </S.Wrap>
    </S.Container>
  );
};

export default Auth;
