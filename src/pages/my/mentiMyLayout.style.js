import { styled } from 'styled-components';

export const DivFlex = styled.div`

    display: flex;
    justify-content: center;
    align-items: center
    ;
`

export const NavBarContainer = styled.div`
 position: fixed;
 left: 0;
 right: 0;
 width: 300px;
 height: 100vh;
 padding-top: 2rem;
 background-color: #B9F1F1;
`

export const NavBarItems = styled.div`
cursor: pointer;
    width: 100%;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
    border-bottom: 1px solid black;
`

export const InformationContainer = styled.div`
    background-image: url('https://i2.ruliweb.com/ori/23/06/25/188f1672e97dca4b.jpg');
    background-size: cover; /* 배경 이미지를 화면에 꽉 채우도록 크기 조절 */
    background-position: center center; /* 배경 이미지를 화면 중앙에 위치 */
    width: 100vw; /* 가로 전체 화면 너비 */
    height: 100vh; /* 세로 전체 화면 높이 */
    display: flex;
    padding: 3rem;
    justify-content: center;
    align-items: center;
    background-color: #39c5bb;
    position: relative;
    left: 300px;
    width: calc(100% - 300px);
    height: 100vh;
`

export const Label = styled.label`
text-align: center;
width: 100px;
color: #000000;
font-weight: 900;
    background-color: aqua;
    padding: 1rem;
    border-radius: 10px 0px 0px 10px;
`



export const Value = styled.div`
text-align: center;
        width: 250px;
        color: #000000;
font-weight: 900;
    background-color: #d5ffff;
    padding: 1rem;
    border-radius: 0 10px 10px 0;
`
export const Input = styled.input`
text-align: center;
        width: 250px;
        color: #000000;
font-weight: 900;
    background-color: #d5ffff;
    padding: 1rem;
    border-radius: 0 10px 10px 0;
`

export const FixButton = styled.button`
cursor: pointer;
    margin-left: 1rem;
    text-align: center;
    width: 100px;
    color: #000000;
    font-weight: 900;
    background-color: #d5ffff;
    padding: 1rem;
    border-radius: 10px;
    
`