import { styled } from 'styled-components';

export const ProfileWrapper = styled.div`
  position: sticky;
  width: 50%;
  display: flex;
  justify-content: center;
  background-color: #f2f2f2;
`;

export const ProfileContainer = styled.div`
  width: 100%;
`;

export const ProfileSummaryBox = styled.div`
  background-color: white;
  width: 100%;
  border-bottom-left-radius: 0.7rem;
  border-bottom-right-radius: 0.7rem;
  margin-bottom: 1rem;
`;

export const SummaryContainer = styled.div`
  padding: 2rem;
`;

export const ProfileImg = styled.img`
  width: 8rem;
  height: 8rem;
  border-radius: 25rem;
`;

export const ProfileName = styled.div`
  margin-top: 0.5rem;
  font-size: 1.2rem;
  font-weight: bold;
`;

export const ProfileGroup = styled.div`
  margin-top: 0.5rem;
  font-size: 1rem;
  font-weight: bold;
`;

export const ProfileSummary = styled.div`
  margin-top: 3rem;
  font-size: 0.9rem;
`;

export const ProfileSummaryTab = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
`;

export const SummaryTab = styled.div`
  background-color: #f2f2f2;
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  padding-bottom: 0.5rem;
`;

export const TabWrap = styled.div`
  width: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TabDetail = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.5rem;
`;

export const ProfileDetailBox = styled.div`
  display: flex;
  justify-content: center;
  background-color: white;
  width: 100%;
  border-top-left-radius: 0.7rem;
  border-top-right-radius: 0.7rem;
`;
