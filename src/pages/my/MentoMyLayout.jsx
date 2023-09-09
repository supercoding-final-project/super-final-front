import { useState } from "react";

import LeftNavbar from "@/components/mypage/LeftNavbar";
import Information from "@/components/mypage/mento/MentoInformation";
import * as S from './mentiMyLayout.style'
const MentoMyLayout = () => {
  const [type, setType] = useState("등록한 포스트")

  const navtype = {
    borad: "등록한 포스트",
    info: "멘토 정보 수정",
    reservation: "예약 시간 설정",
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

export default MentoMyLayout;
