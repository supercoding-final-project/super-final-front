import { styled } from 'styled-components';

import MentoAuth from './MentoAuth';

const MentoAuthLayout = () => {
  return (
    <Container>
      <MentoAuth />
    </Container>
  );
};

export default MentoAuthLayout;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;
