import { useEffect, useRef, useState } from 'react';

import { useFormattedTime } from '@/hooks/useFormattedTime';
import * as S from './chatBox.style';
import { chatLog } from './chatBoxMock';
import ChattingBar from './ChattingBar';
import MsgCard from './MsgCard';
import ChatHeader from '../chatHeader/ChatHeader';

const ChatBox = (props) => {
  const [text, setText] = useState('');
  const [data, setData] = useState(chatLog.chatLog);
  const cardEndRef = useRef(null);
  const formattedTime = useFormattedTime();

  const chatHandler = (e) => {
    setText(e.target.value);
  };

  const sendHandler = () => {
    setData([
      ...data,
      {
        senderId: 'sdwrde12',
        sendAt: formattedTime,
        text: text,
      },
    ]);
  };

  useEffect(() => {
    cardEndRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [data]);

  return (
    <S.ChatBox>
      <ChatHeader partnerName={chatLog.partnerName} />
      <S.ChatContainer>
        {data.map((log, index) => (
          <MsgCard
            handler={props.profileHandler}
            key={index}
            log={log}
            profileImg={chatLog.profileImg}
            sendAt={formattedTime}
          />
        ))}
        <div ref={cardEndRef}></div>
      </S.ChatContainer>
      <ChattingBar chatHandler={chatHandler} sendHandler={sendHandler} text={text} />
    </S.ChatBox>
  );
};

export default ChatBox;
