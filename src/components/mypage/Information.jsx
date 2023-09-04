/* eslint-disable react/prop-types */

import * as S from 'src/pages/my/mentiMyLayout.style'

import Calendar from './Calendar';
import InformationHead from './InformationHead';
import FIxInformation from './menti/FIxInformation';


const Information = ({ informationtype, navtype, Menti }) => {
    //상태관리


    if (informationtype === navtype.point) {
        return (
            <>
                <S.InformationContainer>
                    <S.DivFlexColumn>
                        <S.InformationBox>
                            <InformationHead text={navtype.point} />
                        </S.InformationBox>
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

                        <FIxInformation Menti={Menti} />
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
                        <Calendar></Calendar>
                    </S.DivFlexColumn>
                </S.InformationContainer>
            </>
        );
    }


    if (informationtype === navtype.shoppingcart) {
        return (
            <>
                <S.InformationContainer>
                    <S.DivFlexColumn>
                        <S.InformationBox>
                            <InformationHead text={navtype.shoppingcart} />
                        </S.InformationBox>
                        장바구니
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