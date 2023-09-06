import { styled } from "styled-components";


export const DivFlex = styled.div`
  font-size: 3rem;
  display: flex;
  flex-direction: column;

`
export const CalendarContainer = styled.div`
  font-family: Arial, sans-serif;
  width: 900px;
  background-color: #B9F1F1;
  border-radius: 10px;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 15px;
`;
export const DaysContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;

`;
export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: #B9F1F1;
`;

export const year = styled.div`
margin-left: 10px;
    font-size: 1.5rem;
    font-weight: 800;
`
export const month = styled.div`
margin-left: 10px;
    font-size: 1.3rem;
    font-weight: 800;
`
export const Notification = styled.div`
  color: red;
`

export const WeekCell = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 81.42px;

  color: ${props => props.$isSunday ? 'red' : props.$isSaturday ? 'blue' : 'black'};
  background-color: '#fff';
  &:hover{
    scale: 1.1;
    cursor: pointer;
  }
`;

export const DayCell = styled.div`
padding: 5px;
  font-size: large;
  display: flex;
  flex-direction:column;
  align-items: start;
  justify-content: start;
  height: 120px;
  border-radius: 10px;
  overflow: hidden;
  background-color: ${props => props.$empty ? '#f5f5f5' : '#fff'};
  transition: all 0.3s ;
  &:hover{
    scale: 1.05;
    cursor: pointer;
  }
`;

export const CellText = styled.div`
line-height: 20px;
text-align: center;
color:white;
margin-top: 2px;
font-size: 12px;
background-color: black;
border-radius: 5px;
width: 100%;
`

export const OverCellText = styled.div`
line-height: 20px;
text-align: center;
color:black;
margin-top: 2px;
font-size: 12px;
width: 100%;
`

export const PinkCellText = styled.div`
color: pink;
margin-top: 2px;
font-size: 12px;
`
export const ModalCellText = styled.div`
color: pink;
margin-top: 2px;
font-size: 12px;
`


//모달부분

export const OutSideModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`
export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  height:500px;
  background-color: rgba(255,255,255);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  z-index: 3;
`

export const InSideModalHead = styled.div`
  width: 100%;
  height: 50px;
  background-color: #B9F1F1;
  border-radius: 10px 10px 0 0 ;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
`
export const InSideModalBody = styled.div`
  width: 500px;
  height:500px;
  background-color: rgba(255,255,255);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
`