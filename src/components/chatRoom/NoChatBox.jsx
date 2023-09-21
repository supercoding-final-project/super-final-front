import { useState } from 'react';

import * as S from './chatbox/chatBox.style';
import Modal from '../common/Modal';

const NoChatBox = () => {
  const [showModal, setShowModal] = useState(false);

  const modalHandler = () => {
    setShowModal(true);
  };
  return (
    <S.NoChatBox>
      {showModal && (
        <Modal setShowModal={setShowModal}>
          <div>'화상채팅'은 멘티의 신청이 이루어져야 해요!</div>
        </Modal>
      )}
      채팅방을 선택해주세요 :)
      <button onClick={modalHandler}>모달 나와라 얍</button>
    </S.NoChatBox>
  );
};

export default NoChatBox;
