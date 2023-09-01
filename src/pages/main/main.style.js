import styled from 'styled-components';

export const MentoMainWrap = styled.div`
  width: 100%;
  /* height: 3000px; */

  .banner {
    width: 100%;
    height: 390px;
    background-color: var(--main-color);
    position: relative;
    .text-box {
      color: #fff;
      font-size: 36px;
      font-weight: 700;
      position: absolute;
      left: 130px;
      top: 100px;
      p:nth-last-child(2) {
        margin-top: 8px;
      }
    }
  }

  .guide {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 60px 36px;
    .title {
      font-size: 38px;
      font-weight: 700;
      margin: 40px 0 100px;
      color: var(--font-color);
    }
    article {
      margin-bottom: 250px;
      .step-box {
        display: flex;
        align-items: center;
        gap: 250px;

        &_text {
          width: 58%;
          .step {
            font-size: 40px;
            font-weight: 700;
            color: var(--main-color);
          }
          .sub-title {
            font-size: 28px;
            font-weight: 600;
            margin: 15px 0 30px;
            color: var(--font-color);
          }
          span {
            font-size: 16px;
            color: var(--font-color-gray);
          }
        }
        &_img {
          .img-card {
            width: 400px;
            height: 400px;
            box-shadow:
              rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
              rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
            border-radius: 12px;
          }
        }
      }
    }
  }

  .statistics {
    /* margin-top: 100px; */
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f9f9f9;
    padding: 70px 0;
    p {
      font-size: 30px;
      color: var(--font-color);
      margin-bottom: 50px;
    }
    ul {
      margin-top: 80px;
      display: flex;
      gap: 100px;
      li {
        display: flex;
        flex-direction: column;
        align-items: center;
        .total {
          font-size: 50px;
          color: var(--main-color);
          margin-bottom: 20px;
        }
        .title {
          font-size: 20px;
          font-weight: 600;
        }
      }
    }
  }
`;
