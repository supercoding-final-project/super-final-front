import * as S from 'src/pages/my/mentiMyLayout.style';

const LeftNavbarHead = ({ User }) => {
  return (
    <>
      <S.LeftNavbarHeadContainer>
        <S.NavBarHeadName>반갑습니다,{User.nickname} 님</S.NavBarHeadName>
        <S.NavBarHeadPoint>

        </S.NavBarHeadPoint>
      </S.LeftNavbarHeadContainer>
    </>
  );
};

export default LeftNavbarHead;
