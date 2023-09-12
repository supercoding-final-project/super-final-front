import { useState } from 'react'
import * as S from "src/components/mypage/mento/Reservation.style"

const Reservation = () => {
    const reservationTime = [
        "0000", "0100", "0200", "0300", "0400", "0500", "0600", "0700", "0800", "0900", "1000", "1100", "1200", "1300", "1400", "1500", "1600", "1700", "1800", "1900", "2000", "2100", "2200", "2300",
    ]
    const [selectedTimes, setSelectedTimes] = useState([]);
    //평일선택
    const [selectWeekDay, setSelectWeekDay] = useState(false);
    //주말선택
    const [selectWeekendDay, setSelectWeekendDay] = useState(false);
    //요일선택

    const selectItem = (index) => {
        setSelectedTimes([reservationTime[index]])
    }

    const mouseMove = (index) => {
        if (selectedTimes.length) {
            console.log(reservationTime[index])

            setSelectedTimes(prev => [...prev, reservationTime[index]]
            )
        }

    }

    const mouseUp = () => {
        setSelectedTimes([])
    }


    const selectWeekDayHandler = () => {
        setSelectWeekDay(prev => !prev)
    }
    const setSelectWeekendDayHandler = () => {
        setSelectWeekendDay(prev => !prev)
    }
    return (
        <>


            <div>달력이 보여짐</div>
            <S.DivFlex>
                <S.Weekdays onClick={selectWeekDayHandler}>평일</S.Weekdays>
                <S.Weekend onClick={setSelectWeekendDayHandler}>주말</S.Weekend>
            </S.DivFlex>
            <S.DivGrid7>
                <S.Sunday selectWeekendDay={selectWeekendDay}>일</S.Sunday>
                <S.Weekdays selectWeekDay={selectWeekDay}>월</S.Weekdays>
                <S.Weekdays selectWeekDay={selectWeekDay}>화</S.Weekdays>
                <S.Weekdays selectWeekDay={selectWeekDay}>수</S.Weekdays>
                <S.Weekdays selectWeekDay={selectWeekDay}>목</S.Weekdays>
                <S.Weekdays selectWeekDay={selectWeekDay}>금</S.Weekdays>
                <S.Saturday selectWeekendDay={selectWeekendDay}>토</S.Saturday>
            </S.DivGrid7>

            <S.DivGrid>
                {reservationTime.map((item, index) => <S.ReservationTime key={index}
                    onMouseDown={() => selectItem(index)}
                    onMouseMove={() => mouseMove(index)}
                    onMouseUp={() => mouseUp(index)}


                >{item}</S.ReservationTime>)}
            </S.DivGrid >


        </>
    );
};

export default Reservation;