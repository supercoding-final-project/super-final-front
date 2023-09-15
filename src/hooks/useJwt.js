import jwtDecode from 'jwt-decode';
import { useEffect, useState } from 'react';

// 커스텀 훅 정의
function useJwtToken() {
  const [jwtToken, setJwtToken] = useState(null);

  useEffect(() => {
    // 웹 쿠키에서 JWT 토큰 가져오는 함수
    function getJwtTokenFromCookie() {
      const cookieString = document.cookie;
      const cookies = cookieString.split(';');
      let token = null;

      cookies.forEach((cookie) => {
        const [name, value] = cookie.trim().split('=');
        if (name === 'jwtToken') {
          token = value;
        }
      });

      return token;
    }

    // 컴포넌트가 마운트될 때 JWT 토큰을 가져와 상태에 설정
    const token = getJwtTokenFromCookie();
    setJwtToken(token);
  }, []);

  // JWT 토큰 파싱 함수
  const parseJwtToken = () => {
    try {
      const decodedToken = jwtDecode(jwtToken);
      return decodedToken;
    } catch (error) {
      console.error('JWT 토큰을 파싱하는 중 오류가 발생했습니다:', error);
      return null;
    }
  };

  return {
    jwtToken,
    decodedToken: parseJwtToken(),
  };
}

export default useJwtToken;
