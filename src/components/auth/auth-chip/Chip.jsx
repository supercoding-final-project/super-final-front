import * as S from './Chip.style';

const Chip = ({ text }) => {
  return (
    <S.ChipContainer>
      <S.Chip>{text}</S.Chip>
    </S.ChipContainer>
  );
};

export default Chip;
