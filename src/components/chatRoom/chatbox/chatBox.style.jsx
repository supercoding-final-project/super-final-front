import { theme } from 'src/globalLayout/GlobalStyle';
import { styled } from 'styled-components';

export const ChatBox = styled.div`
  // flex-direction: column;
  width: 70%;

  // 하윤 추가
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ChatContainer = styled.div`
  position: relative;
  height: 80vh;
  overflow: auto;

  // 하윤 추가
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${theme.color.grey5};
    border-radius: 25px;
  }
`;

export const DateLine = styled.div`
  font-size: 0.8rem;
  margin: 0 auto;
  background-color: #fff;
  color: #807e7d;
  font-weight: 200;
  letter-spacing: -0.5px;
  padding: 0px 8px;
  position: relative;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    width: 50%;
    height: 1px;
    background-color: #807e7d;
  }

  &::before {
    left: 0;
  }

  &::after {
    right: 0;
  }
`;

export const MsgCard = styled.div`
  display: flex;
  justify-content: ${(props) => (props.send === 1 ? 'flex-end' : 'flex-start')};
  // margin: 2rem;

  // 하윤 변경
  margin: 1rem 2rem;
`;

export const MsgContainer = styled.div`
  line-height: 1.2rem;
  max-width: 50%;
  display: flex;
`;

export const ProfileImgBox = styled.div`
  margin-right: 1rem;
`;

export const ProfileImg = styled.img`
  width: 4rem;
  height: 4rem;
  overflow: hidden;
  border-radius: 25rem;
  cursor: pointer;
`;

export const PartnerName = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const MsgBox = styled.div`
  display: flex;
  max-width: 100%;
  position: relative;
`;

export const TextBox = styled.div`
  border-radius: 0.625rem;
  padding: 0.7rem;
  margin-top: 0.5rem;
  background-color: ${(props) => (props.send === 1 ? `${theme.color.point}` : '#EDFCF3')};
  color: ${(props) => (props.send === 1 ? 'white' : 'black')};
`;

export const Text = styled.p`
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

export const ChattingBarWrapper = styled.div`
  position: sticky;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: white;
  height: 9rem;
  padding-bottom: 1rem;
`;

export const ChattingBar = styled.textarea`
  box-sizing: border-box;
  padding: 20px 84px 20px 20px;
  width: 80%;
  // height: 100%; // 이거 쓰니까 채팅 창이 없을 때 9rem 이 되었다가 채팅 창이 생기면 쪼그라 들어영!
  border: 1px solid #bdbdbd;
  background-color: white;
  border-radius: 0.5rem;

  // 하윤 변경
  height: 9rem;

  &::placeholder {
    font-size: 0.875rem;
    color: #bdbdbd;
  }
`;

export const SendBtn = styled.button`
  border: none;
  position: absolute;
  right: 10%;
  bottom: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 2.5rem;
  margin: 1rem;
  border-radius: 0.25rem;
  overflow: hidden;
  background-color: ${theme.color.point};
  color: white;
  svg {
    width: 100%;
    height: 100%;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const VideoChatBtn = styled.button`
  border: none;
  position: absolute;
  left: 10%;
  bottom: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.5rem;
  height: 2.5rem;
  margin: 1rem;
  border-radius: 0.25rem;
  overflow: hidden;
  background-color: ${theme.color.point};
  color: white;
  svg {
    width: 100%;
    height: 100%;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const NoChatListWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25%;
  height: 100vh;
  border: 1px solid #bdbdbd;
  border-radius: 0.5rem;
  margin: 2rem;
`;

export const NoChatListBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  font-size: 2rem;
`;

export const TextSpan = styled.span`
  color: ${(props) => props.color};
  font-weight: bold;
`;

export const NoChatListDetail = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  font-size: 1.2rem;
`;

export const NoChatBtn = styled.button`
  width: auto;
  padding: 1rem;
  margin: 1rem;
  font-size: 1rem;
  background-color: ${theme.color.point};
  color: white;
  cursor: pointer;
  border-radius: 0.25rem;
  border: none;
`;

export const NoChatBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 75%;
  height: 100vh;
  font-size: 2rem;
  border: 1px solid #bdbdbd;
  border-radius: 0.5rem;
  margin: 2rem;
`;
// export const ChattingBarWrapper = styled.div`
//   position: sticky;
//   display: flex;
//   bottom: 0;
//   justify-content: center;
//   align-items: center;
//   width: 100%;
//   background-color: #f2f2f2;
// `;

// export const ChattingBar = styled.input`
//   width: 100%;
//   height: 6.5rem;
//   border: 1px solid #bdbdbd;
//   background-color: #f2f2f2;
//   border-radius: 0.5rem;
//   // text-indent: 5%;
//   &::placeholder {
//     font-size: 0.875rem;
//     color: #bdbdbd;
//   }
// `;

// export const SendBtnWrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 4rem;
//   height: 4rem;
//   margin: 1rem;
//   border-radius: 25rem;
//   overflow: hidden;
// `;

// export const SendBtn = styled.button`
//   width: 100%;
//   height: 100%;
//   background-color: #39c5bb;
//   border: none;
//   cursor: pointer;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;
