import { theme } from 'src/globalLayout/GlobalStyle';
import { styled } from 'styled-components';

export const PostModal = styled.div`
  position: fixed;
  right: 10%;
  top: 10%;
  border-radius: 0.75rem;
  background-color: #4c4b4a;
`;

export const PostModalWrap = styled.div`
  margin: 2rem;
  border: 1px solid ${theme.color.point};
  border-radius: 0.75rem;
`;

export const PostModalContainer = styled.div`
  padding: 0.75rem;
  div {
    color: white;
    margin: 0.5rem;
  }
`;

export const ModalBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem;

  button {
    font-size: 1.5rem;
    background-color: ${theme.color.point};
    border: none;
    color: white;
    border-radius: 0.25rem;
    padding: 1rem;
    cursor: pointer;
  }
`;
