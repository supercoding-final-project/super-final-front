import * as S from './Menti.style';
import Input from '../../../components/auth/auth-input/Input';
import RegisterButton from '../../../components/auth/auth-register/RegisterButton';

const MentiAuth = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <h1>멘티님 반가워요!</h1>
        <p>닉네임을 작성해주시면 가입이 끝이납니다!</p>

        <Input placeholder="닉네임을 입력해주세요." type="text" />

        <RegisterButton text="멘티로 가입" />
      </S.Wrapper>
    </S.Container>
  );
};

export default MentiAuth;
