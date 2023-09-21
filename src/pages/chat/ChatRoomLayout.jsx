import axios from 'axios';
import { useEffect, useState } from 'react';
import ChatBox from 'src/components/chatRoom/chatbox/ChatBox';
import ChatList from 'src/components/chatRoom/chatlist/ChatList';
import NoChatBox from 'src/components/chatRoom/NoChatBox';
import NoChatList from 'src/components/chatRoom/NoChatList';
import useJwtToken from 'src/hooks/useJwt';

import * as S from './chat.style';

const ChatRoomLayout = () => {
  const { jwtToken, decodedToken } = useJwtToken();
  const [selectedChat, setSelectedChat] = useState({});
  const isMento = true;
  const [chatList, setChatList] = useState([]);
  const [lastChat, setLastChat] = useState(chatList.lastChat);

  const handleChatSelect = (chat) => {
    setSelectedChat(chat);
  };

  useEffect(() => {
    const fetchChatList = async () => {
      const res = await axios.get('https://codevelop.store/api/v1/chatrooms', {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjYsImF1dGhvcml0aWVzIjpbIk1FTlRFRSJdLCJpYXQiOjE2OTUzMTk1NDcsImV4cCI6MTY5NTMyMzE0N30.c9zjZW1c7pC_Ua_5kdpaj3toShOorrYczywtL-jY6x0',
        },
      });
      setChatList(res.data.data.chatRoom);
    };
    fetchChatList();
  }, [jwtToken]);

  return (
    <S.ChatRoomWrapper>
      {chatList.length === 0 ? (
        <NoChatList isMento={isMento} />
      ) : (
        <ChatList list={chatList} handleChatSelect={handleChatSelect} lastChat={lastChat} />
      )}
      {Object.keys(selectedChat).length !== 0 ? (
        <ChatBox chatinfo={selectedChat} setLastChat={setLastChat} />
      ) : (
        <NoChatBox />
      )}
    </S.ChatRoomWrapper>
  );
};

export default ChatRoomLayout;
