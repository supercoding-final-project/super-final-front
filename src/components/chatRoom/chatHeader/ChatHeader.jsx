import { Icon } from '@/components/common/icon/Icon';
import * as S from './chatHeader.style';

const ChatHeader = (props) => {
  return (
    <S.ChatRoomHeaderWrapper>
      <S.ChatRoomHeaderContainer>
        <S.ChatPartnerWrapper>
          <S.LeftArrowWrapper>
            <Icon name="LeftArrow"></Icon>
          </S.LeftArrowWrapper>
          <S.ChatPartnerName>{props.partnerName}</S.ChatPartnerName>
        </S.ChatPartnerWrapper>
      </S.ChatRoomHeaderContainer>
    </S.ChatRoomHeaderWrapper>
  );
};

export default ChatHeader;
