// import { theme } from 'src/globalLayout/GlobalStyle';
import { theme } from 'src/globalLayout/GlobalStyle';
import { styled } from 'styled-components';

export const ListWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
`;
export const ListSearchContainer = styled.div`
  width: 1280px;
  margin: 80px auto 0;
  display: flex;
  flex-direction: column;
`;
export const ListSearchList = styled.ul`
  display: flex;
  align-items: flex-start;
  gap: 20px;
`;
export const ListSearchItem = styled.li`
  color: ${theme.color.grey5};
  font-size: 20px;
  font-weight: 200;
  line-height: 140%;
  letter-spacing: -0.5px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  &.active {
    color: ${theme.color.grey1};
    font-size: 20px;
    font-weight: 700;
    letter-spacing: -0.5px;
    &::after {
      content: '';
      width: 100%;
      height: 2px;
      background-color: ${theme.color.grey1};
    }
  }
`;
export const ListSearchBox = styled.div`
  display: flex;
  width: 100%;
  margin: 12px auto 20px;
  form {
    display: flex;
    align-items: center;
    width: 100%;
    position: relative;
    svg {
      position: absolute;
      left: 40px;
      width: 30px;
      height: 45px;
      flex-shrink: 0;
      background-color: ${theme.color.bgc2};
      path {
        stroke: ${theme.color.point};
      }
    }
    label {
      display: flex;
      width: 100%;
      input {
        padding: 12px 40px 12px 80px;
        box-sizing: border-box;
        width: 100%;
        height: 69px;
        background-color: ${theme.color.bgc2};
        border-radius: 999px;
        border: 0.5px solid ${theme.color.point};
        font-size: 20px;
        font-weight: 700;
        letter-spacing: -0.5px;
        color: ${theme.color.point};
        &:-moz-selection {
          background-color: ${theme.color.bgc1};
          color: ${theme.color.point};
        }
        &::selection {
          background-color: ${theme.color.point};
          color: ${theme.color.bgc1};
        }
        &:focus {
          outline-color: ${theme.color.point};
        }
      }
    }
    button {
      position: absolute;
      right: 40px;
      border: none;
      cursor: pointer;
      background-color: ${theme.color.bgc2};
      text-align: center;
      font-size: 32px;
      font-weight: 700;
      letter-spacing: -0.5px;
      color: ${theme.color.point};
      transition: all ease-in-out 0.15s;
    }
  }
`;

export const SearchFilterBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  h3 {
    display: flex;
    justify-content: space-between;
    color: ${theme.color.grey1};
    font-size: 20px;
    font-weight: 700;
    line-height: 140%;
    letter-spacing: -0.5px;
    padding-bottom: 4px;
    border-bottom: 0.5px solid ${theme.color.grey4};
    & .fold {
      display: flex;
      align-items: center;
      gap: 4px;
      cursor: pointer;
      span {
        color: ${theme.color.grey4};
        font-family: Pretendard;
        font-size: 20px;
        font-style: normal;
        font-weight: 200;
        line-height: 140%;
        letter-spacing: -0.5px;
      }
    }
  }
`;

export const CategoryFilterBox = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  h3 {
    display: flex;
    align-items: center;
    border-bottom: none;
    svg {
      padding: 0 4px;
    }
  }
  ul {
    flex-wrap: wrap;
    display: flex;
    column-gap: 12px;
    row-gap: 4px;
    li {
      display: flex;
      padding: 4px 12px;
      justify-content: center;
      align-items: center;
      border-radius: 999px;
      cursor: pointer;
      border: 0.5px solid ${theme.color.grey4};
      color: ${theme.color.grey2};
      font-size: 16px;
      font-weight: 600;
      line-height: 140%;
      letter-spacing: -0.5px;
      &.active {
        border: 0.5px solid ${theme.color.point};
        background-color: ${theme.color.sub5};
        color: ${theme.color.grey1};
      }
    }
  }
`;

export const ListCardsContainer = styled.div`
  margin-top: 80px;
  width: 100%;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
  gap: 40px;
  article {
    & > div {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      h3 {
        color: ${theme.color.grey1};
        font-size: 20px;
        font-weight: 700;
        line-height: 140%;
        letter-spacing: -0.5px;
        span {
          color: ${theme.color.point};
          color: var(--, #29cc61);
          font-family: Pretendard;
          font-size: 20px;
          font-style: normal;
          font-weight: 700;
          line-height: 140%;
          letter-spacing: -0.5px;
        }
      }
      .more {
        color: ${theme.color.grey4};
        font-size: 20px;
        font-weight: 200;
        line-height: 140%;
        letter-spacing: -0.5px;
      }
    }
    ul {
      margin-top: 20px;
      width: 1280px;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      /* column-gap: 40.5px; */
      column-gap: 43.5px;
      row-gap: 40px;
    }
  }
`;

export const PaginationContainer = styled.div`
  width: 100%;
  margin: 172px auto 0;
  ul {
    flex-wrap: wrap;
    display: flex;
    justify-content: center;
    gap: 20px;
    li {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 24px;
      height: 24px;
      color: ${theme.color.grey1};
      font-size: 12px;
      font-weight: 700;
      letter-spacing: -0.5px;
      border: 0.5px solid ${theme.color.grey4};
      border-radius: 4px;
      cursor: pointer;
      user-select: none;
      &.next {
        border: none;
      }
      &.active {
        border: 0.5px solid ${theme.color.point};
        background-color: ${theme.color.sub5};
      }
    }
  }
`;
