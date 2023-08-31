import { styled } from "styled-components";

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
export const WeekCell = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 81.42px;

  color: ${props => props.isSunday ? 'red' : props.isSaturday ? 'blue' : 'black'};
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
  /* border: 1px solid #ccc; */
  background-color: ${props => props.empty ? '#f5f5f5' : '#fff'};
  &:hover{
    scale: 1.1;
    cursor: pointer;
  }
`;


export const CellText = styled.div`
margin-top: 2px;
font-size: 10px;
`