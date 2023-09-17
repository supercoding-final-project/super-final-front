import { useEffect, useState } from 'react';

import * as S from './chatBox.style';

const MsgCard = (props) => {
  const log = props.log;
  const [isSend, setIsSend] = useState(0);

  useEffect(() => {
    if (log.senderId === props.myId) setIsSend(1);
    console.log(props.log.senderId, props.myId);
  }, []);

  return (
    <S.MsgCard send={isSend}>
      <S.MsgContainer>
        {!isSend && (
          <S.ProfileImgBox>
            <S.ProfileImg src={props.profileImg} onClick={props.handler}></S.ProfileImg>
          </S.ProfileImgBox>
        )}
        <S.MsgBox>
          {isSend === 1 && <S.SendAt>{log.sendAt}</S.SendAt>}
          <S.TextBox send={isSend}>
            <S.Text>{log.chatContent}</S.Text>
          </S.TextBox>
          {isSend === 0 && <S.SendAt>{log.sendAt}</S.SendAt>}
        </S.MsgBox>
      </S.MsgContainer>
    </S.MsgCard>
  );
};

export default MsgCard;
