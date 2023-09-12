/* eslint-disable no-undef */
import { useState } from 'react';

import { DivFlex as S_DivFlex } from 'src/pages/my/mentiMyLayout.style';
import * as S from './Calendar.style';
import './Calendar.css';

const daysInWeek = ['일', '월', '화', '수', '목', '금', '토'];

function Calendar() {
  //오늘날짜 상태만들기
  const [currentDate, setCurrentDate] = useState(new Date());
  //is모달오픈 상태만들기
  const [isOpenModal, setIsOpenModal] = useState(false);
  const ThisMonth = new Date().getMonth();
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
  //이전달로 가기 버튼
  const previousMonth = () => {
    //3달만 볼수있게함
    if (currentDate.getMonth() === ThisMonth - 2) {
      return;
    }
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };
  //다음달로 가기 버튼
  const nextMonth = () => {
    if (currentDate.getMonth() === ThisMonth + 2) {
      return;
    }
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  // 모달창열기
  const openModalHandler = () => {
    setIsOpenModal(true);
  };
  // 모달창닫기
  const closeModalHandler = () => {
    setIsOpenModal(false);
  };

  return (
    <S.CalendarContainer>
      {isOpenModal && (
        <S.OutSideModal onClick={closeModalHandler}>
          <S.ModaContent>
            <S.InSideModalHead></S.InSideModalHead>
            <S.InSideModalBody></S.InSideModalBody>
          </S.ModaContent>
        </S.OutSideModal>
      )}
      <S.Header>
        <S_DivFlex>
          <S.year>{currentDate.toLocaleString('default', { year: '2-digit' })}</S.year>
          <S.month>{currentDate.toLocaleString('default', { month: 'long' })}</S.month>
        </S_DivFlex>
        <S.Notification>* 3달치 예약만을 볼수 있습니다.</S.Notification>
        <div></div>
        <div>
          <button onClick={previousMonth}>&lt;</button>
          <button onClick={nextMonth}>&gt;</button>
        </div>
      </S.Header>
      <S.DaysContainer>
        {daysInWeek.map((day, index) => (
          <S.WeekCell key={day} isSunday={index === 0} isSaturday={index === 6}>
            {day}
          </S.WeekCell>
        ))}
        {calendarDays.map((day, index) => (
          <S.DayCell key={index} empty={day === null} onClick={() => openModalHandler(day)}>
            {day}
            {day !== null ? (
              <>
                <S.CellText>1*하진수 멘토님 예약</S.CellText>
                <S.CellText>2*하진수 멘토님 예약</S.CellText>
                <S.CellText>3*하진수 멘토님 예약</S.CellText>

                <S.CellText>...</S.CellText>
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
