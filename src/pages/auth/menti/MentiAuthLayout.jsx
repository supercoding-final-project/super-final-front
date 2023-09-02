import { styled } from 'styled-components';

import MentiAuth from './MentiAuth';

const MentiAuthLayout = () => {
  return (
    <Container>
      <MentiAuth />
    </Container>
  );
};

export default MentiAuthLayout;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;
