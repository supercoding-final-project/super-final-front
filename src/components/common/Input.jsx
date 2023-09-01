import * as S from './Input.style';

// eslint-disable-next-line react/prop-types
const Input = ({ ...restProps }) => {
  return (
    <S.Container>
      <input className="input" required="" {...restProps} />
      <span className="input-border"></span>
    </S.Container>
  );
};

export default Input;
