import React, { useEffect, useRef, useState } from 'react';
import { useChatSocket } from 'src/api/chatSocket';
import { useFormattedTime } from 'src/hooks/useFormattedTime';

import * as S from './chatBox.style';
import ChattingBar from './ChattingBar';
import MsgCard from './MsgCard';

const ChatBox = (props) => {
  const { formattedTime, updateFormattedTime } = useFormattedTime();
  const cardEndRef = useRef(null);
  const previousDateRef = useRef('');

  const { data, text, setText, sendMessage, setPage } = useChatSocket(
    props.chatinfo.chatroomId,
    myId,
  );

  const chatHandler = (e) => {
    updateFormattedTime();
    setText(e.target.value);
  };

  const sendHandler = () => {
    sendMessage(formattedTime);
  };

  const pageHandler = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    cardEndRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [data]);

  return (
    <S.ChatBox>
      <S.ChatContainer>
        {data.map((log, index) => (
          <React.Fragment key={index}>
            {log.dbSendAt !== previousDateRef.current && (
              <div className="date-line">{log.dbSendAt}</div>
            )}
            <MsgCard
              handler={props.profileHandler}
              log={log}
              profileImg={props.chatinfo.profileImg}
              name={props.chatinfo.partnerName}
            />
            {log.dbSendAt !== previousDateRef.current && (previousDateRef.current = log.dbSendAt)}
          </React.Fragment>
        ))}
        <div ref={cardEndRef}></div>
        <ChattingBar chatHandler={chatHandler} sendHandler={sendHandler} text={text} />
        <button onClick={pageHandler}>다음 페이지!</button>
      </S.ChatContainer>
    </S.ChatBox>
  );
};

export default ChatBox;
