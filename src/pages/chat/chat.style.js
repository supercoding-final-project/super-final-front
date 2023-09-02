
import { styled } from 'styled-components';

export const ChatRoomWrapper = styled.div`
  margin-top: 2.5rem;
  width: 100%;
  height: 100%;
`
export const ChatListWrap = styled.div`
/* background-color: pink; */
display: flex;
flex-direction: column;
width: 600px;
margin: 0 auto;
  h2 {
    /* background-color: skyblue; */
    font-size: 28px;
    color: #323232;
    font-weight: 600;
    margin-bottom: 50px;
}
  .input-box {
    width: 100 %;
    height: 40px;
    background-color: var(--main - gray);
    border-radius: 8px;
    color: #999;
    margin-bottom: 8px;
    padding: 5px 16px;
    box-sizing: border - box;
    display: flex;
    align-items: center;
    justify-content: space - between;
    img {
        width: 18px;
        height: 18px;
        margin-right: 5px;
    }
    input {
        width: 100 %;
        height: 100 %;
        border: none;
        color: #737373;
        background-color: transparent;
        outline: none;
        font-size: 15px;
    }
    svg {
        margin-left: 5px;
        fill: #d2cdcd;
        width: 25px;
        height: 25px;
        cursor: pointer;
    }
}

  ul {
    margin: 15px 0;
    display: flex;
    gap: 10px;
    border-bottom: 1px solid var(--main - gray);
    height: 30px;
    color: #737373;
    li {
        cursor: pointer;
        padding: 0 4px;
    }
    .active {
        border-bottom: 2px solid;
        font-weight: 700;
        color: #000;
    }
}
  .not-have-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 120px 0;
    img {
    }
    strong {
        font-size: 18px;
        font-weight: 600;
        color: #323232;
        margin: 12px 8px;
    }
    span {
        color: #b5b5b5;
        font-size: 14px;
    }
    button {
        width: 180px;
        height: 25px;
        margin-top: 20px;
        background-color: var(--main - color - 800);
        outline: none;
        border: none;
        border-radius: 8px;
        color: #fff;
        font-size: 16px;
        font-weight: 500;
        padding: 11px 20px;
        box-sizing: content - box;
        cursor: pointer;
        transition: all 0.3s;
      &:hover {
            background-color: var(--main - color);
        }
    }
}
`;
