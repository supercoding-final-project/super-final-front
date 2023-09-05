import { Icon } from '@/components/common/icon/Icon';
import * as S from './chatBox.style';

const ChattingBar = (props) => {
  const handleKeyUp = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Enter 키의 기본 동작을 막음 (새 줄 입력 방지)
      props.sendHandler(); // 메시지 전송 핸들러 호출
    }
  };
  return (
    <S.ChattingBarWrapper>
      <S.ChattingBar
        placeholder="Message..."
        onChange={props.chatHandler}
        onKeyUp={handleKeyUp}
        value={props.text}
      />
      <S.SendBtnWrapper>
        <S.SendBtn onClick={props.sendHandler}>
          <Icon name="Send" size={40} />
        </S.SendBtn>
      </S.SendBtnWrapper>
    </S.ChattingBarWrapper>
  );
};

export default ChattingBar;
