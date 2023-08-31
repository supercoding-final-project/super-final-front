
import PropTypes from 'prop-types';
import * as S from "src/pages/my/mentiMyLayout.style"

const LabelInputbox = ({ label, }) => {


    return (
        <>
            <S.DivFlex>
                <S.Label htmlFor="">{label}</S.Label>
                <S.Input autoFocus ></S.Input>
            </S.DivFlex>

        </>
    );
};


// 프로퍼티 타입 유효성 검사 추가
LabelInputbox.propTypes = {
    label: PropTypes.string,

};

export default LabelInputbox;