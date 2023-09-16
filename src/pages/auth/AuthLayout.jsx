import { styled } from 'styled-components';

import Auth from './Auth';

const AuthLayout = () => {
  return (
    <Container>
      <Auth />
    </Container>
  );
};

export default AuthLayout;

const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 8.0625rem);
`;
