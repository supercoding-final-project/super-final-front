import { styled } from 'styled-components';

export const Container = styled.div`
  display: grid;
  place-items: center;
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
