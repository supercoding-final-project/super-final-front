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
          <ReviewRegister title={info.title} orderSheetId={info.oderSheetId} />
        </Modal>
      )}
      <S.ListBox>
        <div>{info.mentorNickname}</div>
        <div style={{ width: '40%' }}>{info.title}</div>
        {props.type === 'POST' ? (
          <div>{info.totalTime}시간</div>
        ) : (
          <div style={{ justifyContent: 'flex-start' }}> {info.content}</div>
        )}
        {props.type === 'POST' ? (
          <div>{info.totalPrice.toLocaleString()}P</div>
        ) : (
          <div>{info.star}</div>
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
