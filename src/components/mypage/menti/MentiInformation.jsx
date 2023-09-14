/* eslint-disable react/prop-types */

import Calendar from 'src/components/mypage/Calendar';
import InformationHead from 'src/components/mypage/InformationHead';
import * as S from 'src/pages/my/mentiMyLayout.style';

import ChargePoint from './ChargePoint';
import FixInformation from './FixInformation';

const Information = ({ informationtype, navtype, User }) => {
  //상태관리

  if (informationtype === navtype.point) {
    return (
      <>
        <S.InformationContainer>
          <S.DivFlexColumn>
            <S.InformationBox>
              <InformationHead text={navtype.point} />
            </S.InformationBox>
            <ChargePoint />
          </S.DivFlexColumn>
        </S.InformationContainer>
      </>
    );
  }

  //정보를 수정하는공간임 뭘고칠지몰라서 일단 반복할수있게 해둠
  if (informationtype === navtype.info) {
    return (
      <>
        <S.InformationContainer>
          <S.DivFlexColumn>
            <S.InformationBox>
              <InformationHead text={navtype.info} />
            </S.InformationBox>
            <FixInformation User={User} />
          </S.DivFlexColumn>
        </S.InformationContainer>
      </>
    );
  }

  //캘린더로 갈 정보들은 회원이 매칭된?예약된? 정보임
  /////// 홍길동 회원의 예약
  /////// 일자: "2023-05-10"
  /////// 멘토: "홍길동"
  /////// 시간: "몇시~몇시"
  if (informationtype === navtype.reservation) {
    return (
      <>
        <S.InformationContainer>
          <S.DivFlexColumn>
            <S.InformationBox>
              <InformationHead text={navtype.reservation} />
            </S.InformationBox>
            <Calendar User={User}></Calendar>
          </S.DivFlexColumn>
        </S.InformationContainer>
      </>
    );
  }

  if (informationtype === navtype.transactionHistory) {
    return (
      <>
        <S.InformationContainer>
          <S.DivFlexColumn>
            <S.InformationBox>
              <InformationHead text={navtype.transactionHistory} />
            </S.InformationBox>
            거래내역
          </S.DivFlexColumn>
        </S.InformationContainer>
      </>
    );
  }
  if (informationtype === navtype.ordersHistory) {
    return (
      <>
        <S.InformationContainer>
          <S.DivFlexColumn>
            <S.InformationBox>
              <InformationHead text={navtype.ordersHistory} />
            </S.InformationBox>
            주문내역
          </S.DivFlexColumn>
        </S.InformationContainer>
      </>
    );
  }
  if (informationtype === navtype.logout) {
    return (
      <>
        <S.InformationContainer>
          <S.DivFlexColumn>
            <S.InformationBox>
              <InformationHead text={navtype.logout} />
            </S.InformationBox>
            로그아웃
          </S.DivFlexColumn>
        </S.InformationContainer>
      </>
    );
  }
};

export default Information;
