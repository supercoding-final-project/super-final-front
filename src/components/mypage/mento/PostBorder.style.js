import { theme } from 'src/globalLayout/GlobalStyle';
import styled from 'styled-components';
export const CardBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  gap: 5px;
  margin-bottom: 1rem;
  overflow: hidden;
`;


export const PageNumber = styled.span`
  width: 2rem;
  height: 2rem;
  color: white;
  padding: 5px 10px;
  margin-right: 5px;
  font-size: 2rem;
  font-weight: 700;
  background-color: gray;
  border-radius: 2rem;
`

export const PaginationContainer = styled.div`
  width: 100%;
  margin: 25px auto 0;
  ul {
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