
import axios from 'axios';
import { useEffect, useRef, useState } from 'react'
import * as S from "src/pages/my/mentoMyLayout.style"


const FixInformation = ({ User, accesstoken }) => {

    //입력창 상태들
    const [enterNickanme, setEnterNickname] = useState(false)
    const [enterIncumbentJob, setEnterIncumbentJob] = useState(false)
    const [enterIntroduction, setEnterIntroduction] = useState(false)

    //맨처음 유저조회를할때 커리어list를 한번만 조회하기위한 상태
    const [executedOnce, setExecutedOnce] = useState(false);

    //멘토 정보 수정 인풋
    const [nicknameValue, setNicknameValue] = useState("");
    const [incumbentValue, setIncumbentValue] = useState("");
    const [dutyType, setDutyType] = useState("");

    const [introduction, setIntroduction] = useState("");
    const [careerList, setCareerList] = useState([])
    const [careerObjects, setCareerObjects] = useState([])


    //기술스택
    const [selectedOption, setSelectedOption] = useState(''); // 선택한 옵션을 저장하는 상태 변수
    const [subOptions, setSubOptions] = useState([]); // 선택한 옵션에 따른 하위 옵션을 저장하는 상태 변수
    const [skillStackList, setSkillStackList] = useState([]); // 선택한 옵션에 따른 하위 옵션을 저장하는 상태 변수


    const dutyRef = useRef()
    const dutyYearRef = useRef()
    const dutyMonthRef = useRef()
    const textRef = useRef()

    const FIXINFORMATION = {
        "thumbnailImageUrl": User.thumbnailImageUrl,
        "nickname": nicknameValue,
        "email": User.email,
        "introduction": introduction,
        "company": incumbentValue,
        "searchable": true,
        "careers": careerObjects,
        "skillStacks": skillStackList
    }


    useEffect(() => {
        console.log(User)

        setNicknameValue(User.nickname)
    }, [User])

    useEffect(() => {
        if (User.mentorProfile?.currentDutyName) {
            setIncumbentValue(User.mentorProfile.currentDutyName);
        }
    }, [User.mentorProfile?.currentDutyName])

    useEffect(() => {
        if (User.mentorProfile?.skillStacks) {
            setSkillStackList(User.mentorProfile.skillStacks)
        }
    }, [User.mentorProfile?.skillStacks])

    useEffect(() => {
        if (User.mentorProfile?.introduction) {
            setIntroduction(User.mentorProfile.introduction)
        }
    }, [User.mentorProfile?.introduction])

    useEffect(() => {

        if (User.mentorProfile?.careers) {
            User.mentorProfile.careers?.map((item) => {
                let career = (item["dutyName"] + "||" + item["period"])
                setCareerList(prev => [...prev, career])
            })
        }
    }, [User?.mentorProfile?.careers])



    useEffect(() => {
        setCareerObjects([]);
        if (careerList.length > 0) {
            careerList.map((career) => {
                let [dutyName, period] = career.split('||')
                setCareerObjects(prev => [
                    ...prev,
                    {
                        "dutyName": dutyName,
                        "period": period
                    }
                ])
            })
        }
    }
        , [careerList,])





    const NickNameFixHandler = () => {
        setEnterNickname(prev => !prev)
    }
    const JobFixHandler = () => {
        setEnterIncumbentJob(prev => !prev)
    }
    const IntroductionFixHandler = () => {
        setEnterIntroduction(prev => !prev)
    }
    const EnteredNickNameCheck = (event) => {
        let enteredNickName = event.target.value;
        // 특수문자 및 빈 문자열 체크
        const pattern = /[~!@#\\#$%<>^&*\s]/;
        const check = enteredNickName.trim();
        if (pattern.test(check) || check === "") {
            return
        } else {
            setNicknameValue(enteredNickName.trim());
        }
    }
    const EnteredincumbentJobCheck = (event) => {
        let enteredincumbentJobCheck = event.target.value;
        // 특수문자 및 빈 문자열 체크
        const pattern = /[~!@#\\#$%<>^&*\s]/;
        const check = enteredincumbentJobCheck.trim();
        if (pattern.test(check) || check === "") {
            return
        } else {
            setIncumbentValue(enteredincumbentJobCheck.trim());
        }
    }
    const keyEnterNickname = (event) => {
        if (event.key === "Enter") {
            setEnterNickname(prev => !prev)
            let enteredNickName = event.target.value;
            // 특수문자 및 빈 문자열 체크
            const pattern = /[~!@#\\#$%<>^&*\s]/;
            const check = enteredNickName.trim();
            if (pattern.test(check) || check === "") {
                return
            } else {

                setNicknameValue(enteredNickName.trim());
            }
        }
    }
    const keyEnterIncumbent = (event) => {
        if (event.key === "Enter") {
            setEnterIncumbentJob(prev => !prev)
            let enteredNickName = event.target.value;
            // 특수문자 및 빈 문자열 체크
            const pattern = /[~!@#\\#$%<>^&*\s]/;
            const check = enteredNickName.trim();
            if (pattern.test(check) || check === "") {
                return
            } else {
                setIncumbentValue(enteredNickName.trim());
            }
        }
    }
    const blurNickNameBox = () => {
        setEnterNickname(false)
    }
    const blurIncumbentJobNameBox = () => {
        setEnterIncumbentJob(false)
    }

    const blurIntroductionBox = () => {
        setIntroduction(textRef.current.value)
        setEnterIntroduction(false)
    }
    const fixNickName = () => {
        setEnterNickname(prev => !prev)
        return
    }

    const addCareerHandler = () => {
        let duty = dutyType
        let years = dutyYearRef.current.value
        let month = dutyMonthRef.current.value
        const pattern = /[~!@#$%^&*()]/
        if (pattern.test(duty)) {
            return
        }

        if (month > 12) {
            duty = '';
            dutyYearRef.current.value = '';
            dutyMonthRef.current.value = '';
            return
        }
        if (years === '' && month === '') {
            duty = '';
            dutyYearRef.current.value = '';
            dutyMonthRef.current.value = '';
            return
        } if (years === '0' && month === '0') {
            duty = '';
            dutyYearRef.current.value = '';
            dutyMonthRef.current.value = '';
            return
        }

        if (years === '' || years === "0") {
            let mentoCareer = duty + "||" + month + "개월"
            setCareerList((prev) => [...prev, mentoCareer]);
            duty = '';
            dutyYearRef.current.value = '';
            dutyMonthRef.current.value = '';
            return
        }

        if (month === '' || month === "0") {
            let mentoCareer = duty + "||" + years + "년"
            setCareerList((prev) => [...prev, mentoCareer]);
            duty = '';
            dutyYearRef.current.value = '';
            dutyMonthRef.current.value = '';
            return
        }
        let mentoCareer = duty + "||" + years + "년" + month + "개월"
        setCareerList((prev) => [...prev, mentoCareer]);
        duty = '';
        dutyYearRef.current.value = '';
        dutyMonthRef.current.value = '';
    }

    const careerEnterKeyDown = (event) => {
        if (event.key === "Enter") {
            console.log("엔터키를 눌렀다")
            addCareerHandler()
        }
    }
    const addCareerButton = () => {
        addCareerHandler()
    }

    const dutyDeleteHandler = (index) => {
        const updatedCareerList = careerList.filter((item, i) => i !== index);
        setCareerList(updatedCareerList)
    }

    const skillDeleteHandler = (index) => {
        const updatedCareerList = skillStackList.filter((item, i) => i !== index);
        setSkillStackList(updatedCareerList)

    }

    //기술스택 설정하는곳
    // 선택한 옵션에 따라 하위 옵션을 설정하는 함수
    const handleSkillOptionChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedOption(selectedValue);

        // 선택한 옵션에 따라 하위 옵션을 동적으로 설정
        if (selectedValue === 'BACKEND') {
            setSubOptions(['선택하세요', 'JAVA', 'SPRING', 'JPA', 'SPRING_BOOT', 'SPRING_JDBC', 'SQL', 'DBMS_RDBMS', 'REDIS', 'POSTGRE_SQL', 'MSA']);
        } else if (selectedValue === 'FRONTEND') {
            setSubOptions(['선택하세요', 'REACT', 'REACT_NATIVE', 'VUE', 'TYPE_SCRIPT', 'NEXT_JS', 'SVELTE', 'JAVA_SCRIPT']);
        } else if (selectedValue === 'INFRA') {
            setSubOptions(['선택하세요', 'KUBERNETES', 'JENKINS', 'GITHUB_ACTION', 'HARBOR', 'DOCKER',]);
        } else if (selectedValue === 'PROGRAMMING_LANGUAGE') {
            setSubOptions(['선택하세요', 'PYTHON', 'KOTLIN', 'C_PLUS_PLUS', 'TYPE_SCRIPT', 'JAVA', 'JAVA_SCRIPT', 'RUBY', 'GO', 'RUST']);
        } else if (selectedValue === 'DBA') {
            setSubOptions(['선택하세요', 'DBMS_RDBMS', 'MYSQL', 'MONGODB', 'MARIA', 'ORACLE']);
        } else {
            setSubOptions([]);
        }
    };

    const handleIncumbentJobChange = (event) => {
        const selectedValue = event.target.value;
        console.log(selectedValue)
        setDutyType(selectedValue)

    }


    const selectSkill = (event) => {
        const selectedSkill = event.target.value;
        // 선택한 기술스택을 처리하는 로직을 여기에 추가하세요
        if (selectedSkill === "선택하세요") {
            return
        }
        console.log('선택한 기술스택:', selectedSkill);
        setSkillStackList(prev => [...prev, selectedSkill])
    }

    const fixMentorInformation = async () => {

        console.log(FIXINFORMATION)
        const response = await axios.post('https://codevelop.store/api/v1/mentors/info',
            FIXINFORMATION,
            {
                headers: {
                    Authorization: accesstoken
                }
            })
        console.log(response)
    }


    return (
        <>
            <S.FixInformationContainer>
                {enterNickanme ?
                    <S.FixInformationBox>
                        <S.FixInformationLabel>닉네임</S.FixInformationLabel>
                        <S.FixInformationMentiNameInput placeholder='멘토의 이름' onChange={EnteredNickNameCheck} onKeyDown={keyEnterNickname} onBlur={blurNickNameBox} autoFocus></S.FixInformationMentiNameInput>

                    </S.FixInformationBox>
                    :
                    <S.FixInformationBox>
                        <S.FixInformationLabel>닉네임</S.FixInformationLabel>
                        {!nicknameValue ?
                            <S.FixInformationMentiName onClick={NickNameFixHandler}>{nicknameValue}</S.FixInformationMentiName>
                            : <S.FixInformationMentiName onClick={NickNameFixHandler}>{nicknameValue}</S.FixInformationMentiName>
                        }
                        <S.NickNameFixButton onClick={fixNickName}>수정</S.NickNameFixButton>
                    </S.FixInformationBox>
                }

                <div>
                    <S.FixInformationBox>
                        <S.FixInformationLabel>경력</S.FixInformationLabel>
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

                        <S.MentoCareerYearInput type="number" ref={dutyYearRef} placeholder='년' onKeyDown={careerEnterKeyDown} />
                        <S.MentoCareerMonthInput type="number" ref={dutyMonthRef} placeholder='개월' onKeyDown={careerEnterKeyDown} />
                        <S.NickNameFixButton onClick={addCareerButton}>추가</S.NickNameFixButton>
                    </S.FixInformationBox>
                </div>
                <S.FixInformationBox>
                    <S.FixInformationLabel>기술스택</S.FixInformationLabel>

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
                            <label style={{ margin: "0 5px" }}>소분류</label>
                            <S.SkillStackSelect onChange={selectSkill}>
                                {subOptions.map((option) => (
                                    <option key={option} value={option} >
                                        {option}
                                    </option>
                                ))}
                            </S.SkillStackSelect>
                        </div>
                    )}

                </S.FixInformationBox>


                {enterIncumbentJob ?
                    <S.FixInformationBox>
                        <S.FixInformationLabel>현직</S.FixInformationLabel>
                        <S.FixInformationMentiIncumbentJobInput placeholder='현재 직업을 입력해주세요' onChange={EnteredincumbentJobCheck} onKeyDown={keyEnterIncumbent} onBlur={blurIncumbentJobNameBox} autoFocus></S.FixInformationMentiIncumbentJobInput>
                    </S.FixInformationBox>
                    :
                    <S.FixInformationBox>
                        <S.FixInformationLabel>현직</S.FixInformationLabel>
                        <S.FixInformationMentiIncumbentJob onClick={JobFixHandler} >  {incumbentValue}</S.FixInformationMentiIncumbentJob>

                    </S.FixInformationBox>
                }

                <div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <S.FixInformationLabel>경력  </S.FixInformationLabel><span style={{ fontSize: "0.8rem", color: "#F48070", letterSpacing: "0.2rem" }}>*누르면삭제되요</span>
                    </div>
                    <S.DivGrid>
                        {careerList.map((item, index) => {
                            return (
                                <S.dutyTag key={index} onClick={() => dutyDeleteHandler(index)}>{item}
                                </S.dutyTag>
                            )
                        })}
                    </S.DivGrid>
                </div>

                <div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <S.FixInformationLabel>기술스택  </S.FixInformationLabel><span style={{ fontSize: "0.8rem", color: "#F48070", letterSpacing: "0.2rem" }}>*누르면삭제되요</span>
                    </div>
                    <S.DivGrid>
                        {skillStackList.map((item, index) => {
                            return (
                                <S.dutyTag key={index} onClick={() => skillDeleteHandler(index)}>{item}
                                </S.dutyTag>
                            )
                        })}
                    </S.DivGrid>
                </div>
            </S.FixInformationContainer >

            <S.FixInformationContainer>
                멘토의 한줄소개
                {enterIntroduction ?
                    <>
                        <S.introductionMentor style={{ width: "100%", height: "50px" }} placeholder='한줄 소개 입력하기' ref={textRef} autoFocus onBlur={blurIntroductionBox}></S.introductionMentor>
                        <button>수정하기</button>
                    </>
                    :
                    <div onClick={IntroductionFixHandler}>{introduction}</div>
                }
                <S.introductionMentor style={{ width: "100%", height: "50px" }} placeholder='한줄 소개 입력하기' ref={textRef} onBlur={blurIntroductionBox}></S.introductionMentor>
            </S.FixInformationContainer>
            <button onClick={fixMentorInformation}>수정</button>
        </>
    );
};
export default FixInformation;
