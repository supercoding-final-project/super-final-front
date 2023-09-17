import { useEffect, useState } from 'react';
import LeftNavbar from 'src/components/mypage/LeftNavbar';
import MentiInformation from 'src/components/mypage/menti/MentiInformation';
import * as S from 'src/pages/my/mentiMyLayout.style';

const accesstoken =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjEwLCJhdXRob3JpdGllcyI6WyJNRU5URUUiXSwiaWF0IjoxNjk0OTUzMDk2LCJleHAiOjE2OTQ5NTY2OTZ9.5z8Bh8_zBMDoESL5doPUlNfe_Bqx3BEoRR_dHLINFgA';
//포인트조회하기
const userpoint = async () => {
  try {
    const response = await fetch('https://codevelop.store/api/v1/users/paymoney', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: accesstoken,
      },
    });

    if (!response.ok) {
      throw new Error('데이터를 불러오지 못했습니다.');
    }

    const jsonData = await response.json();
    return jsonData.data.paymoney;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const MentiMyLayout = () => {
  const [type, setType] = useState('포인트 충전');
  const [paymoney, setPaymoney] = useState();

  //멘티페이지접속시 포인트조회함
  useEffect(() => {
    const fetchData = async () => {
      const userData = await userpoint();
      setPaymoney(userData);
    };

    fetchData();
  }, [paymoney]);

  const navtype = {
    point: '포인트 충전',
    info: '회원 정보 수정',
    reservation: '예약확인',
    transactionHistory: '거래내역',
    ordersHistory: '주문내역',
    logout: '로그아웃',
  };

  const User = {
    name: '하진수',
    email: 'jumosd@icloud.com',
    nickname: '하방방',
    point: paymoney,
    예약확인: {
      '09': {
        1: ['hajinsoo', 'MIKU', '아이디가존나길때는어떻해요?', '아이디가존나길때는어떻해요?'],
        2: [],
        3: [],
        4: [],
        5: ['hajinsoo', 'MIKU'],
        6: [],
        7: [],
        8: [],
        9: [],
        10: ['hajinsoo', 'MIKU'],
        11: [],
        12: [],
        13: [],
        14: ['abc123'],
        15: [],
        16: [],
        17: [],
        18: ['abc123'],
        19: ['abc123'],
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
    },
  };

  const navItemHandler = (navtype) => {
    setType(navtype);
  };

  return (
    <>
      <S.DisFlex>
        <LeftNavbar navItemHandler={navItemHandler} navtype={navtype} User={User} />
        <MentiInformation informationtype={type} navtype={navtype} User={User}></MentiInformation>
      </S.DisFlex>
    </>
  );
};

export default MentiMyLayout;
