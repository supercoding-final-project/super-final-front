import { theme } from 'src/globalLayout/GlobalStyle';
import { styled } from 'styled-components';

export const PostWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PostContainer = styled.div`
  width: 50%;
  background-color: #4c4b4a;
  color: white;
  padding: 1rem;
`;

export const MentoProfileBox = styled.div`
  margin-top: 2.5rem;
  box-shadow: 0px 1px 0px rgba(128, 126, 125, 0.4);
  padding-bottom: 2.5rem;
  span {
    color: ${theme.color.grey5};
  }
`;

export const ImgAndName = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1.5rem;

  img {
    width: 3rem;
    height: 3rem;
    border-radius: 25rem;
    margin-right: 1rem;
    background-color: white;
  }
`;

export const JobAndIntro = styled.div`
  margin-top: 1rem;
  margin-bottom: 1.5rem;
`;

export const Summary = styled.div`
  margin-top: 0.5rem;
  display: flex;
`;

export const Career = styled.div`
  span {
    margin-right: 1rem;
  }

  li {
    margin-bottom: 0.5rem;
    color: ${theme.color.grey5};
  }
`;

export const CareerList = styled.div`
  margin-left: 1rem;
  li {
    margin-bottom: 0.25rem;
    margin-right: 1rem;
  }
  ul {
    display: flex;
  }
`;

export const TitleBox = styled.div`
  margin-top: 2.5rem;
  input {
    width: 50%;
    background-color: #4c4b4a;
    border: none;
    outline: none;
    font-size: 1.5rem;
    color: white;

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

  button {
    background-color: #4c4b4a;
    color: ${theme.color.grey5};
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    border: none;
    border: 1px solid ${theme.color.grey5};
    border-radius: 2rem;
    margin-right: 1rem;
    transition: all 0.2s ease;
    cursor: pointer;
    &:hover {
      background-color: #edfcf3;
      border: 1px solid #29cc61;
      color: black;
    }
  }
`;

export const StackBox = styled.div`
  margin-top: 2.5rem;
  div {
    margin-bottom: 1rem;
  }
  img {
    width: 4rem;
    height: 4rem;
    border-radius: 25rem;
    margin-right: 1rem;
    background-color: white;
    cursor: pointer;
    transition: transform 0.2s ease;
    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const InputTitle = styled.div`
  margin-top: 2.5rem;
  font-size: 1.5rem;
`;

export const SmallFont = styled.span`
  font-size: 0.75rem;
`;
