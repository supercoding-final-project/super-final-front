import { styled } from 'styled-components';

export const MainWrap = styled.div`
  margin: 0 auto;
  width: 100%;
`;

export const MainBanner = styled.div`
  width: 100%;
  height: 280px;
  display: flex;
  justify-content: center;
  background-color: #b6f187;
  .banner_container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #b6f187;
    width: 1024px;
    div {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .title {
      font-size: 32px;
      font-weight: 600;
      &_sub {
        padding: 10px 0;
        font-size: 16px;
      }
    }
  }
`;

export const MainCards = styled.div`
  margin-top: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
  article {
    & > div {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      h3 {
        font-size: 24px;
        font-weight: 700;
      }
      .more {
        font-weight: 700;
        color: rgba(0, 0, 0, 0.6);
        cursor: pointer;
      }
    }
    ul {
      margin-top: 20px;
      width: 1024px;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;
    }
  }
`;

export const MainCard = styled.li`
  position: relative;
  border: 1px solid;
  /* min-height: 240px; */
  padding: 24px;
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  cursor: pointer;
  h4 {
    font-size: 20px;
    font-weight: 600;
    line-height: 1.25;
    margin-bottom: 18px;
  }
  .stack {
    display: flex;
    justify-content: flex-start;
    gap: 14px;
    margin-bottom: 10px;
    font-size: 14px;
    &:last-child {
      margin-bottom: 56px;
    }
    & .title {
      color: rgba(0, 0, 0, 0.3);
    }
    & .desc {
      color: rgba(0, 0, 0, 0.5);
      &.incumbent {
        font-weight: 600;
        color: var(--main-color);
      }
    }
  }
  section {
    position: absolute;
    top: 147px;
    right: 23px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    background-color: #fff;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    & .profile {
      overflow: hidden;
    }
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
    margin-top: 15px;
    border: 0.5px solid rgba(0, 0, 0, 0.1);
  }
`;

export const StarTag = styled.div`
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--main-beige);
  padding: 8px 2px 5px 6px;
  gap: 2px;
  .icon {
    img {
      padding-top: 1px;
      width: 18px;
    }
    .star {
      padding-right: 3px;
    }
    .chevron_right {
      padding-left: 2px;
    }
  }
  div {
    color: var(--main-red);
    font-size: 16px;
    font-weight: 500;
  }
`;
