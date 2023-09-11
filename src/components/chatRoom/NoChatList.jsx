import * as S from './chatbox/chatBox.style';

const NoChat = () => {
  return (
    <S.NoChatListWrap>
      <div>
        <S.NoChatListBox>채팅목록이 없습니다.</S.NoChatListBox>
        <S.NoChatListBox>멘토님을 찾아 채팅을 시작해보세요!</S.NoChatListBox>
      </div>
    </S.NoChatListWrap>
  );
};

export default NoChat;
