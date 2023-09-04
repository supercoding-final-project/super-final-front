import { Icon } from '@/components/common/icon/Icon';
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
    </S.ChattingBarWrapper>
  );
};

export default ChattingBar;
