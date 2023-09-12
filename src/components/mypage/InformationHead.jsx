import * as S from 'src/pages/my/mentiMyLayout.style'

const InformationHead = ({ text }) => {
    return (
        <>
            <div>
                <S.InformationHeadContainer>
                    <S.InformationHeadText>
                        {text}
                    </S.InformationHeadText>
                </S.InformationHeadContainer>
            </div>

        </>
    );
};

export default InformationHead;