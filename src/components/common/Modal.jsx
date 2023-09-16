import React, { useState } from 'react';

import LoadingSpinner from './LoadingSpinner';
import * as S from './Modal.style';
import ModalCloseBtn from './ModalCloseBtn';
import ModalPortal from '../modal/ModalPortal';

const Modal = ({ setShowModal, children, width, height }) => {
  const [isLoading, setIsloading] = useState(false);

  const handleCloseModal = () => {
    document.body.style.overflowY = 'auto';
    setShowModal(false);
  };

  return (
    <ModalPortal>
      <S.ModalWrapper onClick={handleCloseModal}>
        <S.ModalCard width={width} height={height} onClick={(e) => e.stopPropagation()}>
          <ModalCloseBtn handleCloseModal={handleCloseModal} />

          {isLoading ? (
            <LoadingSpinner />
          ) : (
            // React.Children.map(children, (child) => React.cloneElement(child, { handleCloseModal }))
            React.cloneElement(children, { handleCloseModal })
          )}
        </S.ModalCard>
      </S.ModalWrapper>
    </ModalPortal>
  );
};

export default Modal;
