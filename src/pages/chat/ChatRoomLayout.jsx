import axios from 'axios';
import { useEffect, useState } from 'react';
// import { useHttp } from 'src/api/useHttp';
import ChatBox from 'src/components/chatRoom/chatbox/ChatBox';
import ChatList from 'src/components/chatRoom/chatlist/ChatList';
import NoChatBox from 'src/components/chatRoom/NoChatBox';
import NoChatList from 'src/components/chatRoom/NoChatList';
import useJwtToken from 'src/hooks/useJwt';

import * as S from './chat.style';

const ChatRoomLayout = () => {
  const { jwtToken, decodedToken } = useJwtToken();
  const [selectedChat, setSelectedChat] = useState({});
  const myId = decodedToken.sub;
  const isMento = true;
  const [chatList, setChatList] = useState([]);
  // const chatList = useHttp('/chatrooms', { userId: myId });

  const handleChatSelect = (chat) => {
    setSelectedChat(chat);
  };
  useEffect(() => {
    console.log(decodedToken);
    const fetchChatList = async () => {
      const res = await axios.get('https://codevelop.store/api/v1/chatrooms', {
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
        <NoChatList isMento={isMento} />
      ) : (
        <ChatList list={chatList} handleChatSelect={handleChatSelect} />
      )}
      {/* <ChatBox chatinfo={selectedChat} /> */}
      {Object.keys(selectedChat).length !== 0 ? <ChatBox chatinfo={selectedChat} /> : <NoChatBox />}
    </S.ChatRoomWrapper>
  );
};

export default ChatRoomLayout;
