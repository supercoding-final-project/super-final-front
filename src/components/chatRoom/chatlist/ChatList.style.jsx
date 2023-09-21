import { styled } from 'styled-components';

export const ChatListWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 20%;
  padding-left: 2rem;
  padding-right: 2rem;
  overflow: auto;
`;

export const ChatListBox = styled.div`
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const ChatListCardWrap = styled.div`
  display: flex;
  align-items: center;
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.2);
  height: 8rem;
`;

export const ChatListCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80%;
  border-radius: 1.25rem;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background-color: white;
  }
`;

export const ProfileImg = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 25rem;
`;

export const ListMsgBox = styled.div`
  width: 65%;
  margin-left: 0.5rem;
`;

export const PartnerName = styled.div`
  width: 100%;
`;

export const lastMsg = styled.div`
  font-size: 1rem;
  margin-top: 1rem;
  height: 1rem;
  width: 100%;
  overflow-x: hidden;
`;
