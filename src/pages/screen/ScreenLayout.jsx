import axios from 'axios';
import { OpenVidu } from 'openvidu-browser';
import { useRef, useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// import { OpenVidu } from 'openvidu-browser';
// import { useEffect, useState } from 'react';
import * as S from './screen.style';
import { Icon } from '../../components/common/icon/Icon';

const ScreenLayout = () => {
  const navigate = useNavigate();

  const [option, setOption] = useState({
    mute: true,
    camera: true,
    screen: false,
  });

  console.log(option);

  const [session, setSession] = useState(null);
  console.log(session);
  const [sessionStatus, setSessionStatus] = useState(undefined);
  console.log(sessionStatus);
  const [token, setToken] = useState(null); // 서버로부터 받은 토큰
  const [myUserName, setMyUserName] = useState('채운');
  const [publisher, setPublisher] = useState(null);

  const [subscribers, setSubscribers] = useState([]);
  const videoRef = useRef(null);
  const shareRef = useRef(null);
  const [mainStreamManager, setMainStreamManager] = useState(undefined);
  const [screenShareActive, setScreenShareActive] = useState(false);
  const [cameraActive, setCameraActive] = useState(true);

  console.log(
    '여기봐라-------------------- :',
    'session :',
    session,
    '/  sessionStatus :',
    sessionStatus,
    '/  token :',
    token,
    '/  myUserName :',
    myUserName,
    '/  publisher :',
    publisher,
    '/  subscribers :',
    subscribers,
  );

  const OV = new OpenVidu();

  useEffect(() => {
    // OpenVidu 세션 생성 및 토큰 요청
    const createSessionAndToken = async () => {
      const sessionData = await fetchDataID(); // 세션 생성 요청
      setSession(sessionData);

      const tokenData = await fetchDataConnection(sessionData); // 토큰 요청
      setToken(tokenData);

      initializeSession(sessionData, tokenData);
    };

    createSessionAndToken();
  }, []);

  // 백 server와 session의 id값 가져오기
  const fetchDataID = async () => {
    const data = {
      mediaMode: 'ROUTED',
      recordingMode: 'MANUAL',
      customSessionId: '', //여기에 멘토 이름으로 세션ID
    };

    //Base64로 변환해서 보내기
    const base64 = btoa('openviduapp:MY_SECRET');
    // console.log('Authorization :', `Basic ${base64}`);

    try {
      const response = await axios.post('http://13.124.66.205:8080/api/v1/video/create', data, {
        headers: {
          // Authorization: `Basic ${base64}`,
          'Content-Type': 'application/json',
        },
      });
      setSession(response.data.data);
      console.log('session id :', response.data.data);
      return response.data.data;
    } catch (error) {
      console.error('에러 :', error);
    }
  };

  // 백 server와 세션 연결해 토큰값 가져오기
  const fetchDataConnection = async (session) => {
    const connection = {
      type: 'WEBRTC',
      data: myUserName,
      role: 'PUBLISHER',
    };

    try {
      // console.log(session);
      const getResponse = await axios.post(
        `http://13.124.66.205:8080/api/v1/video/enter/${session}`,
        connection,
        {
          header: {
            'Content-Type': 'application/json',
          },
        },
      );
      console.log('성공 :', getResponse);
      setToken(getResponse.data.data);
      return getResponse.data.data;
    } catch (error) {
      console.error('get 에러 :', error);
    }
  };

  const deleteSubscriber = (streamManager) => {
    let updatedSubscribers = subscribers.filter((sub) => sub !== streamManager);
    setSubscribers(updatedSubscribers);
  };

  const initializeSession = async (sessionData, tokenData) => {
    console.log('-------------Session 초기화-----------');
    // console.log(sessionData);
    // console.log(tokenData);
    // console.log('가져온 토큰은 ', tokenData);
    const mySession = OV.initSession();
    if (tokenData !== null) {
      mySession.connect(tokenData, { clientData: myUserName }).then(async () => {
        let publisher = await OV.initPublisherAsync(undefined, {
          audioSource: undefined,
          videoSource: undefined,
          // videoSource: 'screen', // 화면 공유할 때 필요
          publishAudio: true,
          publishVideo: true,
          resolution: '640x480',
          frameRate: 30,
          insertMode: 'APPEND',
          mirror: false,
        });
        mySession.publish(publisher);

        const devices = await OV.getDevices();
        const videoDevices = devices.filter((device) => device.kind === 'videoinput');
        const currentVideoDeviceId = publisher.stream
          .getMediaStream()
          .getVideoTracks()[0]
          .getSettings().deviceId;
        const currentVideoDevice = videoDevices.find(
          (device) => device.deviceId === currentVideoDeviceId,
        );

        setMainStreamManager(publisher);
        setPublisher(publisher);
      });
    }

    mySession.on('streamCreated', (event) => {
      const subscriber = mySession.subscribe(event.stream, undefined);
      setSubscribers([...subscribers, subscriber]);
    });

    mySession.on('streamDestroyed', (event) => {
      deleteSubscriber(event.stream.streamManager);
    });

    mySession.on('exception', (exception) => {
      console.warn(exception);
    });

    setSessionStatus(mySession);
  };

  // console.log('subscribers :::::', subscribers);
  // console.log('publisher :::::', publisher);

  useEffect(() => {
    if (publisher !== null && videoRef.current) {
      publisher.addVideoElement(videoRef.current);
    }
  }, [publisher]);

  useEffect(() => {
    if (publisher !== null && shareRef.current) {
      publisher.addVideoElement(shareRef.current);
    }
  }, [publisher]);

  // 마이크 설정 변경 함수
  const toggleMicrophone = () => {
    console.log('마이크 눌림');
    console.log(publisher);
    if (publisher) {
      const newStatus = !publisher.stream.getMediaStream().getAudioTracks()[0].enabled;
      // console.log(!publisher.stream, 'gdgd');
      // console.log(publisher.stream.getMediaStream().getAudioTracks()[0]);
      publisher.publishAudio(newStatus);
      setOption({ ...option, mute: newStatus });
    }
  };

  // 카메라 설정 변경 함수
  const toggleCamera = () => {
    if (publisher) {
      console.log('제발');
      const newStatus = !publisher.stream.getMediaStream().getVideoTracks()[0].enabled;
      publisher.publishVideo(newStatus);
      console.log(newStatus);
      setOption({ ...option, camera: newStatus });
    }
  };

  // 세션 나가기
  const leaveSession = () => {
    console.log('나가기 눌림');

    if (sessionStatus) {
      console.log('여기 됨?');
      sessionStatus.disconnect();
    }

    setSessionStatus(undefined);
    setSubscribers([]);
    setSession(null);
    setMyUserName('');
    // setMainStreamManager(undefined);
    setPublisher(null);
    // navigate('/');
  };
  // console.log(option);

  const toggleScreenSharing = async () => {
    console.log('화면 공유 눌림');
    console.log(publisher, OV);
    if (publisher && OV) {
      if (screenShareActive) {
        // 화면 공유 중지
        try {
          await publisher.unpublish();
          setScreenShareActive(false);
          setOption({ ...option, screen: false });
        } catch (error) {
          console.error('화면 공유 중지 오류:', error);
        }
      } else {
        // 화면 공유 시작
        try {
          const screenSharePublisher = OV.initPublisher(undefined, {
            videoSource: 'screen',
            publishAudio: true,
            publishVideo: true,
            resolution: '1920x1080',
            frameRate: 30,
          });

          screenSharePublisher.once('accessAllowed', () => {
            screenSharePublisher.stream
              .getMediaStream()
              .getVideoTracks()[0]
              .addEventListener('ended', () => {
                console.log('사용자가 "화면 공유 중지" 버튼을 눌렀습니다.');
                toggleScreenSharing(); // 화면 공유 중지 함수 호출
              });

            session.publish(screenSharePublisher);
            setPublisher(screenSharePublisher);
            setScreenShareActive(true);
            setOption({ ...option, screen: true });
          });

          screenSharePublisher.once('accessDenied', () => {
            console.warn('화면 공유 접근이 거부되었습니다.');
          });
        } catch (error) {
          console.error('화면 공유 시작 오류:', error);
        }
      }
    }
  };

  return (
    <S.ScreenWrap>
      <div className="screenBox">
        <div className="screen">
          <div className="screen-other">
            <div className="user"></div>
            <div className="user"></div>
            <div className="share-screen">
              <video ref={shareRef} autoPlay={true}></video>
            </div>
          </div>
          <div className="main-screen">
            <video ref={videoRef} autoPlay={true}></video>
          </div>
        </div>
        <div className="option">
          <Icon name={option.mute ? 'MuteActive' : 'MuteDefault'} onClick={toggleMicrophone} />
          <Icon name={option.camera ? 'CameraActive' : 'CameraDefault'} onClick={toggleCamera} />
          <Icon
            name={option.screen ? 'ShareActive' : 'ShareDefault'}
            onClick={toggleScreenSharing}
          />

          <div className="option-close" onClick={leaveSession}>
            나가기
          </div>
        </div>
      </div>
      {/* <div className="chat">채팅</div> */}
    </S.ScreenWrap>
  );
};

export default ScreenLayout;
