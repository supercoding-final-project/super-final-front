import { useState } from "react";
import LeftNavbar from "src/components/mypage/LeftNavbar";
import MentoInformation from "src/components/mypage/mento/MentoInformation";
import * as S from 'src/pages/my/mentoMyLayout.style'
const MentoMyLayout = () => {
  const [type, setType] = useState("주문내역")

  const navtype = {
    borad: "등록한 포스트",
    info: "멘토 정보 수정",
    reservation: "예약 시간 설정",
    transactionHistory: "거래내역",
    ordersHistory: "주문내역",
    logout: "로그아웃",

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
