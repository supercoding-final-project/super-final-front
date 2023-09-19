import { useEffect, useState } from 'react';
import { useHttp } from 'src/api/useHttp';
import LeftNavbar from 'src/components/mypage/LeftNavbar';
import MentoInformation from 'src/components/mypage/mento/MentoInformation';
import * as S from 'src/pages/my/mentoMyLayout.style';


const accesstoken =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjEwMDQsImF1dGhvcml0aWVzIjpbIk1FTlRPUiJdLCJpYXQiOjE2OTUwNTExMjQsImV4cCI6MTcyNjU4NzEyNH0.sCThkhy4Xe8YGCa0jdho1TteZ-BtLMl_iQHQSAeLn_w';
const MentoMyLayout = () => {
  const [type, setType] = useState('주문내역');
  const [user, setUser] = useState()
  const navtype = {
    borad: "등록한 포스트",
    info: "멘토 정보 수정",
    reservation: "예약 시간 설정",
    reviews: "리뷰관리",
    transactionHistory: "거래내역",
    ordersHistory: "주문내역",
    logout: "로그아웃",
  }

  useEffect(() => {
    async function logJSONData() {
      const response = await fetch('https://codevelop.store/api/v1/mentors/info', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: accesstoken
        },
      });
      const jsonData = await response.json();
      setUser(jsonData.data);
    }
    logJSONData();

  }, []);

  const User = {
    ...user,
  };

  const navItemHandler = (navtype) => {
    setType(navtype);
  };

  return (
    <>
      <S.DisFlex>
        <LeftNavbar navItemHandler={navItemHandler} navtype={navtype} User={User} />
        <MentoInformation informationtype={type} navtype={navtype} User={User} accesstoken={accesstoken}></MentoInformation>
      </S.DisFlex>
    </>
  );
};

export default MentoMyLayout;
