import { styled } from 'styled-components';

export const ButtonWrap = styled.button`
  display: flex;
  width: 45%;
  padding-block: 0.75rem;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  z-index: 1;
  color: black;
  background: ${(props) => props.color};
  border-radius: 10px;
  position: relative;
  border: none;

  &::before {
    position: absolute;
    content: '';
    background: ${(props) => props.hoverColor};
    width: 150px;
    height: 200px;
    z-index: -1;
    border-radius: 50%;
  }

  &:hover {
    &::before {
      top: -30px;
      left: -30px;
    }
  }

  &:before {
    top: 100%;
    left: 100%;
    transition: 0.3s all;
  }

  img {
    margin-right: 1rem;
  }
`;
