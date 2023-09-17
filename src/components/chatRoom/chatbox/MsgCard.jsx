import { useEffect, useState } from 'react';
import useJwtToken from 'src/hooks/useJwt';

import * as S from './chatBox.style';

const MsgCard = (props) => {
  const log = props.log;
  const [isSend, setIsSend] = useState(false);
  const { jwtToken, decodedToken } = useJwtToken();
  const [myId, setMyId] = useState('');

  useEffect(() => {
    setMyId(decodedToken.userId);
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
