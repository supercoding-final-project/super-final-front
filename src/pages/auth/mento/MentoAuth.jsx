import { useState } from 'react';

import Chip from '@/components/auth/auth-chip/Chip';
import Input from '@/components/auth/auth-input/Input';
import RegisterButton from '@/components/auth/auth-register/RegisterButton';
import * as S from './Mento.style';

const MentoAuth = () => {
  const [nickname, setNickname] = useState('');
  const [showNicknameChip, setShowNicknameChip] = useState(false);
  const [nicknameChipValue, setNicknameChipValue] = useState('');
  const [skill, setSkill] = useState('');
  const [skillChips, setSkillChips] = useState([]);
  const [showSkillChip, setShowSkillChip] = useState(false);

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
    setShowNicknameChip(true);
  };

  const handleNicknameKeyDown = (e) => {
    if (e.key === 'Enter' && nickname.trim() !== '') {
      e.preventDefault();
      setNicknameChipValue(nickname.trim());
      setNickname('');
    }
  };

  const handleNicknameInputBlur = () => {
    if (nickname.trim() !== '') {
      setShowNicknameChip(true);
    }
  };

  const handleSkillChange = (e) => {
    setSkill(e.target.value);
    setShowSkillChip(true);
  };

  const handleSkillKeyDown = (e) => {
    if (e.key === 'Enter' && skill.trim() !== '') {
      e.preventDefault();
      setSkillChips((prevChips) => [...prevChips, skill.trim()]);
      setSkill('');
    }
  };

  const handleSkillInputBlur = () => {
    if (skill.trim() !== '') {
      setShowSkillChip(true);
    }
  };

  return (
    <S.Container>
      <S.Wrapper>
        <h1>멘토님 반가워요!</h1>
        <p>닉네임과 경력 및 기술스택을 작성해주시면 가입이 끝납니다!</p>

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
        {showNicknameChip && <Chip text={nickname ? nickname : nicknameChipValue} />}

        <S.Career>
          <Input placeholder="회사명을 입력해주세요." type="text" />
        </S.Career>

        <S.InputWrapper>
          <Input
            placeholder="기술스택을 적어주세요."
            type="text"
            value={skill}
            onChange={handleSkillChange}
            onKeyPress={handleSkillKeyDown}
            onBlur={handleSkillInputBlur}
          />
        </S.InputWrapper>

        <S.ChipWrap>
          {showSkillChip &&
            skillChips.map((chip, index) =>
              index > skillChips.length - 2 ? (
                <div key={`chip-${index}`}>{<Chip text={skill ? skill : chip} />}</div>
              ) : (
                <div key={`chip-${index}`}>{<Chip text={chip} />}</div>
              ),
            )}
        </S.ChipWrap>

        <RegisterButton text="멘토로 가입" />
      </S.Wrapper>
    </S.Container>
  );
};

export default MentoAuth;
