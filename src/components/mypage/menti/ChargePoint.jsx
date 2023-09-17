import { useRef, useState } from 'react';
import * as S from 'src/pages/my/mentiMyLayout.style';
const ChargePoint = () => {
  const [cash, setCash] = useState(0);
  const [vip, setVip] = useState(false);
  const [vvip, setVvip] = useState(false);

  const inputcash = useRef(0);

  const accesstoken =
    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjEwLCJhdXRob3JpdGllcyI6WyJNRU5URUUiXSwiaWF0IjoxNjk0ODM4NTEyLCJleHAiOjE2OTQ4NDIxMTJ9.JSfm8QSWUIg5C0PR7WYLCdBbcAR0LV8u7xxr7B-nkbs';
  const chargePointButton = async (inputpoint) => {
    const response = await fetch('https://codevelop.store/api/v1/users/paymoney', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: accesstoken,
      },
      body: JSON.stringify({
        chargeAmount: inputpoint,
      }),
    });
    const successData = await response.json();
    console.log(successData);
  };
  const BonusPointCalculrator = (event) => {
    let paymentamount = event.target.value;

    if (paymentamount < 0 && paymentamount == '') {
      setCash(0);
    }
    if (100000 <= paymentamount) {
      let cash = paymentamount * 1.1;
      setVvip(true);
      setCash(cash);
    } else if (50000 <= paymentamount) {
      let cash = paymentamount * 1.05;
      setVip(true);
      setCash(cash);
    } else {
      setVip(false);
      setVvip(false);
      setCash(paymentamount);
    }
  };

  return (
    <div>
      <S.ChargePointContainer>
        <S.DisFlexStartCenter>
          <S.ChargePointText>결제금액</S.ChargePointText>
          <S.ChargePointInput ref={inputcash} type="number" onChange={BonusPointCalculrator} />

          <S.ChargeButton onClick={() => chargePointButton(cash)}>충전하기</S.ChargeButton>
        </S.DisFlexStartCenter>
        <S.DisFlexStartCenter>
          <S.ChargePointText>충전예정</S.ChargePointText>

          {vvip ? (
            <S.Vip>{parseInt(cash)}</S.Vip>
          ) : vip ? (
            <S.VVip>{parseInt(cash)}</S.VVip>
          ) : (
            <S.ChargingScheduled>{parseInt(cash)}</S.ChargingScheduled>
          )}
        </S.DisFlexStartCenter>
      </S.ChargePointContainer>
    </div>
  );
};

export default ChargePoint;
