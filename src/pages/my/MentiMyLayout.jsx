import { useState } from "react";
import Information from "src/components/mypage/Information";
import LeftNavbar from "src/components/mypage/LeftNavbar";

import * as S from './mentiMyLayout.style'
const MentiMyLayout = () => {
  const [type, setType] = useState("예약확인")

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
          "2023-08-01-07",
          "2023-08-12-07",
          "2023-08-23-12",
          "2023-08-26-15",
        ],
        홍종민: [
          "2023-08-02-14",
          "2023-08-12-20",
        ],
      },
      "09": {
        김태영: [
          "2023-09-01-07",
          "2023-09-02-07",
          "2023-09-23-07",
          "2023-09-04-07",
        ],
        이서영: [
          "2023-09-01-14",
          "2023-09-02-14",
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
