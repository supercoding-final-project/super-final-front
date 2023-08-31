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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const ChipWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  max-width: 24rem;
  width: 24rem;
  flex-wrap: wrap;
`;
