import { useState } from 'react';

import Chip from '@/components/auth/auth-chip/Chip';
import Input from '@/components/auth/auth-input/Input';
import RegisterButton from '@/components/auth/auth-register/RegisterButton';
import * as S from './Mento.style';

const MentoAuth = () => {
  const [skill, setSkill] = useState('');
  const [skillChips, setSkillChips] = useState([]);
  const [showSkillChip, setShowSkillChip] = useState(false);

  const handleSkillChange = (e) => {
    const skill = e.target.value.toUpperCase();
    setSkill(skill);
    setShowSkillChip(true);
  };

  const handleSkillKeyDown = (e) => {
    if (e.key === 'Enter' && skill.trim() !== '') {
      e.preventDefault();

      if (!skillChips.includes(skill.trim())) {
        setSkillChips((prevChips) => [...prevChips, skill.trim()]);
      }

      setSkill('');
    }
  };

  const handleSkillInputBlur = () => {
    if (skill.trim() !== '') {
      setShowSkillChip(true);
    }
  };

  const handleChipClick = (index) => {
    setSkillChips((prevChips) => prevChips.filter((chip, chipIndex) => chipIndex !== index));
  };

  return (
    <S.Container>
      <S.Wrapper>
        <h1>멘토님 반가워요!</h1>
        <p>기술스택을 작성해주시면 가입이 끝납니다!</p>

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
            skillChips.map((chip, index) => (
              <div key={`chip-${index}`}>
                {<Chip text={skill ? skill : chip} onClick={() => handleChipClick(index)} />}
              </div>
            ))}
        </S.ChipWrap>

        <RegisterButton text="멘토로 가입" />
      </S.Wrapper>
    </S.Container>
  );
};

export default MentoAuth;
