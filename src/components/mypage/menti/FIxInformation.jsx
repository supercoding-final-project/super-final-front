
import axios from 'axios';
import { useState } from 'react'
import * as S from "src/pages/my/mentiMyLayout.style";

import LabelInputbox from "./LabelInputbox";
import LabelValuebox from "./LabelValuebox";


const FIxInformation = () => {
    const [enterNickanme, setEnterNickname] = useState(false)
    const [nicknameValue, setNicknameValue] = useState("");
    // const [,] = useState()
    // const [fixNickname, setFixNickname] = useState('')


    //서버에 중복확인 요청보내기
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

    const usernickname = "하츠네미쿠"

    return (
        <>
            <S.FIxInformationContainer>
                <div>

                </div>

                {enterNickanme ?
                    <S.DivFlex>
                        <LabelInputbox label={"닉네임"} setNicknameValue={setNicknameValue} ></LabelInputbox>
                        <S.FixButton onClick={() => duplicateCheck(nicknameValue)}>중복확인</S.FixButton>
                    </S.DivFlex>
                    :
                    <S.DivFlex>
                        <LabelValuebox label={"닉네임"} description={usernickname} setEnterNickname={setEnterNickname}></LabelValuebox>
                        <S.FixButton>중복확인</S.FixButton>
                    </S.DivFlex>
                }

                <LabelValuebox label={"이메일"} description={"MIKU@MIKU.COM"}></LabelValuebox>
                <LabelValuebox label={"비밀번호"} description={"하츠네미쿠"}></LabelValuebox>
                <LabelValuebox label={"닉네임"} description={"하츠네미쿠"}></LabelValuebox>


                <button>회원정보수정하기</button>

            </S.FIxInformationContainer>

        </>
    );
};

export default FIxInformation;

