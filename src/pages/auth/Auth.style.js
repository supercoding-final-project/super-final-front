import { css, styled } from 'styled-components';

const BaseIcons = css`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
`;

export const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 8.0625rem);
  background: #ffffff;
  backdrop-filter: blur(15px);

  display: grid;
  place-items: center;
`;

export const Wrap = styled.section`
  width: 24.4375rem;
  height: 19.3125rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.p`
  color: #0f0f0e;
  font-size: 2rem;
  font-weight: 700;
  line-height: 2.8rem;
  letter-spacing: -0.03125rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const IconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 1.25rem;
`;

export const Kakao = styled.div`
  ${BaseIcons}
  background-color: #FAE100;
  background-image: url('/assets/kakao.svg');
  margin-right: 0.625rem;
  cursor: pointer;
`;

export const Google = styled.div`
  ${BaseIcons}
  background-color: #FFFFFF;
  background-image: url('/assets/google.svg');
  margin-left: 0.625rem;
`;

export const Image = styled.img`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  z-index: 10;
`;
