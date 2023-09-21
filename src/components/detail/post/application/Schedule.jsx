import { useRecoilValue } from 'recoil';
import { postApplicationRequestAtom } from 'src/store/post/postApplicationAtom';

const Schedule = () => {
  const request = useRecoilValue(postApplicationRequestAtom);
  // console.log(request);
  const selectedTime = request.selectTime;
  console.log(selectedTime);

  // console.log(new Date('2023년 09월 20일'));

  // map 함수 만들기
  const dayNames = ['일', '월', '화', '수', '목', '금', '토'];
  const mapSelectedTime = () => {
    return selectedTime.map((obj, index) => {
      const day = obj.day;

      const cleanedDate = day.replace(/[년월일]/g, '');
      const dateParts = cleanedDate.split(' ');
      const formattedDate = `${dateParts[0]}-${dateParts[1].padStart(
        2,
        '0',
      )}-${dateParts[2].padStart(2, '0')}`;

      const daysIndex = new Date(formattedDate).getDay();
      const dayName = dayNames[daysIndex];

      return (
        <div className="row" key={index}>
          <p className="date">
            {obj.day} ({dayName})
          </p>
          :
          {obj.timeList.map((time, timeIndex) => (
            <span className="selected-time" key={timeIndex}>
              {time}
            </span>
          ))}
          =<p className="total-time">{obj.timeList.length}시간</p>
        </div>
      );
    });
  };

  return <div className="schedule-container">{mapSelectedTime()}</div>;
};

export default Schedule;
