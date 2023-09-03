
import axios from 'axios';
import { useState } from 'react'
import * as S from "src/pages/my/mentiMyLayout.style";

import LabelInputbox from "./LabelInputbox";
import LabelValuebox from "./LabelValuebox";


const FIxInformation = ({ Menti }) => {
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



    return (
        <>
            <S.FIxInformationContainer>
                <div>

                </div>

                {enterNickanme ?
                    <S.DivFlex>
                        <LabelInputbox label={"닉네임"} setEnterNickname={setEnterNickname} setNicknameValue={setNicknameValue} ></LabelInputbox>
                        <S.FixButton onClick={() => duplicateCheck(nicknameValue)}>중복확인</S.FixButton>
                    </S.DivFlex>
                    :
                    <S.DivFlex>
                        <LabelValuebox label={"이름"} description={Menti.name} setEnterNickname={setEnterNickname}></LabelValuebox>
                        <S.FixButton>중복확인</S.FixButton>
                    </S.DivFlex>
                }

                <LabelValuebox label={"이메일"} description={Menti.email}></LabelValuebox>
                <LabelValuebox label={"닉네임"} description={Menti.nickname}></LabelValuebox>
                <LabelValuebox label={"보유 포인트"} description={Menti.point}></LabelValuebox>


                <S.FixButton>회원정보수정하기</S.FixButton>

            </S.FIxInformationContainer>

        </>
    );
};

export default FIxInformation;

