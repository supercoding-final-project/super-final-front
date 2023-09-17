import React, { useEffect, useRef, useState } from 'react';
import { useChatSocket } from 'src/api/chatSocket';
import { useFormattedTime } from 'src/hooks/useFormattedTime';
import useJwtToken from 'src/hooks/useJwt';

import * as S from './chatBox.style';
import ChattingBar from './ChattingBar';
import MsgCard from './MsgCard';

const ChatBox = (props) => {
  const { formattedTime, updateFormattedTime } = useFormattedTime();
  const cardEndRef = useRef(null);
  const [previousDate, setPreviousDate] = useState(null);
  const { jwtToken, decodedToken } = useJwtToken();
  const myId = decodedToken?.userId || '';

  const { data, text, setText, sendMessage } = useChatSocket(props.chatinfo.chatroomId, myId);

  const chatHandler = (e) => {
    updateFormattedTime();
    setText(e.target.value);
  };

  const sendHandler = () => {
    sendMessage(formattedTime);
  };

  useEffect(() => {
    cardEndRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [data]);

  return (
    <S.ChatBox>
      <S.ChatContainer>
        {data.map((log, index) => (
          <React.Fragment key={index}>
            {log.dbSendAt !== previousDate && <div className="date-line">{log.dbSendAt}</div>}
            <MsgCard
              handler={props.profileHandler}
              log={log}
              profileImg={props.chatinfo.profileImg}
              myId={myId}
              name={props.chatinfo.partnerName}
            />
            {setPreviousDate((prevDate) => (log.dbSendAt !== prevDate ? log.dbSendAt : prevDate))}
          </React.Fragment>
        ))}
        <div ref={cardEndRef}></div>
        <ChattingBar chatHandler={chatHandler} sendHandler={sendHandler} text={text} />
        <button></button>
      </S.ChatContainer>
    </S.ChatBox>
  );
};

export default ChatBox;
