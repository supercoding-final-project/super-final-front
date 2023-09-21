import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import * as S from 'src/pages/my/mentoMyLayout.style';
const MentiToMentoModal = ({ cookie, setLoginState }) => {
  //멘토 정보 수정 인풋

  const [incumbentValue, setIncumbentValue] = useState('');
  const [introductionValue, setIntroductionValue] = useState('');
  const [dutyType, setDutyType] = useState('');

  const [careerList, setCareerList] = useState([]);
  const [careerObjects, setCareerObjects] = useState([]);

  //기술스택
  const [selectedOption, setSelectedOption] = useState(''); // 선택한 옵션을 저장하는 상태 변수
  const [subOptions, setSubOptions] = useState([]); // 선택한 옵션에 따른 하위 옵션을 저장하는 상태 변수
  const [skillStackList, setSkillStackList] = useState([]); // 선택한 옵션에 따른 하위 옵션을 저장하는 상태 변수

  const dutyYearRef = useRef();
  const dutyMonthRef = useRef();

  const incumbentRef = useRef();
  const introductionRef = useRef();

  const EnteredincumbentJobCheck = (event) => {
    let enteredincumbentJobCheck = event.target.value;
    // 특수문자 및 빈 문자열 체크
    const pattern = /[~!@#\\#$%<>^&*\s]/;
    const check = enteredincumbentJobCheck.trim();
    if (pattern.test(check) || check === '') {
      return;
    } else {
      setIncumbentValue(enteredincumbentJobCheck.trim());
    }
  };
  const EnteredIntroductionCheck = (event) => {
    let enteredincumbentJobCheck = event.target.value;
    // 특수문자 및 빈 문자열 체크
    const pattern = /[~!@#\\#$%<>^&*\s]/;
    const check = enteredincumbentJobCheck.trim();
    if (pattern.test(check) || check === '') {
      return;
    } else {
      setIntroductionValue(enteredincumbentJobCheck.trim());
    }
  };

  const keyEnterIncumbent = (event) => {
    if (event.key === 'Enter') {
      // setEnterIncumbentJob(prev => !prev)
      let enteredNickName = event.target.value;
      // 특수문자 및 빈 문자열 체크
      const pattern = /[~!@#\\#$%<>^&*\s]/;
      const check = enteredNickName.trim();
      if (pattern.test(check) || check === '') {
        return;
      } else {
        setIncumbentValue(enteredNickName.trim());
      }
    }
  };
  // const blurIncumbentJobNameBox = () => {
  //     setEnterIncumbentJob(false)
  // }

  const addCareerHandler = () => {
    let duty = dutyType;
    let years = dutyYearRef.current.value;
    let month = dutyMonthRef.current.value;
    const pattern = /[~!@#$%^&*()]/;
    if (pattern.test(duty)) {
      return;
    }

    if (month > 12) {
      duty = '';
      dutyYearRef.current.value = '';
      dutyMonthRef.current.value = '';
      return;
    }
    if (years === '' && month === '') {
      duty = '';
      dutyYearRef.current.value = '';
      dutyMonthRef.current.value = '';
      return;
    }
    if (years === '0' && month === '0') {
      duty = '';
      dutyYearRef.current.value = '';
      dutyMonthRef.current.value = '';
      return;
    }

    if (years === '' || years === '0') {
      let mentoCareer = duty + '||' + month + '개월';
      setCareerList((prev) => [...prev, mentoCareer]);
      duty = '';
      dutyYearRef.current.value = '';
      dutyMonthRef.current.value = '';
      return;
    }

    if (month === '' || month === '0') {
      let mentoCareer = duty + '||' + years + '년';
      setCareerList((prev) => [...prev, mentoCareer]);
      duty = '';
      dutyYearRef.current.value = '';
      dutyMonthRef.current.value = '';
      return;
    }
    let mentoCareer = duty + '||' + years + '년' + month + '개월';
    setCareerList((prev) => [...prev, mentoCareer]);
    duty = '';
    dutyYearRef.current.value = '';
    dutyMonthRef.current.value = '';
  };
  const careerEnterKeyDown = (event) => {
    if (event.key === 'Enter') {
      console.log('엔터키를 눌렀다');
      addCareerHandler();
    }
  };
  const addCareerButton = () => {
    addCareerHandler();
  };
  //기술스택 설정하는곳
  // 선택한 옵션에 따라 하위 옵션을 설정하는 함수
  const handleSkillOptionChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);

    // 선택한 옵션에 따라 하위 옵션을 동적으로 설정
    if (selectedValue === 'BACKEND') {
      setSubOptions([
        '선택하세요',
        'JAVA',
        'SPRING',
        'JPA',
        'SPRING_BOOT',
        'SPRING_JDBC',
        'SQL',
        'DBMS_RDBMS',
        'REDIS',
        'POSTGRE_SQL',
        'MSA',
      ]);
    } else if (selectedValue === 'FRONTEND') {
      setSubOptions([
        '선택하세요',
        'REACT',
        'REACT_NATIVE',
        'VUE',
        'TYPE_SCRIPT',
        'NEXT_JS',
        'SVELTE',
        'JAVA_SCRIPT',
      ]);
    } else if (selectedValue === 'INFRA') {
      setSubOptions(['선택하세요', 'KUBERNETES', 'JENKINS', 'GITHUB_ACTION', 'HARBOR', 'DOCKER']);
    } else if (selectedValue === 'PROGRAMMING_LANGUAGE') {
      setSubOptions([
        '선택하세요',
        'PYTHON',
        'KOTLIN',
        'C_PLUS_PLUS',
        'TYPE_SCRIPT',
        'JAVA',
        'JAVA_SCRIPT',
        'RUBY',
        'GO',
        'RUST',
      ]);
    } else if (selectedValue === 'DBA') {
      setSubOptions(['선택하세요', 'DBMS_RDBMS', 'MYSQL', 'MONGODB', 'MARIA', 'ORACLE']);
    } else {
      setSubOptions([]);
    }
  };

  const handleIncumbentJobChange = (event) => {
    const selectedValue = event.target.value;
    setDutyType(selectedValue);
  };

  const selectSkill = (event) => {
    const selectedSkill = event.target.value;
    // 선택한 기술스택을 처리하는 로직을 여기에 추가하세요
    if (selectedSkill === '선택하세요') {
      return;
    }
    console.log('선택한 기술스택:', selectedSkill);
    setSkillStackList((prev) => [...prev, selectedSkill]);
  };
  const dutyDeleteHandler = (index) => {
    const updatedCareerList = careerList.filter((item, i) => i !== index);
    setCareerList(updatedCareerList);
  };

  const skillDeleteHandler = (index) => {
    const updatedCareerList = skillStackList.filter((item, i) => i !== index);
    setSkillStackList(updatedCareerList);
  };

  useEffect(() => {
    setCareerObjects([]);
    careerList.map((career) => {
      let [dutyName, period] = career.split('||');
      setCareerObjects((prev) => [
        ...prev,
        {
          dutyName: dutyName,
          period: period,
        },
      ]);
    });
  }, [careerList]);

  const switchToMentor = async () => {
    console.log('현직', incumbentRef.current.value);
    console.log('자기소개', introductionRef.current.value);
    console.log('경력', careerList);
    console.log('기술스택', skillStackList);
    console.log('커리어객체', careerObjects);
    if (
      !incumbentRef.current.value ||
      !introductionRef.current.value ||
      careerList.length === 0 ||
      skillStackList.length === 0
    ) {
      console.log('입력안됬어요');
      return;
    }
    const body = {
      company: incumbentRef.current.value,
      careers: careerList,
      skills: skillStackList,
      introduction: introductionRef.current.value,
    };
    try {
      const response = await axios.post(
        'https://codevelop.store/api/v1/users/role/join/mentor',
        body,
        {
          headers: {
            Authorization: cookie,
            'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
          },
        },
      );

      console.log(response.data);
      setLoginState('MENTOR');
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <S.FixInformationContainer>
        <div>
          멘토 기본정보를 등록 하고, <span>CODEVELOPE</span>을 이용하세요!
        </div>
        <div>
          <S.FixInformationBox>
            <S.FixInformationLabel>
              <span style={{ color: 'red' }}>*</span>경력
            </S.FixInformationLabel>
            <S.SkillStackSelect onChange={handleIncumbentJobChange}>
              <option value="NONE">선택하세요</option>
              <option value="BACKEND_DEVELOPER">BACKEND_DEVELOPER</option>
              <option value="FRONTEND_DEVELOPER">FRONTEND_DEVELOPER</option>
              <option value="FULL_STACK_DEVELOPER">FULL_STACK_DEVELOPER</option>
              <option value="MOBILE_APP_DEVELOPER">MOBILE_APP_DEVELOPER</option>
              <option value="DEVOPS_ENGINEER">DEVOPS_ENGINEER</option>
              <option value="DATA_ENGINEER">DATA_ENGINEER</option>
              <option value="GAME_DEVELOPER">GAME_DEVELOPER</option>
              <option value="AI_ML_ENGINEER">AI_ML_ENGINEER</option>
              <option value="SECURITY_ENGINEER">SECURITY_ENGINEER</option>
            </S.SkillStackSelect>

            <S.MentoCareerYearInput
              type="number"
              ref={dutyYearRef}
              placeholder="년"
              onKeyDown={careerEnterKeyDown}
            />
            <S.MentoCareerMonthInput
              type="number"
              ref={dutyMonthRef}
              placeholder="개월"
              onKeyDown={careerEnterKeyDown}
            />
            <S.NickNameFixButton onClick={addCareerButton}>추가</S.NickNameFixButton>
          </S.FixInformationBox>
        </div>

        <S.FixInformationBox>
          <S.FixInformationLabel>
            <span style={{ color: 'red' }}>*</span>기술스택
          </S.FixInformationLabel>

          <S.SkillStackSelect value={selectedOption} onChange={handleSkillOptionChange}>
            <option value="">선택하세요</option>
            <option value="BACKEND">BACKEND</option>
            <option value="FRONTEND">FRONTEND</option>
            <option value="INFRA">INFRA</option>
            <option value="PROGRAMMING_LANGUAGE">PROGRAMMING_LANGUAGE</option>
            <option value="DBA">DBA</option>
          </S.SkillStackSelect>
          {subOptions.length > 0 && (
            <div>
              <label style={{ margin: '0 5px' }}>소분류</label>
              <S.SkillStackSelect onChange={selectSkill}>
                {subOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </S.SkillStackSelect>
            </div>
          )}
        </S.FixInformationBox>

        <S.FixInformationBox>
          <S.FixInformationLabel>
            {' '}
            <span style={{ color: 'red' }}>*</span> 현직
          </S.FixInformationLabel>
          <S.FixInformationMentiIncumbentJobInput
            placeholder="현재 직업을 입력해주세요"
            ref={incumbentRef}
            onChange={EnteredincumbentJobCheck}
            onKeyDown={keyEnterIncumbent}
          ></S.FixInformationMentiIncumbentJobInput>
        </S.FixInformationBox>
        <S.FixInformationBox>
          <S.FixInformationLabel>
            {' '}
            <span style={{ color: 'red' }}>*</span> 자기소개
          </S.FixInformationLabel>
          <S.FixInformationMentiIncumbentJobInput
            placeholder="자기 소개를 입력해주세요"
            ref={introductionRef}
            onChange={EnteredIntroductionCheck}
            onKeyDown={keyEnterIncumbent}
          ></S.FixInformationMentiIncumbentJobInput>
        </S.FixInformationBox>
        <S.DivFlex>
          <div onClick={addCareerButton}>추가</div>
        </S.DivFlex>
        <div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <S.FixInformationLabel>경력 </S.FixInformationLabel>
            <span style={{ fontSize: '0.8rem', color: '#F48070', letterSpacing: '0.2rem' }}>
              *누르면삭제되요
            </span>
          </div>
          <S.DivGrid>
            {careerList.map((item, index) => {
              return (
                <S.dutyTag key={index} onClick={() => dutyDeleteHandler(index)}>
                  {item}
                </S.dutyTag>
              );
            })}
          </S.DivGrid>
        </div>
        <div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <S.FixInformationLabel>기술스택 </S.FixInformationLabel>
            <span style={{ fontSize: '0.8rem', color: '#F48070', letterSpacing: '0.2rem' }}>
              *누르면삭제되요
            </span>
          </div>
          <S.DivGrid>
            {skillStackList.map((item, index) => {
              return (
                <S.dutyTag key={index} onClick={() => skillDeleteHandler(index)}>
                  {item}
                </S.dutyTag>
              );
            })}
          </S.DivGrid>
        </div>

        <S.SubmitButton onClick={switchToMentor}>멘토로 전환하기</S.SubmitButton>
      </S.FixInformationContainer>
    </>
  );
};

export default MentiToMentoModal;
