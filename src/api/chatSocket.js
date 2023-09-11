import { useEffect, useState } from 'react';
import sockjs from 'sockjs-client/dist/sockjs';
import StompJs from 'stompjs';

import { useHttp } from './useHttp';

export function useChatSocket(chatroomId, myId) {
  const [sock, setSock] = useState(null);
  const [stomp, setStomp] = useState(null);
  const [data, setData] = useState([]);
  const [text, setText] = useState('');
  const chatLog = useHttp('/chatlog', { chatRoomId: chatroomId });

  useEffect(() => {
    setData(chatLog);
  }, [chatroomId]);

  // Initialize WebSocket and Stomp
  useEffect(() => {
    const newSock = new sockjs('http://54.180.86.41:8080/code-velop');
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
          stomp.connect({}, () => {
            stomp.subscribe(`/chatroom/${chatroomId}`, (message) => {
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
  }, [sock, stomp, chatroomId]);

  // HTTP request logic
  // const fetchChatLog = async () => {
  //   try {
  //     const res = await axios.get('http://54.180.86.41:8080/api/v1/chatlog', {
  //       params: {
  //         chatRoomId: chatroomId,
  //       },
  //     });
  //     setData(res.data.data.chatLog);
  //   } catch (error) {
  //     console.error('HTTP 요청 중 오류 발생:', error);
  //   }
  // };

  // Send message through WebSocket
  const sendMessage = async (formattedTime) => {
    const newMessage = {
      senderId: myId,
      chatContent: text,
      sendAt: formattedTime,
    };
    stomp.send(`/ws/${chatroomId}`, {}, JSON.stringify(newMessage));
    setText('');
  };

  return {
    data,
    text,
    setText,
    sendMessage,
  };
}
