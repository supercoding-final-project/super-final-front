/* eslint-disable react/prop-types */

import InformationHead from 'src/components/mypage/InformationHead';
import * as S from 'src/pages/my/mentoMyLayout.style';

import FixInformation from './FixInformation';
import Reservation from './Reservation';

const MentoInformation = ({ informationtype, navtype, User }) => {
  //상태관리

  if (informationtype === navtype.borad) {
    return (
      <>
        <S.InformationContainer>
          <S.DivFlexColumn>
            <S.InformationBox>
              <InformationHead text={navtype.borad} />
            </S.InformationBox>
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
