import { theme } from 'src/globalLayout/GlobalStyle';
import { styled } from 'styled-components';

export const MainCardItem = styled.li`
  width: 280px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
  padding: 24px;
  box-sizing: border-box;
  border-radius: 20px;
  background-color: ${theme.color.bgc2};

  box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.2);
  cursor: default;
  h4 {
    color: ${theme.color.grey1};
    font-family: Pretendard;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%;
    letter-spacing: -0.5px;
  }
  .under_contents {
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .nickname {
      text-decoration: underline;
      color: rgba(0, 0, 0, 0.3);
      cursor: pointer;
    }
  }
  hr {
    width: 100%;
    height: 0.5px;
    border: 0px;
    margin: 0;
    background-color: ${theme.color.grey4};
  }
`;

export const StackBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  .stack {
    display: flex;
    justify-content: flex-start;
    gap: 20px;
    color: ${theme.color.grey1};
    font-size: 16px;
    font-weight: 200;
    line-height: 140%;
    letter-spacing: -0.5px;
    &.bold {
      font-weight: 700;
    }
  }
`;
export const NickNameBox = styled.div`
  .stack {
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    gap: 20px;
    color: ${theme.color.grey1};
    font-size: 16px;
    font-weight: 200;
    line-height: 140%;
    letter-spacing: -0.5px;
    & .desc {
      border-radius: 999px;
      background: ${theme.color.grey5};
      display: flex;
      padding: 4px 12px;
      align-items: center;
      &.bold {
        font-weight: 700;
      }
    }
  }
`;
export const MainCardButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  button {
    display: flex;
    padding: 8px 20px;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: 600;
    line-height: 140%;
    letter-spacing: -0.5px;
  }
`;
