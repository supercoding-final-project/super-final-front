import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  gap: 5px;
  border-radius: 12px;
  border: 0.5px solid #808080;
  margin-bottom: 1rem;
  overflow: hidden;
`;
