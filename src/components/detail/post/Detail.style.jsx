import { theme } from 'src/globalLayout/GlobalStyle';
import { styled } from 'styled-components';

export const MentoProfileBox = styled.div`
  box-shadow: 0px 1px 0px rgba(128, 126, 125, 0.4);
  padding-bottom: 2.5rem;

  span {
    color: ${theme.color.grey5};
  }
`;

export const ImgAndName = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1.5rem;

  img {
    width: 3rem;
    height: 3rem;
    border-radius: 25rem;
    margin-right: 1rem;
    background-color: grey;
  }
`;

export const JobAndIntro = styled.div`
  margin-top: 1rem;
  margin-bottom: 1.5rem;
`;

export const Summary = styled.div`
  margin-top: 0.5rem;
  display: flex;
`;

export const Career = styled.div`
  span {
    margin-right: 1rem;
  }

  li {
    margin-bottom: 0.5rem;
    color: ${theme.color.grey5};
  }
`;

export const CareerList = styled.div`
  margin-left: 1rem;
  li {
    margin-bottom: 0.25rem;
    margin-right: 1rem;
  }
  ul {
    display: flex;
  }
`;

export const SmallFont = styled.span`
  font-size: 0.75rem;
`;

export const PostModal = styled.div`
  position: fixed;
  right: 12%;
  top: 15%;
  border-radius: 0.75rem;
`;

export const PostModalWrap = styled.div`
  margin: 2rem;
  border: 1px solid ${theme.color.point};
  border-radius: 0.75rem;
`;

export const PostModalContainer = styled.div`
  padding: 0.75rem;

  div {
    margin: 0.5rem;
    display: flex;
    justify-content: center;
  }
`;

export const ModalBtn = styled.div`
  margin: 2rem;

  button {
    margin-left: 0.4rem;
    font-size: 1.5rem;
    background-color: ${theme.color.point};
    border: none;
    color: white;
    border-radius: 0.25rem;
    padding: 1rem;
    cursor: pointer;
    margin-top: 1rem;
  }
`;

export const PostApplicationModal = styled.div`
  .tab-box {
    color: #807e7d;
    font-size: 12px;
    display: flex;
    gap: 20px;
    padding-bottom: 4px;
    cursor: pointer;
    margin-bottom: 40px;
    .active {
      color: #fff;
      border-bottom: 1px solid #fff;
      padding-bottom: 4px;
    }
  }
  .title {
    width: 100%;
    height: 52px;
    padding: 12px 24px;
    box-sizing: border-box;
    border-radius: 4px;
    border: 0.5px solid #807e7d;
    display: flex;
    align-items: end;
    font-size: 20px;
    margin-bottom: 8px;
    span {
      color: #807e7d;
      font-size: 12px;
      margin-left: 5px;
    }
  }
  .chose-date-box {
    width: 100%;
    height: 324px;
    padding: 12px 18px;
    box-sizing: border-box;
    border-radius: 4px;
    border: 0.5px solid #807e7d;
    .option-box {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 16px;
      &-left {
        display: flex;
        align-items: center;
        gap: 12px;
        p {
          font-size: 18px;
          font-weight: 700;
        }
      }
      &-right {
        margin-right: 20px;
      }
      .clicked {
        margin-left: 20px;
        font-size: 20px;
        font-weight: 700;
      }
      svg {
        cursor: pointer;
      }
    }
    .date-container {
      display: flex;
      justify-content: space-between;
      .calendar {
        width: 216px;
        height: 228px;
        .week {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 8px;
          margin-bottom: 16px;
          li {
            width: 24px;
            height: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
        .day {
          display: flex;
          flex-direction: column;
          .row {
            display: flex;
            gap: 8px;
            justify-content: space-between;
            flex-wrap: wrap;
            margin-bottom: 16px;
            &:nth-last-child(1) {
              margin: 0;
            }
            li {
              width: 24px;
              height: 24px;
              display: flex;
              align-items: center;
              justify-content: center;
              cursor: pointer;
              font-size: 12px;
              font-weight: 700;
              border-radius: 4px;
              border: 0.5px solid #807e7d;
              box-sizing: border-box;
            }
            .prev {
              background-color: #333231;
              color: #4d4b4a;
              cursor: default;
            }
            .today {
              background-color: ${theme.color.point};
              border: 0.5px solid ${theme.color.point};
            }
            .not-include {
              color: #807e7d;
              cursor: pointer;
            }
            .checked {
              background-color: #edfcf3;
              color: #0f0f0e;
              border: 1px solid #29cc61;
            }
          }
        }
        p {
          margin-top: 10px;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          font-weight: 700;
        }
      }
      .line {
        width: 1px;
        height: 256px;
        background-color: #fff;
      }
      .time {
        width: 312px;
        height: 256px;
        &-tab {
          display: flex;
          gap: 20px;
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 20px;
          cursor: pointer;
        }
        .active {
          color: #fff;
          border-bottom: 2px solid #fff;
          padding-bottom: 4px;
        }
        ul {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          li {
            width: 56px;
            height: 28px;
            padding: 6px 19px;
            border-radius: 4px;
            border: 1px solid #807e7d;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            font-size: 20px;
            font-weight: 600;
          }
          .chose {
            border: 1px solid #29cc61;
            background-color: #edfcf3;
            color: #0f0f0f;
          }
          .have {
            color: #cccbca;
          }
          .close {
            background-color: #333231;
            color: #4d4b4a;
            cursor: default;
          }
        }
      }
    }
  }
  .btn-box {
    margin-top: 40px;
    display: flex;
    justify-content: end;
    gap: 10px;
  }
  .info-title {
    color: #fcfcfb;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 12px;
  }
  .info-container {
    display: flex;
    flex-direction: column;
    padding-bottom: 40px;
    border-bottom: 1px solid #807e7d;
    li {
      display: flex;
      /* align-items: center; */
      gap: 27px;
      margin-bottom: 12px;
      font-weight: 700;
      font-size: 20px;
      .label {
        width: 100px;
      }
      .info {
        font-weight: 200;
      }
      .schedule-container {
        display: flex;
        flex-direction: column;
        gap: 8px;
        .row {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 20px;
          font-weight: 200;
          .date {
            /* width: 160px; 원래*/
            padding: 4px 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 999px;
            background-color: #fcfcfb;
            color: #0f0f0e;
            font-size: 16px;
            font-weight: 200;
          }
          .total-time {
            width: 80px;
            padding: 4px 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 999px;
            background-color: #29cc61;
            color: #fcfcfb;
            font-weight: 700;
          }
          .selected-time {
            background-color: #fcfcfb;
            width: 17px;
            height: 17px;
            padding: 3px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            font-size: 16px;
            color: #0f0f0f;
            /* box-sizing: content-box; */
          }
        }
      }
    }
  }
  .price-container {
    margin-top: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 10px;
    height: 28px;
  }
`;
