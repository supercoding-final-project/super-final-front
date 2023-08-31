import { styled } from "styled-components";

export const CalendarContainer = styled.div`
  font-family: Arial, sans-serif;
  width: 300px;
  border: 1px solid #ccc;
  margin: 0 auto;
`;
export const DaysContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 1px;
  background-color: #f5f5f5;
`;
export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

export const DayCell = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  border: 1px solid #ccc;
  background-color: ${props => props.empty ? '#f5f5f5' : '#fff'};
`;
