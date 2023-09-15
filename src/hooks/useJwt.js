import jwtDecode from 'jwt-decode';
import { useEffect, useState } from 'react';

function useJwtToken() {
  const [jwtToken, setJwtToken] = useState(null);

  useEffect(() => {
    function getJwtTokenFromCookie() {
      const cookieString = document.cookie;
      const cookies = cookieString.split(';');
      let token = null;

      cookies.forEach((cookie) => {
        const [name, value] = cookie.trim().split('=');
        if (name === 'access_token') {
          token = value;
        }
      });

      return token;
    }

    const token = getJwtTokenFromCookie();
    setJwtToken(token);
  }, []);

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
