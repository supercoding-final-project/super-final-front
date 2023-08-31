import { useState } from "react";
import Information from "src/components/mypage/Information";
import LeftNavbar from "src/components/mypage/LeftNavbar";

const MentiMyLayout = () => {
  const [type, setType] = useState("정보수정")

  const navtype = {
    info: "정보수정",
    time: "시간수정",
    reservation: "예약확인",
    point: "포인트충전"
  }

  const navItemHandler = (data) => {
    setType(data)
  }

  return (
    <>
      <LeftNavbar navItemHandler={navItemHandler} navtype={navtype} />
      <Information informationtype={type} navtype={navtype}></Information>
    </>
  )
};

export default MentiMyLayout;
