import axios from 'axios';
import { useEffect, useState } from 'react';

import useJwtToken from './useJwt';

export const useGetMyReviews = (endPoint, setData) => {
  const { jwtToken } = useJwtToken();
  const [cursor, setCursor] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://codevelop.store/api/v1/reviews/${endPoint}?cursor=${cursor}&pageSize=5`,
          {
            headers: {
              Authorization: jwtToken,
            },
          },
        );
        setData(res.data.data.content);
      } catch (error) {
        // 오류 처리
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // fetchData 함수를 호출하여 데이터를 가져옵니다.
  }, [endPoint, cursor, setData, jwtToken]);

  return useGetMyReviews; // fetchData 함수를 반환
};
