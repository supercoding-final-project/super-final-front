import { styled } from 'styled-components';

export const DisFlex = styled.div`
    display: flex;
    ;
`
export const DivFlex = styled.div`
    display: flex;
    justify-content: center;
    align-items: center
    ;
`
export const DivFlexColumn = styled.div`
width: 100%;
    display: flex;
    flex-direction: column;
`

export const NavBarContainer = styled.div`
 width: 250px;
 height: 100vh;
 padding-top: 2rem;
 background-color: white;

`

export const NavContentBox = styled.div`
    width: 170px;
    margin: 1rem auto ;
`

export const LeftNavbarHeadContainer = styled.div`
    width: 100%;
    padding-bottom: 1rem;
    border-bottom: 2px solid gray;
    margin-bottom: 2rem;
`

export const InformationHeadContainer = styled.div`
    width: 100%;
    margin-top: 43px;
    padding-bottom: 1rem;
    border-bottom: 2px solid gray;

`

export const InformationHeadText = styled.div`
    display: flex;
    justify-content:start;
    align-items: center;
    font-size: 1.3rem;
    font-weight: 500;
`
export const NavBarHeadName = styled.div`
cursor: pointer;
    width: 100%;
    font-size: 13px;
    height: 2rem;
    display: flex;
    justify-content:start;
    align-items: center;
`
export const NavBarHeadPoint = styled.div`
cursor: pointer;
    width: 100%;
    height: 2rem;
    display: flex;
    justify-content: start;
    align-items: center;
`

export const NavBarItems = styled.div`
cursor: pointer;
    width: 100%;
    height: 2rem;
    display: flex;
    justify-content: start;
    align-items: center;
    margin-bottom: 1rem;
  
`

export const InformationContainer = styled.div`
    width: 100vh; /* 가로 전체 화면 너비 */
    height: 100vh; /* 세로 전체 화면 높이 */
    display: flex;
    padding-top: 2rem;
    justify-content: center;
    align-items: start;
    background-color: #fff;
   
`
export const InformationBox = styled.div`

    width: 100%;
    margin: 1rem auto ;

    `


export const CalendarContainer = styled.div`
    /* background-image: url('https://i2.ruliweb.com/ori/23/06/25/188f1672e97dca4b.jpg'); */
    background-size: cover; /* 배경 이미지를 화면에 꽉 채우도록 크기 조절 */
    background-position: center center; /* 배경 이미지를 화면 중앙에 위치 */
    width: 100vw; /* 가로 전체 화면 너비 */
    height: 100vh; /* 세로 전체 화면 높이 */
    display: flex;
    flex-direction: column;
    padding: 3rem;
    justify-content: start;
    align-items: center;
    background-color: #39c5bb;
    position: relative;
    left: 300px;
    width: calc(100% - 300px);
    height: 100vh;
`
export const FIxInformationContainer = styled.div`
display: flex;
flex-direction: column;
align-items: start;
gap: 0.5rem;
`

export const Label = styled.label`
text-align: center;
width: 100px;
color: #000000;
font-weight: 900;
    background-color: rgb(0,255,255,0.5);
    padding: 1rem;
    border-radius: 10px 0px 0px 10px;
`



export const Value = styled.div`
text-align: center;
        width: 250px;
        color: #000000;
font-weight: 900;
    background-color: rgb(213,255,255,0.7);
    padding: 1rem;
    border-radius: 0 10px 10px 0;
`
export const Input = styled.input`
text-align: center;
        width: 250px;
        color: #000000;
font-weight: 900;
    background-color: rgb(213,255,255,0.7);
    padding: 1rem;
    border-radius: 0 10px 10px 0;
`

export const FixButton = styled.button`
cursor: pointer;
    margin-left: 1rem;
    text-align: center;

    color: #000000;
    font-weight: 900;
    background-color: #d5ffff;
    padding: 1rem;
    border-radius: 10px;
    
`