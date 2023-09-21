import axios from 'axios';
import { useEffect, useState } from 'react';

import Schedule from './Schedule';

const MetaBox = ({ title, mentoId }) => {
  const [mentoNick, setMentoNick] = useState(null);
  const [mentiNick, setMentiNick] = useState(null);

  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }

  const cookie = getCookie('access_token');
  console.log(cookie);

  const mentiName = async () => {
    try {
      console.log(cookie);
      const response = await axios.get(`https://codevelop.store/api/v1/users/info`, {
        headers: {
          Authorization: cookie,
          'Content-Type': 'application/json',
        },
      });
      console.log(response.data.data);
      setMentiNick(response.data.data.nickname);
      return response.data.data.nickname;
    } catch (error) {
      console.error(error.message);
    }
  };
  console.log(mentiName);

  const mentoName = async () => {
    try {
      const response = await axios.get(`https://codevelop.store/api/v1/mentors/detail/${mentoId}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response.data.data);
      setMentoNick(response.data.data.nickname);
      return response.data.data.nickname;
    } catch (error) {
      console.error(error.message);
    }
  };

  console.log(mentoName);
  useEffect(() => {
    mentoName();
    mentiName();
  }, []);

  return (
    <ul className="info-container">
      <li>
        <span className="label">POST명</span>
        <span className="info">{title}</span>
      </li>
      <li>
        <span className="label">멘토</span>
        <span className="info">{mentoNick}</span>
      </li>
      <li>
        <span className="label">멘티</span>
        <span className="info">{mentiNick}</span>
      </li>
      <li>
        <span className="label">일정</span>
        <Schedule />
      </li>
    </ul>
  );
};

export default MetaBox;
