import * as S from 'src/pages/my/mentiMyLayout.style';

const LeftNavbarHead = ({ User }) => {
  console.log('네비헤드부분', User.point);
  return (
    <>
      <S.LeftNavbarHeadContainer>
        <S.NavBarHeadName>반갑습니다,{User.name} 님</S.NavBarHeadName>
        <S.NavBarHeadPoint>
          <span style={{ fontSize: '1.3rem', fontWeight: '300' }}>보유 포인트</span>
          <span style={{ fontWeight: '900' }}>{User.point}P</span>
        </S.NavBarHeadPoint>
      </S.LeftNavbarHeadContainer>
    </>
  );
};

export default LeftNavbarHead;
