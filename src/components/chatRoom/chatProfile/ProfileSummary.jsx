import mento from '@/assets/chatMock/mento.png';
import * as S from './profile.style';
import SummaryTab from './SummaryTab';

const ProfileSummary = () => {
  return (
    <S.ProfileSummaryBox>
      <S.SummaryContainer>
        <S.ProfileImg src={mento} />
        <S.ProfileName>하진수</S.ProfileName>
        <S.ProfileGroup>프론트엔드</S.ProfileGroup>
        <S.ProfileSummary>개발이 제일 쉬웠습니다 연락주세요~</S.ProfileSummary>
        <SummaryTab />
      </S.SummaryContainer>
    </S.ProfileSummaryBox>
  );
};

export default ProfileSummary;
