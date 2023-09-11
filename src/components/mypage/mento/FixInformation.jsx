
import axios from 'axios';
import { useState } from 'react'

import * as S from "@/pages/my/mentoMyLayout.style"


const FixInformation = ({ User, CareerDuty }) => {
    const [enterNickanme, setEnterNickname] = useState(false)
    const [EnterIncumbentJob, setEnterIncumbentJob] = useState(false)
    const [nicknameValue, setNicknameValue] = useState(User.nickname);
    const [incumbentValue, setIncumbentValue] = useState(User.incumbent);
    // const [,] = useState()
    // const [fixNickname, setFixNickname] = useState('')

    console.log(CareerDuty)
    //서버에 중복확인 요청보내기
    // eslint-disable-next-line no-unused-vars
    const duplicateCheck = (changedNickname) => {
        //유효성 검사 넣어야됨
        console.log(changedNickname)

        axios("url", {
            changedNickname,
        }).then(response => (console.log(response)
        )).catch(
            alert("안됨")
        )
    }

    const NickNameFixHandler = () => {
        setEnterNickname(prev => !prev)
    }
    const JobFixHandler = () => {
        setEnterIncumbentJob(prev => !prev)
    }
    const EnteredNickNameCheck = (event) => {

        let enteredNickName = event.target.value;
        // 특수문자 및 빈 문자열 체크
        const pattern = /[~!@#\\#$%<>^&*\s]/;
        const check = enteredNickName.trim();
        if (pattern.test(check) || check === "") {
            console.log("첫 글자 특문이거나 공백임 이거 안됨");
        } else {
            console.log("ㅇㅋ 통과");
            setNicknameValue(enteredNickName.trim());
        }
    }
    const EnteredincumbentJobCheck = (event) => {
        let enteredincumbentJobCheck = event.target.value;
        // 특수문자 및 빈 문자열 체크
        const pattern = /[~!@#\\#$%<>^&*\s]/;
        const check = enteredincumbentJobCheck.trim();
        if (pattern.test(check) || check === "") {
            console.log("첫 글자 특문이거나 공백임 이거 안됨");
        } else {
            console.log("ㅇㅋ 통과");
            setIncumbentValue(enteredincumbentJobCheck.trim());
        }
    }
    const keyEnter = (event) => {
        if (event.key === "Enter") {
            setEnterNickname(prev => !prev)
        }
    }
    const blurBox = () => {
        setEnterNickname(false)
    }
    const saveNickName = () => {
        console.log("저장버튼")
        return
    }



    return (
        <>
            <S.FixInformationContainer>
                {enterNickanme ?
                    <S.FixInformationBox>
                        <S.FixInformationLabel>닉네임</S.FixInformationLabel>
                        <S.FixInformationMentiNameInput placeholder='멘토의 이름' onChange={EnteredNickNameCheck} onKeyDown={keyEnter} onBlur={blurBox} autoFocus></S.FixInformationMentiNameInput>
                        <S.NickNameFixButton>수정</S.NickNameFixButton>
                    </S.FixInformationBox>
                    :
                    <S.FixInformationBox>
                        <S.FixInformationLabel>닉네임</S.FixInformationLabel>
                        <S.FixInformationMentiName onClick={NickNameFixHandler}>{nicknameValue}</S.FixInformationMentiName>
                        <S.NickNameFixButton onClick={saveNickName}>수정</S.NickNameFixButton>
                    </S.FixInformationBox>
                }

                <div>
                    <S.FixInformationBox>
                        <S.FixInformationLabel>경력</S.FixInformationLabel>
                        <S.FixInformationMentiIncumbentJobSelect>
                            <option value="" disabled selected>직무</option>
                            {CareerDuty.map((duty, index) => (
                                <S.CareersDuty key={index}>{duty}</S.CareersDuty>)
                            )}
                        </S.FixInformationMentiIncumbentJobSelect>
                        <S.MentoCareerYearInput placeholder='년' />
                        <S.MentoCareerMonthInput placeholder='개월' />
                        <S.NickNameFixButton onClick={addCareerHandler}>추가 </S.NickNameFixButton>
                    </S.FixInformationBox>


                </div>
                {EnterIncumbentJob ?
                    <S.FixInformationBox>
                        <S.FixInformationLabel>현직</S.FixInformationLabel>
                        <S.FixInformationMentiIncumbentJobInput placeholder='현재 직업을 입력해주세요' onChange={EnteredincumbentJobCheck} onKeyDown={keyEnter} onBlur={blurBox} autoFocus></S.FixInformationMentiIncumbentJobInput>
                        <S.NickNameFixButton>저장</S.NickNameFixButton>
                    </S.FixInformationBox>
                    :
                    <S.FixInformationBox>
                        <S.FixInformationLabel>현직</S.FixInformationLabel>
                        <S.FixInformationMentiIncumbentJob onClick={JobFixHandler}>{incumbentValue}</S.FixInformationMentiIncumbentJob>
                        <S.NickNameFixButton onClick={saveNickName}>수정</S.NickNameFixButton>
                    </S.FixInformationBox>
                }
            </S.FixInformationContainer>
        </>
    );
};
export default FixInformation;
