import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import sockjs from 'sockjs-client/dist/sockjs';
import { useFormattedTime } from 'src/hooks/useFormattedTime';
import useJwtToken from 'src/hooks/useJwt';
import StompJs from 'stompjs';

import * as S from './chatBox.style';
import ChattingBar from './ChattingBar';
import MsgCard from './MsgCard';

const ChatBox = (props) => {
  const [sock, setSock] = useState(null);
  const [stomp, setStomp] = useState(null);
  const [data, setData] = useState([]);
  const [text, setText] = useState('');
  const [page, setPage] = useState(0);
  const [prevId, setPrevId] = useState(null);

  const { formattedTime, updateFormattedTime, formatDate } = useFormattedTime();
  const cardEndRef = useRef(null);
  const previousDateRef = useRef('');
  const { jwtToken, decodedToken } = useJwtToken();
  const myId = decodedToken?.userId || '';
  const formattedDate = formatDate(data.dbSendAt);

  useEffect(() => {
    if (!sock) {
      const newSock = new sockjs('https://codevelop.store/code-velop');
      const newStomp = StompJs.over(newSock);
      setSock(newSock);
      setStomp(newStomp);
    } else {
      stompDisConnect();
      const newSock = new sockjs('https://codevelop.store/code-velop');
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
      if (stomp) {
        stomp.disconnect(() => {
          console.log(`Disconnected from chatroom ${props.chatinfo.chatroomId}`);
        });
      }
    } catch (err) {
      console.error('Error disconnecting from WebSocket:', err);
    }
  };

  useEffect(() => {
    const fetchPage = async () => {
      try {
        const res = await axios.get('https://codevelop.store/api/v1/message', {
          params: {
            ChatRoomId: props.chatinfo.chatroomId,
            page: page,
          },
          headers: {
            Authorization: jwtToken,
          },
        });
        if (prevId === props.chatinfo.chatroomId) {
          setData((prevData) => [...res.data.data, ...prevData]);
        } else {
          setPage(0);
          setData(res.data.data);
        }
        setPrevId(props.chatinfo.chatroomId);
      } catch (error) {
        console.error('HTTP 요청 중 오류 발생:', error);
      }
    };
    fetchPage();
  }, [page, props.chatinfo.chatroomId]);

  const chatHandler = (e) => {
    updateFormattedTime();
    setText(e.target.value);
  };

  const sendMessage = async () => {
    const cleanedText = text.replace(/\n/g, '');
    if (text.trim() !== '') {
      const newMessage = {
        senderId: myId,
        chatContent: cleanedText,
        sendAt: formattedTime,
        chatRoomId: props.chatinfo.chatroomId,
      };
      console.log(props.chatinfo.chatroomId);
      stomp.send(`/ws/${props.chatinfo.chatroomId}`, {}, JSON.stringify(newMessage));
      setText('');
      props.setLastChat(cleanedText);
    }
  };

  const pageHandler = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    cardEndRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [data]);

  return (
    <S.ChatBox>
      <S.ChatContainer>
        {data.map((log, index) => {
          if (log.dbSendAt !== previousDateRef.current) {
            previousDateRef.current = log.dbSendAt;
            return <S.DateLine key={index}>{formattedDate}</S.DateLine>;
          }
          return (
            <MsgCard
              key={index}
              handler={props.profileHandler}
              log={log}
              profileImg={props.chatinfo.profileImg}
              myId={myId}
              name={props.chatinfo.partnerName}
            />
          );
        })}
        <div ref={cardEndRef}></div>
        <ChattingBar
          chatHandler={chatHandler}
          sendHandler={sendMessage}
          text={text}
          setLastChat={props.setLastChat}
        />
      </S.ChatContainer>
    </S.ChatBox>
  );
};

export default ChatBox;
