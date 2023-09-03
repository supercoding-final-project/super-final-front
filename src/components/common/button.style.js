import styled, { css } from 'styled-components';

export const Button = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.bgcolor};
  color: ${(props) => props.fontcolor};
  outline: none;
  border: none;
  padding: 10px 25px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s;

  // 조건부로 purpose라는 props에 따른 또 다른 css를 먹여야할 때
  ${({ purpose }) => {
    switch (purpose) {
      case 'goToMentoLogin':
        return css`
          margin-top: 20px;
          font-size: 16px;
          font-weight: 600;
          padding: 11px 20px;
          box-sizing: content-box;
          color: var(--font-color);
          background-color: #fff;
          &:hover {
            background-color: #fff;
            color: var(--main-color);
          }
        `;

      default:
        return;
    }
  }}
`;
