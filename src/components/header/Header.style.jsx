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
    background-color: #fcfcfb;
    nav {
      width: 1440px;
      height: 44px;
      padding: 0 80px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      div {
        color: #807e7d;
        font-size: 20px;
        font-weight: 200;
        letter-spacing: -0.5px;
        &.bold {
          color: #0f0f0e;
          font-weight: 700;
        }
      }
    }
  }
  .header-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: #faf9f7;
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
          color: #0f0f0e;
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
