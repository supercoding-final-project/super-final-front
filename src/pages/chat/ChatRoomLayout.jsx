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
          Authorization: jwtToken,
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
      <div>화상채팅화면~~~dddddddddddddㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ</div>
      {Object.keys(selectedChat).length !== 0 ? (
        <ChatBox chatinfo={selectedChat} setLastChat={setLastChat} />
      ) : (
        <NoChatBox />
      )}
    </S.ChatRoomWrapper>
  );
};

export default ChatRoomLayout;
