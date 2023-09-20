import { theme } from 'src/globalLayout/GlobalStyle';
import { styled } from 'styled-components';

export const HeaderWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .nav-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: ${theme.color.bgc1};
    nav {
      width: 1440px;
      height: 44px;
      padding: 0 80px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      div {
        cursor: pointer;
        color: ${theme.color.grey4};
        font-size: 20px;
        letter-spacing: -0.5px;
      }
    }
  }
  .header-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: ${theme.color.bgc2};
    header {
      width: 1440px;
      height: 85px;
      padding: 0 80px;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .header-menu {
        display: flex;
        gap: 20px;
        align-items: center;
        & > .menu {
          cursor: pointer;
          color: ${theme.color.grey1};
          text-align: center;
          font-size: 20px;
          font-weight: 700;
          letter-spacing: -0.5px;
        }
      }
    }
  }
`;

export const Logo = styled.h1`
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
  }
`;

//멘티와 멘토를 바꿀수있는 박스
export const MentoMentoSwapBox = styled.nav`

`
//멘티 멘토 스왑 버튼들
export const MentiSwapButton = styled.div`

  font-weight: ${props => (props.$mento ? "normal" : "bold")};

`
export const MentoSwapButton = styled.div`

  font-weight: ${props => (props.$mento ? "bold" : "normal")};
`

