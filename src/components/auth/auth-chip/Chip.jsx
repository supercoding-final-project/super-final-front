import * as S from './Chip.style';

// eslint-disable-next-line react/prop-types
const Chip = ({ text }) => {
  return (
    <S.ChipContainer>
      <S.Chip>{text}</S.Chip>
    </S.ChipContainer>
  );
};

export default Chip;
