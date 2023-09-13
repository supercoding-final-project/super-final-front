import styled from "styled-components";


export const DivFlex = styled.div`
display: flex;
margin-top: 1rem;
`

export const DivGrid = styled.div`
width: 800px;
display: Grid;
margin-top: 1rem;
grid-template-columns : repeat(6, 1fr);
row-gap :10px;
column-gap: 10px;
text-align: center;
`
export const DivGrid7 = styled.div`
width: 800px;
display: Grid;
margin-top: 1rem;
grid-template-columns : repeat(7, 1fr);
row-gap :10px;
column-gap: 10px;
text-align: center;
`

export const Sunday = styled.div`
    cursor: pointer;
    color: ${props => (props.$selectWeekendDay ? "Black" : "White")};
    padding: 10px 25px;
    border-radius: 5px;
    font-size: larger;
    margin-left: 1rem;
    background-color: ${props => (props.$selectWeekendDay ? "#3dff81" : "Red")};
`
export const Saturday = styled.div`
    cursor: pointer;
    color: ${props => (props.$selectWeekendDay ? "Black" : "White")};
    padding: 10px 25px;
    border-radius: 5px;
    font-size: larger;
    margin-left: 1rem;
    background-color: ${props => (props.$selectWeekendDay ? "#3dff81" : "Blue")};
`


export const Weekdays = styled.div`
cursor: pointer;
padding: 10px 25px;
border-radius: 5px;
font-size: larger;
margin-left: 1rem;
background-color: ${props => (props.$selectWeekendDay ? "#3dff81" : "aliceblue")};
`

export const Weekend = styled.div`
cursor: pointer;
padding: 10px 25px;
border-radius: 5px;
font-size: larger;
margin-left: 1rem;
background-color: ${props => (props.$selectWeekendDay ? "#3dff81" : "aliceblue")};
`

export const ReservationTime = styled.div`
cursor: pointer;
padding: 10px 25px;
border-radius: 5px;
background-color: ${props => (props.$isSelected ? "#3dff81" : "aliceblue")};
`

//요일별로 시간을 예약한곳?
