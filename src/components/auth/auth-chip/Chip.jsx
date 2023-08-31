import * as S from './Chip.style';

// eslint-disable-next-line react/prop-types
const Chip = ({ text, onClick }) => {
  return (
    <S.ChipContainer onClick={onClick}>
      <S.Chip>{text}</S.Chip>
    </S.ChipContainer>
  );
};

export default Chip;
