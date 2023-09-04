import styled from 'styled-components';

export const ScreenWrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  .layout {
    width: 80%;
    height: 100%;
    .screen {
      width: 100%;
      height: 100%;
      padding: 50px 100px;
      box-sizing: border-box;
      &_video {
        display: flex;
        justify-content: space-between;
        .face-screen {
          width: 650px;
          height: 650px;
          background-color: #eee;
          position: relative;
          color: #fff;
          border-radius: 12px;
          overflow: hidden;
          .name {
            position: absolute;
            bottom: 0;
            left: 0;
            background-color: rgba(0, 0, 0, 0.3);
            padding: 8px 15px;
            font-size: 18px;
            border-radius: 0px 8px 0px;
          }
          .mike {
            position: absolute;
            bottom: 0;
            right: 0;
            background-color: rgba(0, 0, 0, 0.1);
            padding: 8px 15px;
            font-size: 18px;
            border-radius: 8px 0px;
          }
        }
      }
      &-option {
        margin-top: 80px;
        width: 100%;
        position: relative;
        display: flex;
        justify-content: space-between;
        .option-box {
          display: flex;
          gap: 25px;
          .option {
            padding: 15px 30px;
            color: #fff;
            font-size: 18px;
            font-weight: 600;
            background-color: var(--main-color);
            border-radius: 8px;
            cursor: pointer;
          }
        }
        &_second {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
        }
      }
    }
  }
  .chat {
    width: 20%;
    height: 100%;
    border-left: 1px solid;
    padding: 20px 20px;
    box-sizing: border-box;
    /* background-color: yellowgreen; */
    &-header {
      width: 100%;
      display: flex;
      justify-content: center;
      position: relative;
      padding-bottom: 30px;
      border-bottom: 1px solid #ddd;
      h2 {
        font-size: 25px;
      }
      .close {
        font-size: 25px;
        position: absolute;
        top: 0;
        right: 0;
      }
    }
    ul {
      margin-top: 20px;
      .another {
      }
      .me {
        background-color: #3694ff;
        padding: 5px 10px;
      }
    }
  }
`;
