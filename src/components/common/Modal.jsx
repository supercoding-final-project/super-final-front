import React, { useState } from 'react';

import LoadingSpinner from './LoadingSpinner';
import * as S from './Modal.style';
import ModalCloseBtn from './ModalCloseBtn';

const Modal = ({ setShowModal, children, width, height }) => {
  const [isLoading, setIsloading] = useState(false);

  const handleCloseModal = () => {
    document.body.style.overflowY = 'auto';
    setShowModal(false);
  };

  return (
    <S.ModalWrapper onClick={handleCloseModal}>
      <S.ModalCard width={width} height={height} onClick={(e) => e.stopPropagation()}>
        <ModalCloseBtn handleCloseModal={handleCloseModal} />
        {isLoading ? <LoadingSpinner /> : React.cloneElement(children, { handleCloseModal })}
      </S.ModalCard>
    </S.ModalWrapper>
  );
};

export default Modal;
