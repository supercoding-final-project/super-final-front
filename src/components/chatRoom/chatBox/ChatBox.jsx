import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import sockjs from 'sockjs-client/dist/sockjs';
import StompJs from 'stompjs';

import { useFormattedTime } from '@/hooks/useFormattedTime';
import * as S from './chatBox.style';
// import { chatLog } from './chatBoxMock';
import ChattingBar from './ChattingBar';
import MsgCard from './MsgCard';

const ChatBox = (props) => {
  const [text, setText] = useState('');
  const [data, setData] = useState([]);
  const cardEndRef = useRef(null);
  const { formattedTime, updateFormattedTime } = useFormattedTime();
  const [sock, setSock] = useState(null);
  const [stomp, setStomp] = useState(null);

  const myId = 3;

  useEffect(() => {
    const FetchLog = async () => {
      const res = await axios.get('http://54.180.109.208:8080/api/v1/chatlog', {
        params: {
          chatRoomId: props.chatinfo.chatroomId,
        },
      });
      setData(res.data.data.chatLog);
    };
    FetchLog();
  }, [props.chatinfo.chatroomId]);

  useEffect(() => {
    if (!sock) {
      const newSock = new sockjs('http://54.180.109.208:8080/code-velop');
      const newStomp = StompJs.over(newSock);
      setSock(newSock);
      setStomp(newStomp);
    } else {
      stompDisConnect();
      const newSock = new sockjs('http://54.180.109.208:8080/code-velop');
      const newStomp = StompJs.over(newSock);
      setSock(newSock);
      setStomp(newStomp);
    }
  }, [props.chatinfo.chatroomId]);

  useEffect(() => {
    if (sock) {
      const stompConnect = () => {
        try {
          // stomp.debug = null;
          stomp.connect({}, () => {
            stomp.subscribe(`/chatroom/${props.chatinfo.chatroomId}`, (message) => {
              const receiveMsg = JSON.parse(message.body);
              setData((prevData) => [...prevData, receiveMsg]);
            });
          });
        } catch (err) {
          console.error('WebSocket 연결 시도 중 오류 발생:', err);
        }
      };
      stompConnect();
    }
  }, [sock, props.chatinfo.chatroomId]);

  const stompDisConnect = () => {
    try {
      // stomp.debug = null;
      stomp.disconnect(() => {
        stomp.unsubscribe(props.chatinfo.chatroomId);
      });
    } catch (err) {
      console.log(err);
    }
  };

  const chatHandler = (e) => {
    updateFormattedTime();
    setText(e.target.value);
  };

  const sendHandler = async () => {
    const newMessage = {
      senderId: myId,
      chatContent: text,
      sendAt: formattedTime,
    };
    stomp.send(`/ws/${props.chatinfo.chatroomId}`, {}, JSON.stringify(newMessage));
    setText('');
  };

  useEffect(() => {
    cardEndRef.current.scrollIntoView();
  }, [data]);

  return (
    <S.ChatBox>
      <S.ChatContainer>
        {data.map((log, index) => (
          <MsgCard
            handler={props.profileHandler}
            key={index}
            log={log}
            profileImg={props.chatinfo.profileImg}
            myId={myId}
            name={props.chatinfo.partnerName}
          />
        ))}
        <div ref={cardEndRef}></div>
      </S.ChatContainer>
      <ChattingBar chatHandler={chatHandler} sendHandler={sendHandler} text={text} />
    </S.ChatBox>
  );
};

export default ChatBox;
