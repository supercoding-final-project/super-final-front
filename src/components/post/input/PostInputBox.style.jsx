import { theme } from 'src/globalLayout/GlobalStyle';
import { styled } from 'styled-components';

export const InputBox = styled.div`
  margin-top: 2.5rem;
  div {
    font-size: 1.5rem;
    margin-bottom: 2.5rem;
  }

  span {
    font-size: 0.75rem;
  }

  li {
    display: flex;
    align-items: center;
    margin-top: 1rem;
    font-size: 1rem;
  }
  input {
    margin-left: 0.5rem;
    background-color: #4c4b4a;
    border: none;
    box-shadow: 0px 1px 0px rgba(128, 126, 125, 0.4);
    color: ${theme.color.grey5};
  }
`;
