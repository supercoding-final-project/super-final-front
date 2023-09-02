import * as S from './Button.style';

// eslint-disable-next-line react/prop-types
const Button = ({ label = '', color = '', imgSrc, hoverColor = '' }) => {
  return (
    <S.ButtonWrap color={color} hoverColor={hoverColor}>
      <img src={imgSrc} alt="logo" />
      {label}
    </S.ButtonWrap>
  );
};

export default Button;
