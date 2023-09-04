import { useState } from 'react';

import ChatBox from '@/components/chatRoom/chatBox/ChatBox';
import MentoProfile from '@/components/chatRoom/chatProfile/MentoProfile';
import Header from '@/components/header/Header';
import * as S from './chat.style';

const ChatRoomLayout = () => {
  const [profileTab, setProfileTab] = useState(false);

  const profileHandler = () => {
    setProfileTab(!profileTab);
  };

  return (
    <>
      <Header />
      <S.ChatRoomWrapper>
        <ChatBox profileHandler={profileHandler} />
        {profileTab && <MentoProfile />}
      </S.ChatRoomWrapper>
    </>
  );
};

export default ChatRoomLayout;
