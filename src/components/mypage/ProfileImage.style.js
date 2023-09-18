import styled from 'styled-components';

export const Container = styled.div``;

export const ProfileImage = styled.img`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
`;

///ddd

export const MemberImage = styled.img`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: 9999px;
  object-fit: cover;
`;

export const SettingIcon = styled.img`
  width: 40px;
  height: 40px;

  cursor: pointer;
`;
