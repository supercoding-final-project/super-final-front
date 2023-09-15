import { useEffect, useRef } from 'react';
import { useChatSocket } from 'src/api/chatSocket';
import { useFormattedTime } from 'src/hooks/useFormattedTime';
import useJwtToken from 'src/hooks/useJwt';

import * as S from './chatBox.style';
import ChattingBar from './ChattingBar';
import MsgCard from './MsgCard';

const ChatBox = (props) => {
  const { jwtToken, decodedToken } = useJwtToken();
  const { formattedTime, updateFormattedTime } = useFormattedTime();
  const cardEndRef = useRef(null);
  const myId = decodedToken.userId;

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
        <ChattingBar chatHandler={chatHandler} sendHandler={sendHandler} text={text} />
      </S.ChatContainer>
    </S.ChatBox>
  );
};

export default ChatBox;
