import ChatBox from 'src/components/chatRoom/chatBox/ChatBox';
import ChatHeader from 'src/components/chatRoom/chatHeader';
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
