import { useState } from 'react';
import { Icon } from 'src/components/common/icon/Icon';

import ButtonBox from './ButtonBox';

const Application = ({ current, setCurrent }) => {
  const week = ['월', '화', '수', '목', '금', '토', '일'];

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

  return (
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
              ))}
            </ul>
          </div>
        </div>
      </div>
      <ButtonBox />
    </>
  );
};

export default Application;
