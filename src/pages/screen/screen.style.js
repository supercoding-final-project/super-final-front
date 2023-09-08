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
    /* height: 596px; */
    display: flex;
    flex-direction: column;
    margin-left: 80px;
    margin-top: 20px;
    /* gap: 20px; */
    .screen {
      width: 100%;
      height: 100%;
      background-color: #000;
      color: #fff;
      height: 596px;
    }
    .option {
      /* background-color: pink; */
      display: flex;
      gap: 8px;
      justify-content: center;
      align-items: center;
      margin-top: 20px;
      .option-item {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        border: 1px solid #000;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      &-close {
        width: 50px !important;
        height: 22px !important;
        padding: 4px 12px;
        background-color: #000;
        color: #fff;
        border-radius: 4px !important;
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
