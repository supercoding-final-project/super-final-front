import * as S from './Modal.style';
import ModalCloseBtn from './ModalCloseBtn';

const ModalMainCard = ({ width, height, handleCloseModal }) => {
  return (
    <>
      <S.ModalCard width={width} height={height} onClick={(e) => e.stopPropagation()}>
        <ModalCloseBtn handleCloseModal={handleCloseModal} />
        <p>카드모달창입니다</p>
      </S.ModalCard>
    </>
  );
};

export default ModalMainCard;
