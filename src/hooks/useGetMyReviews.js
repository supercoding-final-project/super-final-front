import axios from 'axios';
import { useState } from 'react';

import useJwtToken from './useJwt';

export const useGetMyReviews = async (endPoint, setData) => {
  const { jwtToken } = useJwtToken();
  const [cursor, setCursor] = useState(0);
  const res = await axios.get(
    `https://codevelop.store/api/v1/reviews/${endPoint}?cursor=${cursor}&pageSize=5`,
    {
      headers: {
        Authorization: jwtToken,
      },
    },
  );
  return setData(res.data.data.content);
};
