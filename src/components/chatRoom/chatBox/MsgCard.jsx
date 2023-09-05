import { useEffect, useState } from 'react';

import * as S from './chatBox.style';

const MsgCard = (props) => {
  const log = props.log;
  const myId = 'sdwrde12';
  const [isSend, setIsSend] = useState(false);

  useEffect(() => {
    if (log.senderId === myId) setIsSend(true);
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
          {isSend && <S.SendAt>{props.sendAt}</S.SendAt>}
          <S.TextBox>
            <S.Text>{log.text}</S.Text>
          </S.TextBox>
          {!isSend && <S.SendAt>{props.sendAt}</S.SendAt>}
        </S.MsgBox>
      </S.MsgContainer>
    </S.MsgCard>
  );
};

export default MsgCard;
