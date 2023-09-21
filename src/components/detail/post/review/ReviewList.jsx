import axios from 'axios';
import { useState } from 'react';
import Modal from 'src/components/common/Modal';
import useJwtToken from 'src/hooks/useJwt';

import * as S from './Review.style';
import ReviewRegister from './ReviewRegister';

const ReviewList = (props) => {
  const info = props.info;
  const [showModal, setShowModal] = useState(false);
  const { jwtToken } = useJwtToken();

  const modalHandler = () => {
    setShowModal(true);
  };

  const deleteReview = async () => {
    const res = await axios.delete(`https://codevelop.store/api/v1/reviews/${info.reviewId}`, {
      headers: {
        Authorization: jwtToken,
      },
    });
    window.alert(res.data.message);
    // props.onReviewChange();
  };

  return (
    <>
      {showModal && (
        <Modal setShowModal={setShowModal}>
          <ReviewRegister
            title={info.title}
            orderSheetId={info.orderSheetId}
            onReviewChange={props.onReviewChange}
            setShowModal={setShowModal}
          />
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
            <button onClick={deleteReview}>{props.btnValue}</button>
          )}
        </div>
      </S.ListBox>
    </>
  );
};

export default ReviewList;
