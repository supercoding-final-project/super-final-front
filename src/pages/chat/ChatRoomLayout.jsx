import axios from 'axios';
import { useEffect, useState } from 'react';

import ChatBox from '@/components/chatRoom/chatbox/ChatBox';
import ChatList from '@/components/chatRoom/chatlist/ChatList';
import NoChatBox from '@/components/chatRoom/NoChatBox';
import NoChatList from '@/components/chatRoom/NoChatList';
import * as S from './chat.style';

const ChatRoomLayout = () => {
  const [selectedChat, setSelectedChat] = useState({});
  const [chatList, setChatList] = useState([]);
  const myId = 4; // 추가: 선택된 채팅 정보를 관리

  const handleChatSelect = (chat) => {
    setSelectedChat(chat);
  };

  useEffect(() => {
    const fetchChatList = async () => {
      const res = await axios.get('http://54.180.109.208:8080/api/v1/chatrooms', {
        params: {
          userId: myId,
        },
      });
      setChatList(res.data.data.chatRoom);
    };
    fetchChatList();
  }, []);

  return (
    <S.ChatRoomWrapper>
      {chatList.length === 0 ? (
        <NoChatList />
      ) : (
        <ChatList list={chatList} handleChatSelect={handleChatSelect} />
      )}
      {/* <ChatBox chatinfo={selectedChat} /> */}
      {Object.keys(selectedChat).length !== 0 ? <ChatBox chatinfo={selectedChat} /> : <NoChatBox />}
    </S.ChatRoomWrapper>
  );
};

export default ChatRoomLayout;
