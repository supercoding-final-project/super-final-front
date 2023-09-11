import { Icon } from '@/components/common/icon/Icon';
import * as S from './chatBox.style';

const ChattingBar = (props) => {
  const handleKeyUp = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      props.sendHandler();
    }
  };

  return (
    <S.ChattingBarWrapper>
      <S.ChattingBar
        placeholder="메시지를 입력해주세요."
        onChange={props.chatHandler}
        onKeyUp={handleKeyUp}
        value={props.text}
      />
      <S.VideoChatBtn>
        <Icon name="VideoChat" size={40}></Icon>
      </S.VideoChatBtn>
      <S.SendBtn onClick={props.sendHandler}>전송</S.SendBtn>
    </S.ChattingBarWrapper>
  );
};

export default ChattingBar;
