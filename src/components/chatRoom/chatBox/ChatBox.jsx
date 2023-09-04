import * as S from './chatBox.style';
import chatLog from './chatBoxMock';
import ChattingBar from './ChattingBar';
import MsgCard from './MsgCard';
import ChatHeader from '../chatHeader/ChatHeader';

const ChatBox = (props) => {
  return (
    <S.ChatBox>
      <ChatHeader />
      <S.ChatContainer>
        {chatLog.map((log, index) => (
          <MsgCard handler={props.profileHandler} key={index} log={log} />
        ))}
      </S.ChatContainer>
      <ChattingBar />
    </S.ChatBox>
  );
};

export default ChatBox;
