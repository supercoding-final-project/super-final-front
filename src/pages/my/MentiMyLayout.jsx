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
    point: 393939
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
