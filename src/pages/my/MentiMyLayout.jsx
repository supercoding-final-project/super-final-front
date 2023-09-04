import { useState } from "react";
import Information from "src/components/mypage/Information";
import LeftNavbar from "src/components/mypage/LeftNavbar";

import * as S from './mentiMyLayout.style'
const MentiMyLayout = () => {
  const [type, setType] = useState("포인트 충전")

  const navtype = {
    point: "포인트 충전",
    info: "회원 정보 수정",
    reservation: "예약확인",
    shoppingcart: "장바구니",
    logout: "로그아웃"
  }

  const Menti = {
    name: "하진수",
    email: "jumosd@icloud.com",
    nickname: "하방방",
    point: 393939,
    예약확인: {
      "08": {
        하진수: [
          "20203-08-01-07",
          "20203-08-12-07",
          "20203-08-23-12",
          "20203-08-26-15",
        ],
        홍종민: [
          "20203-08-02-14",
          "20203-08-12-20",
        ],
      },
      "09": {
        김태영: [
          "20203-09-01-07",
          "20203-09-02-07",
          "20203-09-03-07",
          "20203-09-04-07",
        ],
        이서영: [
          "20203-09-02-14",
          "20203-09-02-14",
        ],
      }
    }
  }

  const navItemHandler = (navtype) => {
    setType(navtype)
  }

  return (
    <>
      <S.DisFlex>
        <LeftNavbar navItemHandler={navItemHandler} navtype={navtype} menti={Menti} />
        <Information informationtype={type} navtype={navtype} Menti={Menti}></Information>
      </S.DisFlex>
    </>
  )
};

export default MentiMyLayout;
