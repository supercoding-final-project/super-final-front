import axios from 'axios';
import { useEffect, useState } from 'react';
import sockjs from 'sockjs-client/dist/sockjs';
import useJwtToken from 'src/hooks/useJwt';
import StompJs from 'stompjs';

// import { useHttp } from './useHttp';

export function useChatSocket(chatroomId, myId) {
  const [sock, setSock] = useState(null);
  const [stomp, setStomp] = useState(null);
  const [data, setData] = useState([]);
  const [text, setText] = useState('');
  const { jwtToken, decodedToken } = useJwtToken();
  const [page, setPage] = useState(1);
  const [prevId, setPrevId] = useState(null);

  // Initialize WebSocket and Stomp
  useEffect(() => {
    const newSock = new sockjs('https://codevelop.store/code-velop');
    const newStomp = StompJs.over(newSock);

    setSock(newSock);
    setStomp(newStomp);

    return () => {
      if (stomp) {
        stomp.disconnect();
      }
    };
  }, [chatroomId]);

  // WebSocket connection logic
  useEffect(() => {
    if (sock && stomp) {
      const stompConnect = () => {
        try {
          stomp.connect(
            {
              heartbeat: {
                outgoing: 1000,
                incoming: 1000,
              },
            },
            () => {
              stomp.subscribe(`/chatroom/${chatroomId}`, (message) => {
                const receiveMsg = JSON.parse(message.body);
                setData((prevData) => [...prevData, receiveMsg]);
              });
            },
          );
        } catch (err) {
          console.error('WebSocket 연결 시도 중 오류 발생:', err);
        }
      };
      stompConnect();
    }
  }, [sock, stomp, chatroomId]);

  // HTTP request logic
  useEffect(() => {
    const fetchPage = async () => {
      try {
        const res = await axios.get('https://codevelop.store/api/v1/message', {
          params: {
            ChatRoomId: chatroomId,
            page: page,
          },
          headers: {
            Authorization: jwtToken,
          },
        });

        if (chatroomIdChanged) {
          setData(res.data.data);
          setPage(0);
        } else {
          setData((prevData) => [...res.data.data, ...prevData]);
        }

        console.log(res.data.data);
      } catch (error) {
        console.error('HTTP 요청 중 오류 발생:', error);
      }
    };

    // chatroomId가 변경되었는지 확인하는 변수
    const chatroomIdChanged = chatroomId !== prevChatroomId;
    const prevChatroomId = chatroomId;

    fetchPage();
  }, [chatroomId, page]);

  // Send message through WebSocket
  const sendMessage = async (formattedTime) => {
    const newMessage = {
      senderId: myId,
      chatContent: text,
      sendAt: formattedTime,
      chatRoomId: chatroomId,
    };
    stomp.send(`/ws/${chatroomId}`, {}, JSON.stringify(newMessage));
    setText('');
  };

  return {
    data,
    text,
    setText,
    sendMessage,
    setPage,
  };
}
