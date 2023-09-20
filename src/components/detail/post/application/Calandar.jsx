import { useRecoilValue, useSetRecoilState } from 'recoil';
import {
  postApplicationCurrentSelector,
  postApplicationDateValueSelector,
  postApplicationRequestAtom,
  postQueryStringRequestSelector,
} from 'src/store/post/postApplicationAtom';

const Calandar = ({ setTimeState }) => {
  const week = ['월', '화', '수', '목', '금', '토', '일'];

  const day = useRecoilValue(postQueryStringRequestSelector);
  const setDay = useSetRecoilState(postQueryStringRequestSelector);

  const atom = useRecoilValue(postApplicationRequestAtom);

  // list 체크하기 위해
  const checkList = atom.selectTime.map((el) => el.day);

  const current = useRecoilValue(postApplicationCurrentSelector);
  const today = useRecoilValue(postApplicationDateValueSelector);

  // 날짜 체크,언체크 하는 함수
  const toggleDate = (date) => {
    // date매개변수의 형식이 년,월,일이라서 parse
    const cleanedDate = date.replace(/[년월일]/g, '');
    const dateParts = cleanedDate.split(' ');
    const formattedDate = `${dateParts[0]}-${dateParts[1].padStart(2, '0')}-${dateParts[2].padStart(
      2,
      '0',
    )}`;

    if (today <= formattedDate) {
      setDay(date);
    }
    setTimeState('AM');
  };

  // ex) 포맷 변경 함수(백에게 보내줘야할 데이터 형식)
  const makeFormat = (year, month, day) => {
    const formattedMonth = month.toString().padStart(2, '0');
    const formattedDay = day.toString().padStart(2, '0');
    return `${year}년 ${formattedMonth}월 ${formattedDay}일`;
  };

  // 오늘 기준으로 전날인지 비교하는 함수
  const checkPrevToday = (year, month, day) => {
    const formattedMonth = month.toString().padStart(2, '0');
    const formattedDay = day.toString().padStart(2, '0');
    const formatDate = `${year}-${formattedMonth}-${formattedDay}`;
    if (formatDate < today) {
      return true;
    } else {
      return false;
    }
  };

  // 캘린더 만드는 함수
  const createCalendarDay = () => {
    const year = current.getFullYear();
    const month = current.getMonth() + 1;
    const totalDayLength = new Date(year, month, 0).getDate();
    const startDay = new Date(year, month - 1, 1).getDay(); // 시작하는 요일
    const prevMonthLastDay = new Date(year, month - 1, 0).getDate(); // 전달 마지막 날

    const dateArray = [];

    // 시작하는 요일 이전에 이전 달의 날짜 추가
    for (let i = startDay - 1; i >= 0; i--) {
      dateArray.push({
        isPrevDay: checkPrevToday(year, month - 1, prevMonthLastDay - i),
        format: makeFormat(year, month - 1, prevMonthLastDay - i),
        day: prevMonthLastDay - i,
        isCurrentInDay: false,
      });
    }
    for (let i = 1; i <= totalDayLength; i++) {
      const date = makeFormat(year, month, i);
      const isToday = date === day;

      dateArray.push({
        isPrevDay: checkPrevToday(year, month, i),
        format: makeFormat(year, month, i),
        day: i,
        isCurrentInDay: true,
        isToday,
      });
    }

    // 7일씩 그룹화
    const groupedDates = [];
    for (let i = 0; i < dateArray.length; i += 7) {
      groupedDates.push(dateArray.slice(i, i + 7));
    }

    // 다음 달의 날짜를 추가하여 7일 꽉 채우기
    if (groupedDates[groupedDates.length - 1].length < 7) {
      const nextDays = 7 - groupedDates[groupedDates.length - 1].length;
      for (let i = 1; i <= nextDays; i++) {
        const date = makeFormat(year, month + 1, i);
        const isToday = date === day;

        groupedDates[groupedDates.length - 1].push({
          isPrevDay: checkPrevToday(year, month + 1, i),
          format: makeFormat(year, month + 1, i),
          day: i,
          isToday,
          isCurrentInDay: false,
        });
      }
    }

    const classFilter = (date) => {
      if (date.isPrevDay) {
        return 'prev';
      } else if (!date.isCurrentInDay) {
        return 'not-include';
      } else if (date.isToday) {
        return 'today';
      }
      if (checkList.includes(date.format)) {
        return 'checked';
      }
    };

    return groupedDates.map((group, index) => (
      <ul key={index} className="row">
        {group.map((date, idx) => (
          <li className={classFilter(date)} key={idx} onClick={() => toggleDate(date.format)}>
            {date.day}
          </li>
        ))}
      </ul>
    ));
  };

  return (
    <>
      <div className="calendar">
        <ul className="week">
          {week.map((day, index) => (
            <li key={index}>{day}</li>
          ))}
        </ul>
        <ul className="day">{createCalendarDay()}</ul>
      </div>
    </>
  );
};

export default Calandar;
