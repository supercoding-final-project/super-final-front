import { useEffect, useState } from 'react';

import * as S from './chatBox.style';

const MsgCard = (props) => {
  const log = props.log;
  const [isSend, setIsSend] = useState(false);

  useEffect(() => {
    if (log.senderId === props.myId) setIsSend(true);
    console.log(props.log.senderId, props.myId);
  }, [log.senderId]);

  return (
    <S.MsgCard send={isSend}>
      <S.MsgContainer>
        {!isSend && (
          <S.ProfileImgBox>
            <S.ProfileImg src={props.profileImg} onClick={props.handler}></S.ProfileImg>
          </S.ProfileImgBox>
        )}
        <S.MsgBox>
          {isSend && <S.SendAt>{log.sendAt}</S.SendAt>}
          <S.TextBox send={isSend}>
            <S.Text>{log.chatContent}</S.Text>
          </S.TextBox>
          {!isSend && <S.SendAt>{log.sendAt}</S.SendAt>}
        </S.MsgBox>
      </S.MsgContainer>
    </S.MsgCard>
  );
};

export default MsgCard;
