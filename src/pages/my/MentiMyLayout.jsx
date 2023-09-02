import { useState } from "react";
import Information from "src/components/mypage/Information";
import LeftNavbar from "src/components/mypage/LeftNavbar";

const MentiMyLayout = () => {
  const [type, setType] = useState("내 정보")

  const navtype = {
    info: "내 정보",
    reservation: "예약확인",
    point: "포인트충전"
  }



  const navItemHandler = (navtype) => {
    setType(navtype)
  }

  return (
    <>
      <LeftNavbar navItemHandler={navItemHandler} navtype={navtype} />
      <Information informationtype={type} navtype={navtype}></Information>
    </>
  )
};

export default MentiMyLayout;
