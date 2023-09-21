import axios from 'axios';
import { OpenVidu } from 'openvidu-browser';
import { useEffect, useRef, useState } from 'react';

const ShareScreen = ({ sessionId, setOption, option }) => {
  // console.log(option);
  const shareRef = useRef(null);
  const name = '명재';
  const [token, setToken] = useState(null);

  console.log('화면공유 token :', shareRef);
  const [session, setSession] = useState(null);
  const [screenPublisher, setScreenPublisher] = useState(null);
  const [screenShareActive, setScreenShareActive] = useState(false);
  const [subscribers, setSubscribers] = useState([]); // 추가된 부분

  const fetchDataConnection = async () => {
    const connection = {
      type: 'WEBRTC',
      data: name,
      role: 'PUBLISHER',
    };

    try {
      // console.log(session);
      const getResponse = await axios.post(
        `https://codevelop.store/api/v1/video/enter/${sessionId}`,
        connection,
        {
          header: {
            'Content-Type': 'application/json',
          },
        },
      );
      console.log('화면 공유 성고오오옹 ---------- :', getResponse.data.data);
      setToken(getResponse.data.data);
      return getResponse.data.data;
    } catch (error) {
      console.error('get 에러 :', error);
    }
  };

  useEffect(() => {
    fetchDataConnection();
  }, []);

  useEffect(() => {
    if (sessionId && name && token) {
      const OV = new OpenVidu();
      const mySession = OV.initSession();

      mySession.connect(token, { clientData: name }).then(() => {
        const screenPublisher = OV.initPublisher(undefined, {
          videoSource: 'screen',
          publishAudio: true,
          publishVideo: true,
          resolution: '415x156',
          frameRate: 30,
        });

        screenPublisher.once('accessAllowed', () => {
          screenPublisher.stream
            .getMediaStream()
            .getVideoTracks()[0]
            .addEventListener('ended', () => {
              console.log('사용자가 "화면 공유 중지" 버튼을 눌렀습니다.');
              setScreenShareActive(false); // 화면 공유 중지
              setOption({ ...option, screen: false });
            });

          mySession.publish(screenPublisher);
          setScreenPublisher(screenPublisher);
        });

        screenPublisher.once('accessDenied', () => {
          console.warn('화면 공유 접근이 거부되었습니다.');
        });
      });

      setSession(mySession);
    }
  }, [sessionId, name, token]);

  useEffect(() => {
    if (screenPublisher !== null && shareRef.current) {
      screenPublisher.addVideoElement(shareRef.current);
      // 구독자로 추가
      session.on('streamCreated', (event) => {
        const subscriber = session.subscribe(event.stream, undefined);
        // ScreenLayout의 subscribers 상태 업데이트
        setSubscribers((prevSubscribers) => [...prevSubscribers, subscriber]);
      });

      session.on('streamDestroyed', (event) => {
        // 구독자에서 제거하기
        deleteSubscriber(event.stream.streamManager);
      });
    }
  }, [screenPublisher]);

  // useEffect(() => {
  //   if (!option.screen && shareRef.current) {
  //     setOption({ ...option, screen: false });
  //   }
  // }, []);
  const deleteSubscriber = (streamManager) => {
    let updatedSubscribers = subscribers.filter((sub) => sub !== streamManager);
    // ScreenLayout의 subscribers 상태 업데이트
    setSubscribers(updatedSubscribers);
  };

  return <video ref={shareRef} autoPlay={true}></video>;
};

export default ShareScreen;
