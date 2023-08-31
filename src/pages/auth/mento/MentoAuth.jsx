import { useState } from 'react';

import Chip from '@/components/auth/auth-chip/Chip';
import Input from '@/components/auth/auth-input/Input';
import RegisterButton from '@/components/auth/auth-register/RegisterButton';
import * as S from './Mento.style';

const MentoAuth = () => {
  const [nickname, setNickname] = useState('');
  const [showNicknameChip, setShowNicknameChip] = useState(false);
  const [nicknameChipValue, setNicknameChipValue] = useState('');

  const [career, setCareer] = useState('');
  const [showCareerChip, setShowCareerChip] = useState(false);
  const [careerChipValue, setCareerChipValue] = useState('');

  const [yearSelectedOption, setYearSelectedOption] = useState('');

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
    if (career.trim() !== '') {
      setShowNicknameChip(true);
    }
  };

  const handleCareerChange = (e) => {
    setCareer(e.target.value);
    setShowCareerChip(true);
  };

  const handleCareerKeyDown = (e) => {
    if (e.key === 'Enter' && career.trim() !== '') {
      e.preventDefault();
      setCareerChipValue(career.trim());
      setCareer('');
    }
  };

  const handleCareerInputBlur = () => {
    if (career.trim() !== '') {
      setShowCareerChip(true);
    }
  };

  const handleYearSelectedOptionChange = (e) => {
    setYearSelectedOption(e.target.value);
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
        <p>닉네임과 기술스택을 작성해주시면 가입이 끝납니다!</p>

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
        {showNicknameChip && (
          <>
            <Chip text={nickname ? nickname : nicknameChipValue} />
          </>
        )}

        {/* <S.Career>
          <Input
            placeholder="회사명을 입력해주세요."
            type="text"
            value={career}
            onChange={handleCareerChange}
            onKeyPress={handleCareerKeyDown}
            onBlur={handleCareerInputBlur}
          />

          <S.Exp>
            <S.YearField>
              <select value={yearSelectedOption} onChange={handleYearSelectedOptionChange}>
                <option value={0}>Year</option>
                <option value={'0년'}>0년</option>
                <option value={'1년'}>1년</option>
                <option value={'2년'}>2년</option>
                <option value={'3년'}>3년</option>
                <option value={'4년'}>4년</option>
                <option value={'5년'}>5년</option>
                <option value={'6년'}>6년</option>
                <option value={'7년'}>7년</option>
                <option value={'8년'}>8년</option>
                <option value={'9년'}>9년</option>
                <option value={'10년'}>10년</option>
                <option value={'10년 이상'}>10년 이상</option>
              </select>
            </S.YearField>

            <div className="month-field">
              <select>
                <option value={0}>Month</option>
                <option value={1}>1개월</option>
                <option value={2}>2개월</option>
                <option value={3}>3개월</option>
                <option value={4}>4개월</option>
                <option value={5}>5개월</option>
                <option value={6}>6개월</option>
                <option value={7}>7개월</option>
                <option value={8}>8개월</option>
                <option value={9}>9개월</option>
                <option value={10}>10개월</option>
                <option value={11}>11개월</option>
                <option value={12}>12개월</option>
              </select>
            </div>
          </S.Exp>
        </S.Career>
        {showCareerChip && <Chip text={career ? career : careerChipValue} />} */}

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
