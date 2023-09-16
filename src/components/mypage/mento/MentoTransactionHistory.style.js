import { theme } from 'src/globalLayout/GlobalStyle';
import styled from 'styled-components';
export const OrderHistoryContainer = styled.div`
  display: flex;
  width: 955px;
  padding: 40px;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  border-radius: 12px;
  border: 0.5px solid #808080;
  margin-bottom: 1rem;
`;

export const orderHistoryHead = styled.div`
  width: 100%;
  display: grid;
  justify-content: center;
  align-content: center;
  text-align: center;
  gap: 5px;

  & > div {
    background-color: ${theme.color.bgc3};
    border-radius: 5px;
    padding: 10px 0;
    font-size: 1.3rem;
  }
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
`;
export const DivGrid = styled.div`
  width: 100%;
  display: grid;
  justify-content: center;
  align-content: center;
  text-align: center;
  background-color: ${theme.color.bgc5};
  border-radius: 5px;
  padding: 10px 0;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
`;
