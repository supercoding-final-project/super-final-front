import { useState } from "react";

import LeftNavbar from "@/components/mypage/LeftNavbar";
import MentoInformation from "@/components/mypage/mento/MentoInformation";
import * as S from '@/pages/my/mentoMyLayout.style'
const MentoMyLayout = () => {
  const [type, setType] = useState("예약 시간 설정")

  const navtype = {
    borad: "등록한 포스트",
    info: "멘토 정보 수정",
    reservation: "예약 시간 설정",
    logout: "로그아웃"
  }


  const User = {
    name: "하진수",
    email: "jumosd@icloud.com",
    nickname: "하방방",
    point: 393939,
    incumbent: "개발자"

  }

  const navItemHandler = (navtype) => {
    setType(navtype)
  }

  return (
    <>
      <S.DisFlex>
        <LeftNavbar navItemHandler={navItemHandler} navtype={navtype} User={User} />
        <MentoInformation informationtype={type} navtype={navtype} User={User} ></MentoInformation>
      </S.DisFlex>
    </>
  )
};

export default MentoMyLayout;
