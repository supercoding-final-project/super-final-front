import { theme } from 'src/globalLayout/GlobalStyle';
import styled from 'styled-components';

export const ScreenWrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  max-width: 1440px;
  margin: 0 auto;

  .screenBox {
    max-width: 955px;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-left: 80px;
    margin-top: 20px;
    .screen {
      width: 100%;
      color: #fff;
      &-other {
        display: flex;
        width: 100%;
        height: 156px;
        justify-content: space-between;
        margin-bottom: 20px;
        .user {
          width: 250px;
          height: 100%;
          background-color: #f2f1eb;
        }
        .share-screen {
          max-width: 415px;
          width: 100%;
          height: 100%;
          background-color: #f2f1eb;
        }
      }
      .main-screen {
        width: 100%;
        height: 535px;
        video {
          width: 100%;
          height: 100%;
          object-fit: fill;
        }
      }
    }
    .option {
      display: flex;
      gap: 8px;
      justify-content: center;
      align-items: center;
      margin-top: 20px;

      &-close {
        width: 50px !important;
        height: 22px !important;
        padding: 4px 12px;
        background-color: ${theme.color.point};
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 4px !important;
      }
      svg {
        cursor: pointer;
      }
    }
  }
  .chat {
    max-width: 385px;
    width: 100%;
    margin-left: 20px;
    margin-top: 20px;
    background-color: skyblue;
  }
`;
