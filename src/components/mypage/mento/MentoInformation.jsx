/* eslint-disable react/prop-types */

import InformationHead from 'src/components/mypage/InformationHead';
import * as S from 'src/pages/my/mentoMyLayout.style';

import FixInformation from './FixInformation';
import MentoordersHistory from './MentoOrdersHistory';
import MentoTransactionHistory from './MentoTransactionHistory';
import PostBorder from './PostBorder';
import Reservation from './Reservation';

const MentoInformation = ({ informationtype, navtype, User, accesstoken }) => {
  //상태관리

  if (informationtype === navtype.borad) {
    return (
      <>
        <S.InformationContainer>
          <S.DivFlexColumn>
            <S.InformationBox>
              <InformationHead text={navtype.borad} />
            </S.InformationBox>
            <PostBorder User={User} accesstoken={accesstoken}></PostBorder>
          </S.DivFlexColumn>
        </S.InformationContainer>
      </>
    );
  }
  if (informationtype === navtype.info) {
    return (
      <>
        <S.InformationContainer>
          <S.DivFlexColumn>
            <S.InformationBox>
              <InformationHead text={navtype.info} />
            </S.InformationBox>
            <FixInformation User={User}></FixInformation>
          </S.DivFlexColumn>
        </S.InformationContainer>
      </>
    );
  }
  if (informationtype === navtype.reviews) {
    return (
      <>
        <S.InformationContainer>
          <S.DivFlexColumn>
            <S.InformationBox>
              <InformationHead text={navtype.reviews} />
            </S.InformationBox>
            {/* 여기다가 리뷰컴포넌트를 넣으면 됩니다 !! */}
            {/* 여기다가 리뷰컴포넌트를 넣으면 됩니다 !! */}
            {/* 여기다가 리뷰컴포넌트를 넣으면 됩니다 !! */}
          </S.DivFlexColumn>
        </S.InformationContainer>
      </>
    );
  }
  if (informationtype === navtype.reservation) {
    return (
      <>
        <S.InformationContainer>
          <S.DivFlexColumn>
            <S.InformationBox>
              <InformationHead text={navtype.reservation} />
            </S.InformationBox>
            <Reservation></Reservation>
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
            <MentoTransactionHistory></MentoTransactionHistory>
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
            <MentoordersHistory></MentoordersHistory>
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
          </S.DivFlexColumn>
        </S.InformationContainer>
      </>
    );
  }
};

export default MentoInformation;
