import { useState } from 'react';
import { Icon } from 'src/components/common/icon/Icon';

import * as S from './Detail.style';

const PostApplicationModal = () => {
  const mockData = [
    '00~01',
    '01~02',
    '02~03',
    '03~04',
    '04~05',
    '05~06',
    '06~07',
    '07~08',
    '08~09',
    '09~10',
    '10~11',
    '11~12',
  ];

  const [stepState, setStepState] = useState('신청하기');
  const [timeState, setTimeState] = useState('AM');

  const chageStepState = (e) => {
    setStepState(e.currentTarget.textContent);
  };

  const changeTimeState = (e) => {
    setTimeState(e.currentTarget.textContent);
  };

  const week = ['월', '화', '수', '목', '금', '토', '일'];

  // const

  const [current, setCurrent] = useState(new Date());
  const [dateValue, setDateValue] = useState(
    `${new Date().getFullYear()}년 ${new Date().getMonth() + 1}월 ${new Date().getDate()}일`,
  );

  const changeMonthHandler = (state) => {
    if (state === 'prev') {
      setCurrent(new Date(current.getFullYear(), current.getMonth() - 1));
    } else {
      setCurrent(new Date(current.getFullYear(), current.getMonth() + 1));
    }
  };

  const createCalendarDay = () => {
    const year = current.getFullYear();
    const month = current.getMonth() + 1;
    const totalDayLength = new Date(year, month, 0).getDate();
    const startDay = new Date(year, month - 1, 1).getDay();
    const prevMonthLastDay = new Date(year, month - 1, 0).getDate();

    // 분기 처리 위해
    const todayYear = new Date().getFullYear();
    const todayMonth = new Date().getMonth() + 1;
    const todayDate = new Date().getDate();
    const dateArray = [];

    // 시작하는 요일 이전에 이전 달의 날짜 추가
    for (let i = startDay - 1; i >= 0; i--) {
      dateArray.push({ day: prevMonthLastDay - i, isCurrentInday: false });
    }
    for (let i = 1; i <= totalDayLength; i++) {
      const isToday = year === todayYear && month === todayMonth && i === todayDate;
      dateArray.push({ day: i, isCurrentInday: true, isToday });
    }

    // 7일씩 그룹화
    const groupedDates = [];
    for (let i = 0; i < dateArray.length; i += 7) {
      groupedDates.push(dateArray.slice(i, i + 7));
    }

    // 다음 달의 날짜를 추가하여 7일 꽉 채우기
    if (groupedDates[groupedDates.length - 1].length < 7) {
      const nextDays = 7 - groupedDates[groupedDates.length - 1].length;
      console.log(todayDate);
      for (let i = 1; i <= nextDays; i++) {
        groupedDates[groupedDates.length - 1].push({
          day: i,
          isToday:
            year === current.getFullYear() && month === current.getMonth() + 1 && i === todayDate,
          isCurrentInday: false,
        });
      }
    }

    const classFilter = (date) => {
      if (!date.isCurrentInday) {
        return 'prev';
      } else if (date.isToday) {
        return 'today';
      } else if (date) {
        // 조건문 수정 필요
        console.log('체크 한 것일 때');
      } else {
        return '';
      }
    };

    return groupedDates.map((group, index) => (
      <ul key={index} className="row">
        {group.map((date, idx) => (
          <li className={classFilter(date)} key={idx}>
            {date.day}
          </li>
        ))}
      </ul>
    ));
  };

  const [selectedTimes, setSelectedTimes] = useState([]);
  const handleTimeItemClick = (time) => {
    // 이미 선택된 항목인지 확인
    const isSelected = selectedTimes.includes(time);
    if (isSelected) {
      // 이미 선택된 경우, 해당 항목을 제거
      setSelectedTimes(selectedTimes.filter((item) => item !== time));
    } else {
      setSelectedTimes([...selectedTimes, time]);
    }
  };
  console.log(selectedTimes);

  return (
    <S.PostApplicationModal>
      <div className="tab-box">
        <div className={stepState === '신청하기' ? 'active' : null} onClick={chageStepState}>
          신청하기
        </div>
        <div className={stepState === '정보확인&결제' ? 'active' : null} onClick={chageStepState}>
          정보확인&결제
        </div>
      </div>
      {stepState === '신청하기' ? (
        <>
          <div className="title">날짜 및 시간 선택</div>
          <div className="chose-date-box">
            <div className="option-box">
              <div className="option-box-left">
                <Icon name="Left" onClick={() => changeMonthHandler('prev')} />
                <Icon name="Right" onClick={() => changeMonthHandler('next')} />
                <p>{current.getMonth() + 1}월</p>
              </div>
              <div className="option-box-right">
                <div className="clicked">선택한 날짜 : {dateValue}</div>
              </div>
            </div>
            <div className="date-container">
              <div className="calendar">
                <ul className="week">
                  {week.map((day, index) => (
                    <li key={index}>{day}</li>
                  ))}
                </ul>
                <ul className="day">{createCalendarDay()}</ul>
              </div>
              <div className="line" />
              <div className="time">
                <div className="time-tab">
                  <div className={timeState === 'AM' ? 'active' : null} onClick={changeTimeState}>
                    AM
                  </div>
                  <div className={timeState === 'PM' ? 'active' : null} onClick={changeTimeState}>
                    PM
                  </div>
                </div>
                <ul>
                  {mockData.map((time, index) => (
                    <li
                      key={index}
                      className={selectedTimes.includes(time) ? 'chose' : ''}
                      onClick={() => handleTimeItemClick(time)}
                    >
                      {time}
                    </li>
                    // <li className="chose" key={index}>{time}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p>정보확인</p>
      )}
    </S.PostApplicationModal>
  );
};

export default PostApplicationModal;
