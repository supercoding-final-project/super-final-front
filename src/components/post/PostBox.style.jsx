import { theme } from 'src/globalLayout/GlobalStyle';
import { styled } from 'styled-components';

export const PostWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PostContainer = styled.div`
  width: 100%;
  color: white;
  padding: 1rem;
`;

export const TitleBox = styled.div`
  input {
    width: 90%;
    background-color: #4c4b4a;
    border: none;
    outline: none;
    font-size: 1.5rem;
    color: white;
    box-shadow: 0px 1px 0px rgba(128, 126, 125, 0.4);
    padding: 0.5rem;
    &::placeholder {
      color: white;
    }

    &:focus::placeholder {
      color: transparent;
    }
  }
`;

export const LevelBox = styled.div`
  margin-top: 2.5rem;

  div {
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
  }
`;

export const LevelBtn = styled.button`
  background-color: ${({ active }) => (active ? '#edfcf3' : '#4c4b4a')};
  color: ${({ active }) => (active ? 'black' : theme.color.grey5)};
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  border: none;
  border: 1px solid ${({ active }) => (active ? '#29cc61' : theme.color.grey5)};
  border-radius: 2rem;
  margin-right: 1rem;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    background-color: #edfcf3;
    border: 1px solid #29cc61;
    color: black;
  }
`;

export const StackBox = styled.div`
  margin-top: 2.5rem;
  div {
    margin-bottom: 1rem;
  }
`;

export const StackImg = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 25rem;
  margin-right: 1rem;
  background-color: white;
  cursor: pointer;
  transition: transform 0.2s ease;
  transform: ${(props) => (props.active ? 'scale(1.2)' : 'scale(1)')};
  &:hover {
    transform: scale(1.2);
  }
`;

export const InputTitle = styled.div`
  margin-top: 2.5rem;
  font-size: 1.5rem;
`;

export const SmallFont = styled.span`
  font-size: 0.75rem;
`;
