import React, { useState } from 'react';
import LoadingSpinner from './LoadingSpinner';
import * as S from './Modal.style';

const Modal = ({ setShowModal, children }) => {
  const [isLoading, setIsloading] = useState(false);

  const handleCloseModal = () => {
    document.body.style.overflowY = 'auto';
    setShowModal(false);
  };

  return (
    <S.ModalWrapper onClick={handleCloseModal}>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        React.Children.map(children, (child) => React.cloneElement(child, { handleCloseModal }))
      )}
    </S.ModalWrapper>
  );
};

export default Modal;
