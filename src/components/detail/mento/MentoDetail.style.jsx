import { theme } from 'src/globalLayout/GlobalStyle';
import { styled } from 'styled-components';

export const PostWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PostContainer = styled.div`
  width: 100%;
  color: white;
  h1 {
    margin-bottom: 1rem;
    font-size: 1.25rem;
    color: ${theme.color.grey5};
  }
`;

export const MentoDetailTitle = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const CardWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;
