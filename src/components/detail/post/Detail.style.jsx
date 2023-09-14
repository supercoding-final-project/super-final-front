import { theme } from 'src/globalLayout/GlobalStyle';
import { styled } from 'styled-components';

export const MentoProfileBox = styled.div`
  margin-top: 4rem;
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
    background-color: grey;
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

export const SmallFont = styled.span`
  font-size: 0.75rem;
`;

export const PostModal = styled.div`
  position: fixed;
  right: 12%;
  top: 11%;
  border-radius: 0.75rem;
`;

export const PostModalWrap = styled.div`
  margin: 2rem;
  border: 1px solid ${theme.color.point};
  border-radius: 0.75rem;
`;

export const PostModalContainer = styled.div`
  padding: 0.75rem;

  div {
    margin: 0.5rem;
    display: flex;
    justify-content: center;
  }
`;

export const ModalBtn = styled.div`
  margin: 2rem;

  button {
    font-size: 1.5rem;
    background-color: ${theme.color.point};
    border: none;
    color: white;
    border-radius: 0.25rem;
    padding: 1rem;
    cursor: pointer;
    margin-top: 1rem;
  }
`;
