/* eslint-disable no-undef */
import { useState } from 'react';

import { DivFlex as S_DivFlex } from '@/pages/my/mentiMyLayout.style';
import * as S from "./Calendar.style"
import './Calendar.css';

const daysInWeek = ['일', '월', '화', '수', '목', '금', '토'];

function Calendar() {
    const [currentDate, setCurrentDate] = useState(new Date());
    //현재 월의 첫번째날
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);

    //그 달의 날짜수 (마지막날을 체크함)
    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

    //첫주의 시작요일
    const startingDayOfWeek = firstDayOfMonth.getDay();
    //날짜 배열 생성
    const calendarDays = [];

    for (let i = 0; i < startingDayOfWeek; i++) {
        calendarDays.push(null);
    }

    for (let i = 1; i <= daysInMonth; i++) {
        calendarDays.push(i);
    }


    return (
        <S.CalendarContainer>
            <S.Header>
                <S_DivFlex>
                    <S.year>{currentDate.toLocaleString('default', { year: '2-digit' })}</S.year>
                    <S.month>{currentDate.toLocaleString('default', { month: 'long' })}</S.month>
                </S_DivFlex>
                <div>
                    <button onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))}>&lt;</button>
                    <button onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))}>&gt;</button>
                </div>
            </S.Header>
            <S.DaysContainer>
                {daysInWeek.map((day, index) => (
                    <S.WeekCell key={day} isSunday={index === 0} isSaturday={index === 6} >{day}</S.WeekCell>
                ))}
                {calendarDays.map((day, index) => (
                    <S.DayCell key={index} empty={day === null}>{day}
                        {day !== null ? (
                            <>
                                <S.CellText>
                                    *하진수 멘토님 예약
                                </S.CellText>
                                <S.CellText>
                                    *하진수 멘토님 예약
                                </S.CellText>
                                <S.CellText>
                                    *하진수 멘토님 예약
                                </S.CellText>
                            </>
                        ) : null}
                    </S.DayCell>
                ))}
                {/* {calendarDays.map((day, index) => (
                    <S.DayCell key={index} empty={day === null}>{day}
                        {day !== null && day === 선택날 ? (
                            <S.CellText>
                                *하진수 멘토님 예약
                            </S.CellText>
                        ) : null}
                    </S.DayCell>
                ))} */}
            </S.DaysContainer>
        </S.CalendarContainer>
    );
}

export default Calendar;


