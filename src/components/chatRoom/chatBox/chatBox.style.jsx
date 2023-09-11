import { styled } from 'styled-components';

export const ChatBox = styled.div`
  flex-direction: column;
  width: 70%;
  height: 100%;
`;

export const ChatContainer = styled.div`
  position: relative;
  height: 100vh;
  overflow: auto;
`;

export const MsgCard = styled.div`
  display: flex;
  justify-content: ${(props) => (props.send ? 'flex-end' : 'flex-start')};
  margin: 2rem;
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
  background: #fff;
  border-radius: 0.625rem;
  padding: 0.7rem;
  margin-top: 0.5rem;
  background-color: ${(props) => (props.send ? '#29cc61' : 'white')};
  color: ${(props) => (props.send ? 'white' : 'black')};
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
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70%;
  background-color: #f2f2f2;
  height: 9rem;
  padding-bottom: 1rem;
`;

export const ChattingBar = styled.textarea`
  box-sizing: border-box;
  padding: 20px 84px 20px 20px;
  width: 80%;
  height: 100%;
  border: 1px solid #bdbdbd;
  background-color: #f2f2f2;
  border-radius: 0.5rem;

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
  background-color: #29cc61;
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
  background-color: #29cc61;
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
  width: 30%;
  height: 100vh;
  border-right: 1px solid #bdbdbd;
`;

export const NoChatListBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: grey;
  margin-bottom: 1rem;
`;

export const NoChatBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 100vh;
  font-size: 2rem;
  color: grey;
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
