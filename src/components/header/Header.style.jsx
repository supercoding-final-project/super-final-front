import { styled } from 'styled-components';

export const HeaderWrap = styled.div`
  display: flex;
  justify-content: center;
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  header {
    width: 1024px;
    height: 76px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .header_start_menu,
    .header_end_menu {
      display: flex;
      gap: 30px;
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

export const Nav = styled.nav`
  display: flex;
  gap: 10px;
  align-items: center;
  & > form > label {
    position: relative;
    & > input {
      height: 38px;
      border-radius: 8px;
      padding: 2px 10px;
      box-sizing: border-box;
      border: 2px solid var(--main-color-500);
      &:focus {
        outline-color: var(--main-color);
      }
    }
    & > button {
      position: absolute;
      right: 0;
      top: 50%;
      padding-right: 0;
      margin-right: 6px;
      transform: translateY(-50%);
      background-color: #fff;
      cursor: pointer;
      border: none;
      & > img {
        width: 24px;
        padding-top: 2px;
      }
    }
  }
  & > .menu {
    font-size: 18px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 8px 10px 6px;
    color: rgba(0, 0, 0, 0.8);
    cursor: pointer;
    transition: all ease-in-out 0.2s;
    &.mento {
      background-color: var(--main-color);
      color: #fff;
      border-radius: 6px;
      &:hover {
        color: #fff;
      }
    }
    &:hover {
      color: var(--main-color);
    }
  }
`;
