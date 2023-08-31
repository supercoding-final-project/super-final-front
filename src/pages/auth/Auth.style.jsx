import { styled } from 'styled-components';

export const Container = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: repeat(auto-fill, minmax(50%, auto));
  width: 100%;
  height: 100%;
`;

export const LogoWrap = styled.div`
  justify-self: flex-end;
  margin-right: 2rem;
`;

export const SideWrap = styled.div`
  justify-self: flex-start;
  margin-left: 2rem;

  h1,
  p,
  button {
    margin-block: 1rem;
  }

  h1 {
    font-size: 3rem;
    line-height: 1.2;
    font-weight: 800;
  }

  p {
    font-size: 14px;
    font-weight: 600;
  }
`;

export const TabsWrapper = styled.div`
  input {
    display: none;
  }

  position: relative;
  display: flex;
  align-items: center;
  border-radius: 999px;
  background-color: #fff;
  width: 100%;
  overflow: hidden;
  border: 1px solid rgba(53, 52, 52, 0.226);

  label {
    width: 100%;
    padding: 10px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    font-weight: 600;
    letter-spacing: -1px;
    font-size: 14px;
  }

  .selection {
    display: none;
    position: absolute;
    height: 100%;
    width: calc(100% / 2);
    z-index: 0;
    left: 0;
    top: 0;
    transition: 0.15s ease;
  }

  & label:has(input:checked) {
    color: #fff;
  }

  & label:has(input:checked) ~ .selection {
    background-color: rgb(11 117 223);
    display: inline-block;
  }

  & label:nth-child(1):has(input:checked) ~ .selection {
    transform: translateX(0);
  }

  & label:nth-child(2):has(input:checked) ~ .selection {
    transform: translateX(calc(100% * 1));
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
`;
