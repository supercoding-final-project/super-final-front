/* eslint-disable react/prop-types */

import * as S from 'src/pages/my/mentiMyLayout.style'

import Calendar from './Calendar';
import FIxInformation from './menti/FIxInformation';

const Information = ({ informationtype, navtype }) => {


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

    if (informationtype === navtype.time) {
        return (
            <>
                <S.CalendarContainer>
                    <Calendar></Calendar>

                </S.CalendarContainer >
            </>
        );
    }

    if (informationtype === navtype.reservation) {
        return (
            <>
                <S.InformationContainer>
                    예약확인
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