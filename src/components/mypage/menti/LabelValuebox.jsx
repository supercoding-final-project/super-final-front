
import * as S from "src/pages/my/mentiMyLayout.style"


const LabelValuebox = ({ label, description, setEnterNickname }) => {
    const enterNickName = () => {
        setEnterNickname(prev => !prev)
    }

    return (
        <>
            <S.DivFlex>
                <S.Label htmlFor="">{label}</S.Label>
                <S.Value onClick={enterNickName}>{description}</S.Value>
            </S.DivFlex>

        </>
    );
};

export default LabelValuebox;

