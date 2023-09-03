import * as S from './chatBox.style';
import chatLog from './chatBoxMock';
import ChattingBar from './ChattingBar';
import MsgCard from './MsgCard';

const ChatBox = () => {
  return (
    <S.ChatBox>
      <S.ChatContainer>
        {chatLog.map((log, index) => (
          <MsgCard key={index} log={log} />
        ))}
      </S.ChatContainer>
      <ChattingBar />
    </S.ChatBox>
  );
};

export default ChatBox;
