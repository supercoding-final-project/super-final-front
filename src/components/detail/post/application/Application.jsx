import { useRecoilValue, useSetRecoilState } from 'recoil';
import { Icon } from 'src/components/common/icon/Icon';
import { postApplicationCurrentSelector } from 'src/store/post/postApplicationAtom';

import ButtonBox from './ButtonBox';
import Calandar from './Calandar';
import TimeCard from './TimeCard';

const Application = ({ setShowModal, timeState, setTimeState }) => {
  const current = useRecoilValue(postApplicationCurrentSelector);
  const setCurrent = useSetRecoilState(postApplicationCurrentSelector);

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
            <p> {current.getMonth() + 1}월</p>
          </div>
        </div>
        <div className="date-container">
          <Calandar setTimeState={setTimeState} />
          <div className="line" />
          <TimeCard timeState={timeState} setTimeState={setTimeState} />
        </div>
      </div>
      <ButtonBox setShowModal={setShowModal} />
    </>
  );
};

export default Application;
