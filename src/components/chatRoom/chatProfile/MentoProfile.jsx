import * as S from './profile.style';
import ProfileSummary from './ProfileSummary';

const MentoProfile = () => {
  return (
    <S.ProfileWrapper>
      <S.ProfileContainer>
        <ProfileSummary />
        <S.ProfileDetailBox>자세히</S.ProfileDetailBox>
      </S.ProfileContainer>
    </S.ProfileWrapper>
  );
};

export default MentoProfile;
