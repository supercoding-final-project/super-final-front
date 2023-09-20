import { useState } from 'react';
import Modal from 'src/components/common/Modal';

import * as S from './Review.style';
import ReviewRegister from './ReviewRegister';

const ReviewList = (props) => {
  const info = props.info;
  const [showModal, setShowModal] = useState(false);

  const modalHandler = () => {
    setShowModal(true);
  };

  return (
    <>
      {showModal && (
        <Modal setShowModal={setShowModal}>
          <ReviewRegister title={info.post} />
        </Modal>
      )}
      <S.ListBox>
        <div>{info.mento}</div>
        <div style={{ width: '40%' }}>{info.post}</div>
        {props.type === 'POST' ? (
          <div>{info.time}시간</div>
        ) : (
          <div style={{ justifyContent: 'flex-start' }}> {info.reviewContent}</div>
        )}
        {props.type === 'POST' ? (
          <div>{info.point.toLocaleString()}P</div>
        ) : (
          <div>{info.rating}</div>
        )}

        <div>
          {props.type === 'POST' ? (
            <button onClick={modalHandler}>{props.btnValue}</button>
          ) : (
            <button>{props.btnValue}</button>
          )}
        </div>
      </S.ListBox>
    </>
  );
};

export default ReviewList;
