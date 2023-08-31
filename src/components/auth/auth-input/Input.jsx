import * as S from './Input.style';

// eslint-disable-next-line react/prop-types
const Input = ({ placeholder, type, onChange, onKeyDown, onBlur }) => {
  return (
    <S.Container>
      <input
        className="input"
        required=""
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        onKeyDown={onKeyDown}
        onBlur={onBlur}
      />
      <span className="input-border"></span>
    </S.Container>
  );
};

export default Input;
