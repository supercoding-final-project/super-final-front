import { styled } from 'styled-components';

export const ChatBox = styled.div`
  overflow: auto;
  flex-direction: column;
  height: 100vh;
  background-color: #f2f2f2;
  padding-bottom: 4rem;
`;
export const ChatContainer = styled.div`
  flex: 1;
  min-height: 0;
`;

export const MsgCard = styled.div`
  display: flex;
  justify-content: ${(props) => (props.isSend ? 'flex-end' : 'flex-start')};
  margin: 2rem;
`;

export const MsgContainer = styled.div``;

export const ProfileImgBox = styled.div``;

export const ProfileImg = styled.img`
  width: 4rem;
  height: 4rem;
  overflow: hidden;
  border-radius: 25rem;
  cursor: pointer;
`;

export const MsgBox = styled.div`
  display: flex;
  max-width: 100%;
  position: relative;
`;

export const TextBox = styled.div`
  background: #fff;
  border-radius: 0.625rem;
  padding: 0.7rem;
  margin-top: 0.5rem;
`;

export const Text = styled.p`
  color: #495057;
  font-family: inherit;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  text-align: left;
  white-space: pre-line;
`;

export const SendAt = styled.div`
  color: #abb0b5;
  min-width: 3.5rem;
  font-family: inherit;
  font-size: 0.7rem;
  font-style: normal;
  font-weight: 400;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  margin: 0.5rem;
`;

//
export const ChattingBarWrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2;
  width: 100%;
  bottom: 0;
  padding-bottom: 1rem;
  height: 4rem;
`;

export const ChattingBar = styled.input`
  width: 75%;
  height: 3rem;
  border: 1px solid #bdbdbd;
  border-radius: 2.75rem;
  background-color: #f2f2f2;
  &::placeholder {
    text-indent: 5%;
    font-size: 0.875rem;
    color: #bdbdbd;
  }
`;

export const SendBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 4rem;
  margin: 1rem;
  border-radius: 25rem;
  overflow: hidden;
`;

export const SendBtn = styled.button`
  width: 100%;
  height: 100%;
  background-color: #39c5bb;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;
