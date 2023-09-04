import { styled } from 'styled-components';

export const ChatRoomHeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 4rem;
  background-color: white;
  box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.05);
`;

export const ChatRoomHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  height: auto;
  min-height: fit-content;
`;

export const ChatPartnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ChatPartnerName = styled.div`
  height: 20px;
`;

export const LeftArrowWrapper = styled.div`
  cursor: pointer;
`;

export const VideoChatBtnWrapper = styled.div``;

export const VideoChatBtn = styled.button`
  width: 14rem;
  height: 2.5rem;
  border-radius: 0.5rem;
  background-color: #39c5bb;
  color: white;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  cursor: pointer;
`;
