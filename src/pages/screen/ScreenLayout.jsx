import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

// import { OpenVidu } from 'openvidu-browser';
// import { useEffect, useState } from 'react';
import * as S from './screen.style';

const ScreenLayout = () => {
  const [session, setSession] = useState(null);
  // console.log(session);

  const fetchDataID = async () => {
    const data = {
      mediaMode: 'ROUTED',
      recordingMode: 'MANUAL',
      customSessionId: '',
    };

    const base64 = btoa('openviduapp:MY_SECRET');
    console.log(base64);

    try {
      const response = await axios.post('http://54.180.86.41:8080/api/v1/video/create', data, {
        headers: {
          // Authorization: `Basic ${base64}`,
          'Content-Type': 'application/json',
        },
      });
      console.log('Authorization :', `Basic ${base64}`);
      console.log('성공 :', response.data);
      // localStorage.setItem('sessionId', response.data);
      setSession(response.data.data);
    } catch (error) {
      console.error('에러 :', error);
    }
  };

  useEffect(() => {
    fetchDataID();
  }, []);

  const fetchDataConnection = async () => {
    const connection = {
      type: 'WEBRTC',
      data: '심채운',
      role: 'PUBLISHER',
    };

    try {
      console.log(session);
      const getResponse = axios.post(
        `http://54.180.86.41:8080/api/v1/video/enter/${session}`,
        connection,
        {
          header: {
            'Content-Type': 'application/json',
          },
        },
      );
      console.log('성공 :', getResponse);
    } catch (error) {
      console.error('get 에러 :', error);
    }
  };

  useEffect(() => {
    if (session !== null) {
      fetchDataConnection();
    }
  }, [session]);

  return (
    <S.ScreenWrap>
      <div className="screenBox">
        <div className="screen"></div>
        <div className="option">
          <div className="option-mute option-item">음</div>
          <div className="option-camera option-item">카</div>
          <div className="option-share option-item">공</div>
          <div className="option-close option-item">나가기</div>
        </div>
      </div>
      <div className="chat">채팅</div>
    </S.ScreenWrap>
  );
};

export default ScreenLayout;
