import * as S from './button.style';

const Button = ({ text, bgcolor, fontcolor, ...rest }) => {
  // console.log(rest);
  return (
    <S.Button bgcolor={bgcolor} fontcolor={fontcolor} {...rest}>
      {text}
    </S.Button>
  );
};

export default Button;
