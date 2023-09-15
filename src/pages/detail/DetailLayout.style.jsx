import { theme } from 'src/globalLayout/GlobalStyle';
import { styled } from 'styled-components';

export const DetailWrap = styled.div`
  margin-top: 4rem;
  display: flex;
  justify-content: center;
`;

export const TitleBox = styled.div`
  margin-top: 2.5rem;
  display: flex;
  h2 {
    color: ${theme.color.grey1};
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: 140%;
    letter-spacing: -0.03125rem;
  }
  span {
    border-radius: 2rem;
    background-color: #edfcf3;
    border: 1px solid #29cc61;
    color: black;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    margin-right: 0.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
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
  background-color: grey;
`;

export const IntroTitle = styled.div`
  margin-top: 2.5rem;
  font-size: 1.25rem;
`;

export const Intro = styled.div`
  margin-top: 2.5rem;
  div {
    font-size: 1.5rem;
    margin-bottom: 2.5rem;
  }

  span {
    font-size: 0.75rem;
    margin-right: 0.5rem;
  }

  li {
    display: flex;
    align-items: center;
    margin-top: 1rem;
    font-size: 1rem;
  }
`;

export const ReviewList = styled.div`
  margin-top: 2.5rem;
  padding-top: 2.5rem;
  box-shadow:
    0px -1px 0px rgba(128, 126, 125, 0.4),
    0px 1px 0px rgba(128, 126, 125, 0.4);
  margin-bottom: 2.5rem;
  padding-bottom: 2.5rem;
`;

export const ReviewTitle = styled.div`
  font-size: 1.25rem;
  margin-bottom: 1rem;
`;

export const ReviewBox = styled.div`
  overflow: auto;
  height: 8rem;
  &::-webkit-scrollbar {
    width: 0.25rem;
  }
  &::-webkit-scrollbar-thumb {
    background: ${theme.color.grey5};
    border-radius: 2rem;
  }
`;

export const ReviewCard = styled.div`
  display: flex;
  margin-top: 1rem;
`;

export const Name = styled.div`
  display: flex;

  align-items: center;
  width: 30%;
`;

export const Text = styled.div`
  display: flex;

  align-items: center;
  margin-right: 0.5rem;
`;

export const Rating = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.color.point};
  padding: 0.25rem 0.5rem 0.25rem 0.5rem;
  border-radius: 62.4375rem;
  color: white;
`;

export const ReviewPost = styled.div`
  margin-top: 2.5rem;
  margin-bottom: 10rem;

  span {
    font-size: 0.75rem;
  }
  div {
    margin-top: 0.5rem;
    display: flex;
  }

  input {
    border: none;
  }
  button {
    font-size: 0.75rem;
    background-color: ${theme.color.point};
    border: none;
    color: white;
    border-radius: 0.25rem;
    padding: 0.25rem 0.5rem 0.25rem 0.5rem;
    cursor: pointer;
    margin-top: 1rem;
  }
`;
