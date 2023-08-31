import * as S from './Button.style';

const Button = ({ label = '', color = '', imgSrc, hoverColor = '' }) => {
  return (
    <S.ButtonWrap color={color} hoverColor={hoverColor}>
      <img src={imgSrc} alt="logo" />
      {label}
    </S.ButtonWrap>
  );
};

export default Button;
