/* eslint-disable no-undef */
import { useEffect, useState } from 'react';

import { DivFlex as S_DivFlex } from '@/pages/my/mentiMyLayout.style';
import * as S from "./Calendar.style"



const daysInWeek = ['일', '월', '화', '수', '목', '금', '토'];

function Calendar({ Menti }) {


    //오늘날짜 상태만들기
    const [currentDate, setCurrentDate] = useState(new Date());
    //is모달오픈 상태만들기
    const [isOpenModal, setIsOpenModal] = useState(false)
    //멘토이름
    const [mentoName, setMentoName] = useState([])


    const ThisMonth = new Date().getMonth()
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
        if (currentDate.getMonth() === (ThisMonth - 2)) {
            return
        }
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1)
        )
    }
    //다음달로 가기 버튼
    const nextMonth = () => {
        if (currentDate.getMonth() === (ThisMonth + 2)) {
            return
        }
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1)
        )
    }

    // 모달창열기
    const openModalHandler = () => {
        setIsOpenModal(true)
    }
    // 모달창닫기
    const closeModalHandler = () => {
        setIsOpenModal(false)
    }


    //달력에 해당하는 유저의 정보를 넣는 프로그램 ㄱㄱ!***************************************************************************
    //달력에 해당하는 유저의 정보를 넣는 프로그램 ㄱㄱ!***************************************************************************
    //달력에 해당하는 유저의 정보를 넣는 프로그램 ㄱㄱ!***************************************************************************
    //달력에 해당하는 유저의 정보를 넣는 프로그램 ㄱㄱ!***************************************************************************
    //달력에 해당하는 유저의 정보를 넣는 프로그램 ㄱㄱ!***************************************************************************
    //달력에 해당하는 유저의 정보를 넣는 프로그램 ㄱㄱ!***************************************************************************
    //달력에 해당하는 유저의 정보를 넣는 프로그램 ㄱㄱ!***************************************************************************
    //달력에 해당하는 유저의 정보를 넣는 프로그램 ㄱㄱ!***************************************************************************

    //멘티가 예약신청한 월들을 표시한다
    let checkReservation = Menti.예약확인
    //화면에 선택한달
    let 선택달 = (currentDate.getMonth() + 1).toString().padStart(2, "0")
    //현재 화면에 선택한달들중에 있는 예약들이다
    let 선택달의예약들 = (checkReservation[선택달])
    //멘토님들을 체크한다 멘토님들은 키값이라 키빼서 다시 리스트로 만들어줌
    let 멘토들객체키 = Object.keys(선택달의예약들);
    let 멘토님들 = 멘토들객체키.map(item => item);

    //멘토님들을 순회하며 해당 멘토이름을 useState()로 업데이트한다
    useEffect(() => {
        for (let i = 0; i < 멘토님들.length; i++) {
            setMentoName(prev => [...prev, 멘토님들[i]])
        }

    }, [currentDate])

    //새로 만들 멘토예약일 객체 ==> 멘토이름: [날짜들]
    // ex) {홍길동: [1,3,15,20]}
    let 멘토예약일 = {};
    for (let i = 0; i < mentoName.length; i++) {
        let 멘토이름 = mentoName[i];
        let 멘토별예약일자 = 선택달의예약들[멘토이름];

        멘토별예약일자.forEach(item => {
            let newitem = item.split('-');
            let 예약일 = parseInt(newitem[2]).toString();
            if (!멘토예약일[멘토이름]) {
                멘토예약일[멘토이름] = [];
            }
            if (!멘토예약일[멘토이름].includes(예약일)) {
                멘토예약일[멘토이름].push(예약일);
            }
        });
    }





    return (
        <S.CalendarContainer >
            {isOpenModal && (
                <S.OutSideModal onClick={closeModalHandler}>
                    <S.ModalContent>
                        <S.InSideModalHead></S.InSideModalHead>
                        <S.InSideModalBody>
                            <S.DivFlex>
                                <S.ModalCellText>
                                    1*하진수 멘토님 예약
                                </S.ModalCellText>
                                <S.ModalCellText>
                                    2*하진수 멘토님 예약
                                </S.ModalCellText>
                                <S.ModalCellText>
                                    3*하진수 멘토님 신청
                                </S.ModalCellText>
                                <S.CellText>
                                    ...
                                </S.CellText>
                            </S.DivFlex>

                        </S.InSideModalBody>
                    </S.ModalContent>
                </S.OutSideModal>
            )
            }
            < S.Header >
                <S_DivFlex>
                    <S.year>{currentDate.toLocaleString('default', { year: '2-digit' })}</S.year>
                    <S.month>{currentDate.toLocaleString('default', { month: 'long' })}</S.month>
                </S_DivFlex>
                <S.Notification>
                    * 3달치 예약만을 볼수 있습니다.
                </S.Notification>
                <div></div>
                <div>

                    <button onClick={previousMonth}>&lt;</button>
                    <button onClick={nextMonth}>&gt;</button>
                </div>
            </S.Header >
            <S.DaysContainer>
                {daysInWeek.map((day, index) => (
                    <S.WeekCell key={day} $isSunday={index === 0} $isSaturday={index === 6} >{day}</S.WeekCell>
                ))}


                {calendarDays.map((day, index) => {
                    let strDay = String(day)
                    // 예약 정보가 있는지 확인
                    if (멘토예약일) {
                        // 해당 날짜에 예약 정보가 있는 멘토들의 이름을 가져오기
                        const 멘토들의예약 = Object.keys(멘토예약일).filter(멘토이름 => 멘토예약일[멘토이름].includes(strDay));
                        // console.log(멘토들의예약)
                        return (
                            <S.DayCell key={index} $empty={day === null} onClick={() => openModalHandler(day)}>
                                {day !== null ? (
                                    <>
                                        {day}
                                        {멘토들의예약.map((멘토이름, idx) => (
                                            <S.CellText key={idx}>
                                                {멘토이름}멘토 예약
                                            </S.CellText>
                                        ))}
                                    </>
                                ) : null}
                            </S.DayCell>
                        );
                        // 해당 날짜에 예약이 있는 경우 멘토 이름 표시
                    }
                    // 예약 정보가 없거나 예약되지 않은 경우 빈 칸 표시
                    return (
                        <S.DayCell key={index} $empty={day === null} onClick={() => openModalHandler(day)}>
                            {day !== null ? (
                                <>
                                    <S.CellText>
                                        빈칸임
                                    </S.CellText>
                                </>
                            ) : null}
                        </S.DayCell>
                    );
                })}

            </S.DaysContainer>
        </S.CalendarContainer >
    );
}

export default Calendar;


