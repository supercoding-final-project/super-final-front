import { useEffect, useState } from 'react';
import Chip from 'src/components/auth/auth-chip/Chip';
import Input from 'src/components/auth/auth-input/Input';
import RegisterButton from 'src/components/auth/auth-register/RegisterButton';

import * as S from './Menti.style';

const MentiAuth = () => {
  const [nickname, setNickname] = useState('');
  const [showNicknameChip, setShowNicknameChip] = useState(false);
  const [chipValue, setChipValue] = useState('');

  useEffect(() => {
    console.log(chipValue);
  }, [chipValue]);

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
    setShowNicknameChip(true);
  };

  const handleNicknameKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      setChipValue(nickname.trim());
      setNickname('');
    }
  };

  const handleNicknameInputBlur = () => {
    if (nickname.trim() !== '') {
      setShowNicknameChip(true);
    }
  };

  return (
    <S.Container>
      <S.Wrapper>
        <h1>멘티님 반가워요!</h1>
        <p>닉네임을 작성해주시면 가입이 끝이납니다!</p>

        <S.InputWrapper>
          <Input
            placeholder="닉네임을 입력해주세요."
            type="text"
            value={nickname}
            onChange={handleNicknameChange}
            onKeyPress={handleNicknameKeyDown}
            onBlur={handleNicknameInputBlur}
          />
        </S.InputWrapper>
        {showNicknameChip && <Chip text={nickname ? nickname : chipValue} />}

        <RegisterButton text="멘티로 가입" />
      </S.Wrapper>
    </S.Container>
  );
};

export default MentiAuth;
