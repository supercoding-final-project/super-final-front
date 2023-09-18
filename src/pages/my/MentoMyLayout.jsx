import { useEffect, useState } from 'react';
import { useHttp } from 'src/api/useHttp';
import LeftNavbar from 'src/components/mypage/LeftNavbar';
import MentoInformation from 'src/components/mypage/mento/MentoInformation';
import * as S from 'src/pages/my/mentoMyLayout.style';
const MentoMyLayout = () => {
  const [type, setType] = useState('주문내역');

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
      const response = await fetch('https://codevelop.store/api/v1mentors/info', {
        headers: {
          'Content-Type': 'application/json',
          Authorization:
            'Bearer N_-0yXF7ny03a60zLMmD9pY-MYoWp-94N-6B_QfZjSu407MeAMsbVPOOXCpWmWWH4DwNLgoqJVAAAAGKmtL_cQ',
        },
      });
      const jsonData = await response.json();
      console.log(jsonData);
    }

    logJSONData();
  }, []);

  // 'Bearer 0BZOQe1Mil2htMYodsj66YZgR5QOScQ5EqLtHaU9TdiwmJlCq7xxeEr_C9a8DHV418bT4gorDKgAAAGKmrUQng',

  const User = {
    name: '하진수',
    email: 'jumosd@icloud.com',
    nickname: '하방방',
    point: 393939,
    incumbent: '개발자',
  };

  const navItemHandler = (navtype) => {
    setType(navtype);
  };

  return (
    <>
      <S.DisFlex>
        <LeftNavbar navItemHandler={navItemHandler} navtype={navtype} User={User} />
        <MentoInformation informationtype={type} navtype={navtype} User={User}></MentoInformation>
      </S.DisFlex>
    </>
  );
};

export default MentoMyLayout;
