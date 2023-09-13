import { useState } from 'react';

import * as S from './Reservation.style';

const Reservation = () => {
    const reservationTime = [
        '0000', '0100', '0200', '0300', '0400', '0500', '0600', '0700', '0800', '0900', '1000', '1100', '1200', '1300', '1400', '1500', '1600', '1700', '1800', '1900', '2000', '2100', '2200', '2300',
    ];

    // 요일별 선택한 시간 배열
    const [selectedTimes, setSelectedTimes] = useState({
        일: [],
        월: [],
        화: [],
        수: [],
        목: [],
        금: [],
        토: [],
    });

    // 선택한 요일 상태
    const [selectedDay, setSelectedDay] = useState("일");

    // 요일 클릭 핸들러
    const handleDayClick = (day) => {
        setSelectedDay(day);
    };

    // 시간 클릭 핸들러
    const handleTimeClick = (time) => {
        setSelectedTimes((prev) => ({
            ...prev,
            [selectedDay]: prev[selectedDay].includes(time)
                ? prev[selectedDay].filter((t) => t !== time)
                : [...prev[selectedDay], time],
        }));
    };

    // 예약 버튼 클릭 핸들러
    const handleReservation = () => {

        console.log(`요일: ${selectedDay}, 시간: ${selectedTimes[selectedDay].join(', ')} 예약됨`);
    };

    console.log(selectedTimes)
    return (
        <>
            <div>달력이 보여짐</div>
            <S.DivFlex>
                <S.Weekdays>평일</S.Weekdays>
                <S.Weekend>주말</S.Weekend>
            </S.DivFlex>
            <S.DivGrid7>
                <S.Sunday $selectWeekendDay={selectedDay === '일'} onClick={() => handleDayClick('일')}>일</S.Sunday>
                <S.Weekdays $selectWeekendDay={selectedDay === '월'} onClick={() => handleDayClick('월')}>월</S.Weekdays>
                <S.Weekdays $selectWeekendDay={selectedDay === '화'} onClick={() => handleDayClick('화')}>화</S.Weekdays>
                <S.Weekdays $selectWeekendDay={selectedDay === '수'} onClick={() => handleDayClick('수')}>수</S.Weekdays>
                <S.Weekdays $selectWeekendDay={selectedDay === '목'} onClick={() => handleDayClick('목')}>목</S.Weekdays>
                <S.Weekdays $selectWeekendDay={selectedDay === '금'} onClick={() => handleDayClick('금')}>금</S.Weekdays>
                <S.Saturday $selectWeekendDay={selectedDay === '토'} onClick={() => handleDayClick('토')}>토</S.Saturday>
            </S.DivGrid7>

            <div>
                <S.DivGrid>
                    {reservationTime.map((time, index) => (
                        <S.ReservationTime
                            key={index}
                            $isSelected={selectedTimes[selectedDay].includes(time)}
                            onClick={() => handleTimeClick(time)}
                        >
                            {time}
                        </S.ReservationTime>
                    ))}
                </S.DivGrid>
            </div>

            <button onClick={handleReservation}>시간예약</button>
        </>
    );
};

export default Reservation;
