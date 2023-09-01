import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 3rem;
    font-weight: 800;
    margin-bottom: 2rem;
    text-align: center;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const Career = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Exp = styled.div`
  width: 100%;
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
`;

export const YearField = styled.div`
  width: 50%;

  select {
    border: none;
  }
`;

export const ChipWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  max-width: 24rem;
  width: 24rem;
  flex-wrap: wrap;
`;

export const CloseBtn = styled.button`
  border: none;
  background: inherit;
  cursor: pointer;
`;
