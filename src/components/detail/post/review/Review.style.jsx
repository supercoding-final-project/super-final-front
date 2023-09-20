import { theme } from 'src/globalLayout/GlobalStyle';
import { styled } from 'styled-components';

export const ReviewBoxWrap = styled.div`
  h1 {
    margin-top: 2rem;
    margin-bottom: 2rem;
    font-size: 1.2rem;
  }
`;

export const ReviewBox = styled.div`
  height: 11.5rem;
  overflow-y: auto;
  padding: 0 1rem 1rem 1rem;
  border-radius: 0.75rem;
  border: 0.5px solid ${theme.color.grey4};
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${theme.color.grey5};
    border-radius: 25px;
  }
`;

export const BoxHeader = styled.div`
  padding-top: 1rem;
  position: sticky;
  top: 0;
  z-index: 5;
  background-color: white;
  width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 1rem;
  box-shadow: 0px 1px 0px rgba(128, 126, 125, 0.4);

  div {
    display: flex;
    justify-content: center;
    width: 15%;
    color: black;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 140%; /* 1.75rem */
    letter-spacing: -0.03125rem;
  }
`;

export const ListBox = styled.div`
  overflow-y: auto;
  width: 100%;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 15%;
    color: black;
    font-size: 0.8rem;
    font-style: normal;
    font-weight: 200;
    line-height: 140%; /* 1.75rem */
    letter-spacing: -0.03125rem;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  button {
    display: flex;
    padding: 0.25rem 0.75rem;
    align-items: center;
    border-radius: 0.25rem;
    background: ${theme.color.point};
    color: white;
    font-size: 0.8rem;
    font-style: normal;
    font-weight: 700;
    line-height: 140%; /* 1.4rem */
    letter-spacing: -0.03125rem;
    border: none;
    cursor: pointer;
  }
`;
