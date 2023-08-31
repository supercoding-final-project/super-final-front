
import * as S from "src/pages/my/mentiMyLayout.style"


const LabelInputbox = ({ label, setEnterNickname, description }) => {
    const blurInput = () => {
        setEnterNickname(prev => !prev)
    }

    return (
        <>
            <S.DivFlex>
                <S.Label htmlFor="">{label}</S.Label>
                <S.Input onBlur={blurInput} value={description}></S.Input>
            </S.DivFlex>

        </>
    );
};

export default LabelInputbox;