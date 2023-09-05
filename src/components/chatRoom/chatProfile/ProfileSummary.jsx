import * as S from './profile.style';
import SummaryTab from './SummaryTab';
import { partnerProfile } from '../chatBox/chatBoxMock';

const ProfileSummary = () => {
  return (
    <S.ProfileSummaryBox>
      <S.SummaryContainer>
        <S.ProfileImg src={partnerProfile.img} />
        <S.ProfileName>{partnerProfile.name}</S.ProfileName>
        <S.ProfileGroup>{partnerProfile.job}</S.ProfileGroup>
        <S.ProfileSummary>{partnerProfile.summary}</S.ProfileSummary>
        <SummaryTab tab={partnerProfile.summaryTab} />
      </S.SummaryContainer>
    </S.ProfileSummaryBox>
  );
};

export default ProfileSummary;
