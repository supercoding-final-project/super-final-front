/* eslint-disable react/prop-types */

import * as S from 'src/pages/my/mentiMyLayout.style'

import Calendar from './Calendar';
import FIxInformation from './menti/FIxInformation';
import LoadingSpinner from '../common/LoadingSpinner';

const Information = ({ informationtype, navtype }) => {
    //상태관리

    //정보를 수정하는공간임 뭘고칠지몰라서 일단 반복할수있게 해둠
    if (informationtype === navtype.info) {
        return (
            <>
                <S.InformationContainer>
                    <div>
                        <FIxInformation />
                    </div>

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
                    <LoadingSpinner size="50" ></LoadingSpinner>
                    <Calendar></Calendar>
                </S.InformationContainer>
            </>
        );
    }

    if (informationtype === navtype.point) {
        return (
            <>
                <S.InformationContainer>
                    포인트충전
                </S.InformationContainer>
            </>
        );
    }

};

export default Information;