import axios from 'axios';
import { useEffect, useState } from 'react';

export function useHttp(endPoint, params, method = 'GET') {
  const [data, setData] = useState([]);
  const BASE_URL = 'http://54.180.86.41:8080/api/v1';
  const accessToken = localStorage.getItem('토큰 키 값');
  const headers = {};

  if (accessToken) {
    headers['Authorization'] = `Bearer ${accessToken}`;
  }

  useEffect(() => {
    const createHttp = async () => {
      try {
        let response;
        if (method === 'GET') {
          response = await axios.get(BASE_URL + endPoint, { params, headers });
        } else if (method === 'POST') {
          response = await axios.post(BASE_URL + endPoint, params, { headers });
        }
        setData(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    createHttp();
  }, [endPoint, params, method]);

  return data;
}
