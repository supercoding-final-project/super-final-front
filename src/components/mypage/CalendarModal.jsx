import Button from 'src/components/common/Button';
import { theme } from 'src/globalLayout/GlobalStyle';

import * as S from './CalendarModal.style';

const CalendarModal = ({ closeModalHandler }) => {
  return (
    <>
      <S.ModalContainer>
        <S.Modalhead>멘토님의포스트 2023-09-14</S.Modalhead>
        <S.ModalButtonBox>
          <Button text="POST" fontcolor={'white'} bgcolor={theme.color.point}>
            POST
          </Button>
          <Button text="채팅" fontcolor={'white'} bgcolor={theme.color.point}>
            POST
          </Button>
        </S.ModalButtonBox>
      </S.ModalContainer>
    </>
  );
};

export default CalendarModal;
