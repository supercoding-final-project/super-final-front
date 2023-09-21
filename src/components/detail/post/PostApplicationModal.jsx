import { useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import {
  // postApplicationAtom,
  postApplicationStepSelector,
} from 'src/store/post/postApplicationAtom';

import Application from './application/Application';
import DetailInformation from './application/DetailInformation';
import * as S from './Detail.style';

const PostApplicationModal = ({ setShowModal, price, title }) => {
  // 최적화를 위해 selector 사용
  // 이유 : atom을 직접적으로 업데이트하면 불필요하게 리렌더링 발생하거나 많은 데이터를 가져오게 됨
  const step = useRecoilValue(postApplicationStepSelector);
  const setStep = useSetRecoilState(postApplicationStepSelector);

  const chageStepState = (e) => {
    setStep(e.currentTarget.textContent);
  };

  // const atom = useRecoilValue(postApplicationAtom);
  // console.log(atom);
  const [timeState, setTimeState] = useState('AM');
  return (
    <S.PostApplicationModal>
      <div className="tab-box">
        <div className={step === '신청하기' ? 'active' : null} onClick={chageStepState}>
          신청하기
        </div>
        <div className={step === '정보확인&결제' ? 'active' : null} onClick={chageStepState}>
          정보확인&결제
        </div>
      </div>
      {step === '신청하기' ? (
        <Application
          setShowModal={setShowModal}
          timeState={timeState}
          setTimeState={setTimeState}
        />
      ) : (
        <DetailInformation setShowModal={setShowModal} price={price} title={title} />
      )}
    </S.PostApplicationModal>
  );
};

export default PostApplicationModal;
