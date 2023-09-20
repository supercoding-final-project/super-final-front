import React from 'react';

import { Icon } from './icon/Icon';
import * as S from './Modal.style';

const ModalCloseBtn = ({ handleCloseModal }) => {
  return (
    <S.CloseBtn onClick={handleCloseModal}>
      <Icon name="Close" size={20} />
    </S.CloseBtn>
  );
};

export default ModalCloseBtn;
