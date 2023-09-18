import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'src/components/common/Button';
import { Icon } from 'src/components/common/icon/Icon';

import Application from './application/Application';
// import { theme } from 'src/globalLayout/GlobalStyle';
import * as S from './Detail.style';

const PostApplicationModal = ({ setShowModal }) => {
  // console.log(setShowModal);
  const navigate = useNavigate();
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
  // const [stepState, setStepState] = useState('정보확인&결제');
  const [timeState, setTimeState] = useState('AM');

  const chageStepState = (e) => {
    setStepState(e.currentTarget.textContent);
  };

  const changeTimeState = (e) => {
    setTimeState(e.currentTarget.textContent);
  };

  // const
  const [current, setCurrent] = useState(new Date());

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
        // console.log('체크 한 것일 때');
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
  // console.log(selectedTimes);

  const clickStep = (state) => {
    console.log(state);
    if (state === '이전으로') {
      navigate('/detail');
    } else {
      setStepState('정보확인&결제');
    }
  };

  const clickInfoStep = (state) => {
    if (state === '이전으로') {
      console.log('이전으로');
      setStepState('신청하기');
    } else {
      alert('결제 완료!');
      setShowModal(false);
      // navigate('/detail'); // 결제하기
    }
  };

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
        <Application current={current} setCurrent={setCurrent} />
      ) : (
        <>
          <p className="info-title">신청 정보 확인</p>
          <ul className="info-container">
            <li>
              <span className="label">POST명</span>
              <span className="info">[프론트/백엔드]이력서 및 포트폴리오 전략 상담</span>
            </li>
            <li>
              <span className="label">멘토</span>
              <span className="info">Lucy</span>
            </li>
            <li>
              <span className="label">멘티</span>
              <span className="info">김소미</span>
            </li>
            <li>
              <span className="label">일정</span>
              <div className="schedule-container">
                <div className="row">
                  <p className="date">23.09.20 (수) 00:00</p>~
                  <p className="date">23.09.20 (수) 02:00</p>=<p className="total-time">2시간</p>
                </div>

                <div className="row">
                  <p className="date">23.09.20 (수) 00:00</p>~
                  <p className="date">23.09.20 (수) 02:00</p>=<p className="total-time">3시간</p>
                </div>

                <div className="row">
                  <p className="date">23.09.20 (수) 00:00</p>~
                  <p className="date">23.09.20 (수) 02:00</p>=<p className="total-time">2시간</p>
                </div>
              </div>
            </li>
          </ul>
          <div className="price-container">
            <span>결제 금액</span>
            <span>총 7시간 = 343,000P</span>
          </div>
          <div className="btn-box">
            <Button
              text="이전으로"
              fontcolor="#807E7D"
              bgcolor="#EDFCF3"
              radius="4px"
              fontSize="20px"
              fontWeight={700}
              onClick={() => clickInfoStep('이전으로')}
            />
            <Button
              text="결제하기"
              fontcolor="#FCFCFB"
              bgcolor="#29CC61"
              radius="4px"
              fontSize="20px"
              fontWeight={700}
              onClick={() => clickInfoStep('결제하기')}
            />
          </div>
        </>
      )}
    </S.PostApplicationModal>
  );
};

export default PostApplicationModal;
