import axios from 'axios';
import { useEffect, useState } from 'react';
import LeftNavbar from 'src/components/mypage/LeftNavbar';
import MentoInformation from 'src/components/mypage/mento/MentoInformation';
import * as S from 'src/pages/my/mentoMyLayout.style';


const accesstoken = getCookie('access_token');

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}
const MentoMyLayout = () => {
  const [type, setType] = useState('예약 시간 설정');
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
      const response = await axios.get('https://codevelop.store/api/v1/users/info', {
        headers: {
          Authorization: accesstoken
        },
      })
      const data = response.data.data
      setUser(data)
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
