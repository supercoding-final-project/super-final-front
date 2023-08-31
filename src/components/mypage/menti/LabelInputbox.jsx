/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import { useRef } from 'react';
import * as S from "src/pages/my/mentiMyLayout.style"

const LabelInputbox = ({ label, setNicknameValue }) => {

    const changedNickname = useRef('');

    const handleInputChange = (event) => {
        changedNickname.current = event.target.value;
        setNicknameValue(event.target.value); // 입력값 부모로 전달
    };
    return (
        <>
            <S.DivFlex>
                <S.Label htmlFor="">{label}</S.Label>
                <S.Input ref={changedNickname} autoFocus onChange={handleInputChange}></S.Input>
            </S.DivFlex>

        </>
    );
};


// 프로퍼티 타입 유효성 검사 추가
LabelInputbox.propTypes = {
    label: PropTypes.string,

};

export default LabelInputbox;