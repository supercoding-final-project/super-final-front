
import { useState } from 'react'
import * as S from "src/pages/my/mentiMyLayout.style";
import { styled } from "styled-components";

import { LoadingSpinner } from '@/components/common/LoadingSpinner';
import LabelInputbox from "./LabelInputbox";
import LabelValuebox from "./LabelValuebox";


const FIxInformation = () => {
    const [enterNickanme, setEnterNickname] = useState(false)
    const [,] = useState()
    // const [fixNickname, setFixNickname] = useState('')


    //서버에 중복확인 요청보내기
    // const 중복확인요청보내기 =
    //     axios("url", {

    //     })

    const usernickname = "하츠네미쿠"

    return (
        <>
            <FIxInformationContainer>
                <div>

                </div>

                {enterNickanme ?
                    <S.DivFlex>
                        <LabelInputbox label={"닉네임"} description={usernickname} setEnterNickname={setEnterNickname} ></LabelInputbox>
                        <S.FixButton>중복확인</S.FixButton>
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

            </FIxInformationContainer>

        </>
    );
};

export default FIxInformation;

const FIxInformationContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 0.5rem;
`

