import styled, { css } from 'styled-components';

export const LoadingSpinnerWrapper = styled.div`
  ${({ isFullWidth }) =>
        isFullWidth &&
        css`
      display: flex;
      justify-content: center;  
      align-items: center;
    `}
`;

export const Spinner = styled.div`
  width: ${({ $size }) => `${$size}px`};
  height: ${({ $size }) => `${$size}px`};
  border: var(--loading-spinner-weight) solid var(--loading-spinner-border-color);
  border-top: var(--loading-spinner-weight) solid ${({ $color }) => $color};
  border-radius: 50%;
  animation: spinAnimation 1s linear infinite;

  @keyframes spinAnimation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;