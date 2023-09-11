import { useEffect, useRef } from 'react';

import { useChatSocket } from '@/api/chatSocket';
import { useFormattedTime } from '@/hooks/useFormattedTime';
import * as S from './chatBox.style';
import ChattingBar from './ChattingBar';
import MsgCard from './MsgCard';

const ChatBox = (props) => {
  const { formattedTime, updateFormattedTime } = useFormattedTime();
  const cardEndRef = useRef(null);
  const myId = 3;

  const { data, text, setText, sendMessage } = useChatSocket(props.chatinfo.chatroomId, myId);

  const chatHandler = (e) => {
    updateFormattedTime();
    setText(e.target.value);
  };

  const sendHandler = () => {
    sendMessage(formattedTime);
  };

  useEffect(() => {
    cardEndRef.current.scrollIntoView();
  }, [data]);

  return (
    <S.ChatBox>
      <S.ChatContainer>
        {data.map((log, index) => (
          <MsgCard
            handler={props.profileHandler}
            key={index}
            log={log}
            profileImg={props.chatinfo.profileImg}
            myId={myId}
            name={props.chatinfo.partnerName}
          />
        ))}
        <div ref={cardEndRef}></div>
      </S.ChatContainer>
      <ChattingBar chatHandler={chatHandler} sendHandler={sendHandler} text={text} />
    </S.ChatBox>
  );
};

export default ChatBox;
