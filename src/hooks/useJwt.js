// import jwtDecode from 'jwt-decode';
import { useEffect, useState } from 'react';

function useJwtToken() {
  const [jwtToken, setJwtToken] = useState(null);
  const [decodedToken, setDecodedToken] = useState(null);

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

  useEffect(() => {
    if (jwtToken) {
      try {
        const decodedToken = jwtDecode(jwtToken);
        setDecodedToken(decodedToken);
      } catch (error) {
        console.error('JWT 토큰 파싱 오류', error);
        setDecodedToken(null);
      }
    } else {
      setDecodedToken(null);
    }
  }, [jwtToken]);

  return {
    jwtToken,
    decodedToken,
  };
}

export default useJwtToken;
