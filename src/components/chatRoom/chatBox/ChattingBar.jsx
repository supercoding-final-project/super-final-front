import { Icon } from 'src/components/common/icon/Icon';
import * as S from './chatBox.style';

const ChattingBar = () => {
  return (
    <S.ChattingBarWrapper>
      <S.ChattingBar placeholder="Message..."></S.ChattingBar>
      <S.SendBtnWrapper>
        <S.SendBtn type="submit">
          <Icon name="Send" size={40} />
        </S.SendBtn>
      </S.SendBtnWrapper>
      <S.SendBtnWrapper>
        <S.SendBtn>
          <Icon name="MarkDown" size={40} color="white" />
        </S.SendBtn>
      </S.SendBtnWrapper>
    </S.ChattingBarWrapper>
  );
};

export default ChattingBar;
