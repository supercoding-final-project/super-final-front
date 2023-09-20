import { theme } from 'src/globalLayout/GlobalStyle';
import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(15px);
  z-index: 600;
  animation: fadeIn 0.2s forwards;
  display: flex;
  justify-content: center;
  align-items: center;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const ModalCard = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  position: relative;
  background-color: ${theme.color.grey3};
  color: ${theme.color.bgc1};
  box-sizing: border-box;
  overflow-y: auto;
  border-radius: 20px;
  padding: 40px;

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: transparent;
  }
`;

export const CloseBtn = styled.div`
  position: sticky;
  top: 0;
  left: 100%;
  cursor: pointer;
  display: flex;
  width: 20px;
  background-color: ${theme.color.grey3};
  z-index: 10;
  border-radius: 4px;
`;
