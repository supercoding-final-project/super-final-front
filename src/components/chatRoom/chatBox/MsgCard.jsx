import * as S from './chatBox.style';

const MsgCard = (props) => {
  const log = props.log;
  return (
    <S.MsgCard isSend={log.isSend}>
      <S.MsgContainer>
        {!log.isSend && (
          <S.ProfileImgBox>
            <S.ProfileImg src={log.profileImg} onClick={props.handler}></S.ProfileImg>
          </S.ProfileImgBox>
        )}

        <S.MsgBox>
          {log.isSend && <S.SendAt>{log.sendAt}</S.SendAt>}
          <S.TextBox>
            <S.Text>{log.text}</S.Text>
          </S.TextBox>
          {!log.isSend && <S.SendAt>{log.sendAt}</S.SendAt>}
        </S.MsgBox>
      </S.MsgContainer>
    </S.MsgCard>
  );
};

export default MsgCard;
