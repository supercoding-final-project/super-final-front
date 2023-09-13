import React, { useState } from 'react';

import * as S from './Reservation.style';

const Reservation = () => {
    const reservationTime = [
        '0000', '0100', '0200', '0300', '0400', '0500', '0600', '0700', '0800', '0900', '1000', '1100', '1200', '1300', '1400', '1500', '1600', '1700', '1800', '1900', '2000', '2100', '2200', '2300',
    ];

    const [selectedDay, setSelectedDay] = useState('평일');
    const [selectedTimes, setSelectedTimes] = useState([]);

    const handleDayClick = (day) => {
        setSelectedDay(day);
        setSelectedTimes([]); // 요일이 변경되면 선택한 시간 초기화
    };

    const handleTimeClick = (time) => {
        // 이미 선택한 시간인지 확인
        if (selectedTimes.includes(time)) {
            setSelectedTimes(selectedTimes.filter((t) => t !== time)); // 시간이 이미 선택되어 있으면 선택 취소
        } else {
            setSelectedTimes([...selectedTimes, time]); // 시간이 선택되어 있지 않으면 추가
        }
    };

    const handleReservation = () => {
        // 선택한 요일과 시간을 출력
        console.log(`요일: ${selectedDay}, 시간: ${selectedTimes.join(', ')} 예약됨`);
    }

    return (
        <>
            <div>달력이 보여짐</div>
            <S.DivFlex>
                <S.Weekdays $isSelected={selectedDay === '평일'} onClick={() => handleDayClick('평일')}>평일</S.Weekdays>
                <S.Weekend $isSelected={selectedDay === '주말'} onClick={() => handleDayClick('주말')}>주말</S.Weekend>
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
                            $isSelected={selectedTimes.includes(time)} // 시간이 선택되어 있는지 확인
                            onClick={() => handleTimeClick(time)}
                        >
                            {time}
                        </S.ReservationTime>
                    ))}
                </S.DivGrid>
            </div >

            <button onClick={handleReservation}>시간예약</button>
        </>
    );
};

export default Reservation;
