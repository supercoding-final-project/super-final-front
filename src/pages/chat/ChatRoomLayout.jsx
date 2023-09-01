import ChatBox from '@/components/chatRoom/chatBox/ChatBox';
import ChatHeader from '@/components/chatRoom/chatHeader';
import * as S from './chat.style';

const ChatRoomLayout = () => {
  return (
    <S.ChatRoomWrapper>
      <ChatHeader />
      <ChatBox />
    </S.ChatRoomWrapper>
  );
};

export default ChatRoomLayout;
