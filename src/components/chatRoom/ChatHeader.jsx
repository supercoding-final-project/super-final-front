import { Link } from 'react-router-dom';

import { Icon } from '@/components/common/icon/Icon';
import * as S from './chatHeader.style';

const ChatHeader = () => {
  return (
    <S.ChatRoomHeaderWrapper>
      <S.ChatRoomHeaderContainer>
        <S.ChatPartnerWrapper>
          <S.LeftArrowWrapper>
            <Icon name="LeftArrow"></Icon>
          </S.LeftArrowWrapper>
          <S.ChatPartnerName>{`partnerName`}</S.ChatPartnerName>
        </S.ChatPartnerWrapper>
        <S.VideoChatBtnWrapper>
          <S.VideoChatBtn>
            <Icon name="Call" size={25} style={{ marginRight: '1rem' }} />
            화상 채팅 연결하기
          </S.VideoChatBtn>
        </S.VideoChatBtnWrapper>
      </S.ChatRoomHeaderContainer>
    </S.ChatRoomHeaderWrapper>
  );
};

export default ChatHeader;
