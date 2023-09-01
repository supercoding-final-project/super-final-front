import styled, { css } from 'styled-components';

export const Button = styled.button`
  width: ${(props) => props.width};
  background-color: ${(props) => props.bgcolor};
  color: ${(props) => props.fontcolor};
  cursor: pointer;
  outline: none;
  border: none;
  padding: 10px 25px;
  // 조건부로 purpose라는 props에 따른 또 다른 css를 먹여야할 때
  ${({ purpose }) => {
    switch (purpose) {
      case 'test':
        return css`
          background-color: pink;
        `;
      case 'test2':
        return css`
          background-color: #fff;
          border: 1px solid #ddd;
        `;
      default:
        return;
    }
  }}
`;
