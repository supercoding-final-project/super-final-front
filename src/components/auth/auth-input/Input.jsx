import * as S from './Input.style';

// eslint-disable-next-line react/prop-types
const Input = ({ placeholder, type, value, onChange, onKeyPress, onBlur }) => {
  return (
    <S.Container>
      <input
        className="input"
        required=""
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onKeyPress={onKeyPress}
      />
      <span className="input-border"></span>
    </S.Container>
  );
};

export default Input;
