import { styled } from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  margin-top: 2rem;

  .input {
    color: black;
    font-size: 0.9rem;
    background-color: transparent;
    width: 100%;
    box-sizing: border-box;
    padding-inline: 0.5em;
    padding-block: 0.7em;
    border: none;
    border-bottom: 1px solid rgba(221, 221, 221, 0.39);
  }

  .input-border {
    position: absolute;
    background: #5891ff;
    width: 0%;
    height: 2px;
    bottom: 0;
    left: 0;
    transition: 0.3s;
  }

  input:focus {
    outline: none;
  }

  input:focus ~ .input-border {
    width: 100%;
  }
`;
