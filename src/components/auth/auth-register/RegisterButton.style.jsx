import { styled } from 'styled-components';

export const Container = styled.button`
  display: inline-block;
  padding: 12px 24px;
  border: 1px solid #a0c4fb;
  border-radius: 10px;
  transition: all 0.2s ease-in;
  position: relative;
  overflow: hidden;
  font-size: 1rem;
  color: black;
  background: #a0c4fb;
  z-index: 1;
  margin-top: 2rem;

  &:before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%) scaleY(1) scaleX(1.25);
    top: 100%;
    width: 140%;
    height: 180%;
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 50%;
    display: block;
    transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
    z-index: -1;
  }

  &:after {
    content: '';
    position: absolute;
    left: 55%;
    transform: translateX(-50%) scaleY(1) scaleX(1.45);
    top: 180%;
    width: 160%;
    height: 190%;
    background-color: #4189f6;
    border-radius: 50%;
    display: block;
    transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
    z-index: -1;
  }

  &:hover {
    color: #ffffff;
    border: 1px solid #4189f6;
  }

  &:hover:before {
    top: -35%;
    background-color: #4189f6;
    transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
  }

  &:hover:after {
    top: -45%;
    background-color: #4189f6;
    transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
  }
`;