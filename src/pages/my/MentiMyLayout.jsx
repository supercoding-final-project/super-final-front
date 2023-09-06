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
      "09": {
        1: ["hajinsoo", "MIKU", "아이디가존나길때는어떻해요?", "아이디가존나길때는어떻해요?"],
        2: [],
        3: [],
        4: [],
        5: ["hajinsoo", "MIKU"],
        6: [],
        7: [],
        8: [],
        9: [],
        10: ["hajinsoo", "MIKU"],
        11: [],
        12: [],
        13: [],
        14: ["abc123"],
        15: [],
        16: [],
        17: [],
        18: ["abc123"],
        19: ["abc123"],
        20: [],
        21: [],
        22: [],
        23: [],
        24: [],
        25: [],
        26: [],
        27: [],
        28: [],
        29: [],
        30: [],
        31: [],
      },
      "08": {
        1: ["hajinsoo", "MIKU"],
        2: [],
        3: [],
        4: [],
        5: ["hajinsoo", "MIKU"],
        6: [],
        7: [],
        8: [],
        9: [],
        10: ["hajinsoo", "MIKU"],
        11: [],
        12: [],
        13: [],
        14: ["abc123"],
        15: [],
        16: [],
        17: [],
        18: ["abc123"],
        19: ["abc123"],
        20: [],
        21: [],
        22: [],
        23: [],
        24: [],
        25: [],
        26: [],
        27: [],
        28: [],
        29: [],
        30: [],
        31: [],
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
