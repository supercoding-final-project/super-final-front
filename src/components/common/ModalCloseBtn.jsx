import React from 'react';
import * as S from './Modal.style';
import { Icon } from './icon/Icon';

const ModalCloseBtn = ({ handleCloseModal }) => {
  return (
    <S.CloseBtn onClick={handleCloseModal}>
      <Icon name="Close" size={20} />
    </S.CloseBtn>
  );
};

export default ModalCloseBtn;
