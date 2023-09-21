import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import Button from 'src/components/common/Button';
import {
  postApplicationRequestAtom,
  postApplicationRequestSelectTimeSelector,
  postQueryStringRequestSelector,
} from 'src/store/post/postApplicationAtom';

const TimeCard = ({ timeState, setTimeState }) => {
  const params = useParams();
  const id = Number(params.postId);
  const atom = useRecoilValue(postApplicationRequestAtom);

  const setSelectTime = useSetRecoilState(postApplicationRequestSelectTimeSelector);

  const day = useRecoilValue(postQueryStringRequestSelector);
  // console.log(day);

  const response = {
    success: true,
    status: 200,
    message: '멘토의 신청가능한 시간이 조회되었습니다.',
    data: {
      am: [2, 3, 4, 6, 7, 9, 10],
      pm: [1, 4, 5, 6, 7, 10, 11, 12],
    },
  };
  const mockData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const changeTimeState = (e) => {
    setTimeState(e.currentTarget.textContent);
  };

  const [selectedTimesAM, setSelectedTimesAM] = useState([]);
  const [selectedTimesPM, setSelectedTimesPM] = useState([]);

  const accesstoken =
    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjUyNTIsImF1dGhvcml0aWVzIjpbIk1FTlRFRSJdLCJpYXQiOjE2OTUwNTExMjQsImV4cCI6MTcyNjU4NzEyNH0.v0ly5U3mVe15JyctMOHxBT_YZUZev5szX623gy1ND8s';

  const fetchDayClose = async () => {
    try {
      const response = await axios.get(
        `http://13.124.66.205:8080/api/v1/post/day?postId=${id}&days=${day}`,
        {
          headers: {
            Authorization: accesstoken,
          },
        },
      );
      console.log(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };
  useEffect(() => {
    fetchDayClose();
  }, [day]);

  // const fetchTimeDataAtom = useRecoilValue(postTimeDataSelector(5)); // 현재 에러 발생

  // const fetchTimeData = () => {
  //   fetchTimeDataAtom();
  // };

  // useEffect(() => {
  //   fetchTimeData();
  // }, []);

  const [timeArray, setTimeArray] = useState([]);
  const checkedList = atom.selectTime.map((el) => el.day);

  // 데이터에서 day를 기준으로 list 가져오는 함수
  const checkIndex = () => {
    if (checkedList.includes(day) && checkedList.length !== 0) {
      const indexArr = checkedList?.indexOf(day);

      return atom.selectTime[indexArr].timeList;
    }
  };

  const handleTimeItemClick = (time) => {
    if (timeState === 'AM') {
      // console.log('am일때');
      if (selectedTimesAM.includes(time)) {
        setSelectedTimesAM((prevState) => prevState.filter((item) => item !== time));
        setTimeArray((prevTimeArray) => prevTimeArray.filter((item) => item !== time));
      } else if (!response.data.am.includes(time)) {
        return;
      } else {
        setSelectedTimesAM((prevState) => [...prevState, time]);
        setTimeArray((prevTimeArray) => [...prevTimeArray, time]);
      }
    } else {
      if (selectedTimesPM.includes(time)) {
        setSelectedTimesPM((prevState) => prevState.filter((item) => item !== time));
        setTimeArray((prevTimeArray) => prevTimeArray.filter((item) => item !== time + 12));
      } else if (!response.data.pm.includes(time)) {
        return;
      } else {
        setSelectedTimesPM((prevState) => [...prevState, time]);
        setTimeArray((prevTimeArray) => [...prevTimeArray, time + 12]);
      }
    }
  };

  const filterTimeClass = (time) => {
    if (timeState === 'AM') {
      const amChosenTimes = checkIndex()?.filter((chosenTime) => chosenTime <= 12);
      if (selectedTimesAM.includes(time)) {
        return 'chose';
      } else if (amChosenTimes?.includes(time)) {
        return 'chose';
      } else if (mockData.includes(time) && response.data.am.includes(time)) {
        return 'have';
      } else if (!response.data.am.includes(time)) {
        return 'close';
      }
    } else if (timeState === 'PM') {
      const pmChosenTimes = checkIndex()
        ?.filter((chosenTime) => chosenTime > 12)
        .map((chosenTime) => chosenTime - 12);
      if (selectedTimesPM.includes(time)) {
        return 'chose';
      } else if (pmChosenTimes?.includes(time)) {
        return 'chose';
      } else if (mockData.includes(time) && response.data.pm.includes(time)) {
        return 'have';
      } else if (!response.data.pm.includes(time)) {
        return 'close';
      }
    }
  };

  const registerTime = () => {
    if (timeArray.length !== 0) {
      // 오름차순 정렬
      const timeList = timeArray.sort((a, b) => a - b);
      const newSelectTime = {
        day,
        timeList,
      };

      setSelectTime(newSelectTime);

      setTimeArray([]);
      setSelectedTimesAM([]);
      setSelectedTimesPM([]);
      setTimeState('AM');
    } else {
      alert('시간을 선택해주세요');
    }
  };

  return (
    <div className="time">
      <div className="time-tab">
        <div className={timeState === 'AM' ? 'active' : null} onClick={changeTimeState}>
          AM
        </div>
        <div className={timeState === 'PM' ? 'active' : null} onClick={changeTimeState}>
          PM
        </div>
        {/* <button >날짜등록</button> */}
        <Button text="날짜등록" onClick={registerTime} purpose="registerTime" />
      </div>
      <ul>
        {mockData.map((time, index) => (
          <li
            key={index}
            className={filterTimeClass(time)}
            onClick={() => handleTimeItemClick(time)}
          >
            {time}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TimeCard;
