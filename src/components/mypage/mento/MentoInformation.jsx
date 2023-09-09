/* eslint-disable react/prop-types */

import * as S from 'src/pages/my/mentoMyLayout.style'

import InformationHead from './InformationHead';



const MentoInformation = ({ informationtype, navtype }) => {
    //상태관리


    if (informationtype === navtype.borad) {
        return (
            <>
                <S.InformationContainer>
                    <S.DivFlexColumn>
                        <S.InformationBox>
                            <InformationHead text={navtype.borad} />
                        </S.InformationBox>

                    </S.DivFlexColumn>
                </S.InformationContainer>
            </>
        );
    }
    if (informationtype === navtype.info) {
        return (
            <>
                <S.InformationContainer>
                    <S.DivFlexColumn>
                        <S.InformationBox>
                            <InformationHead text={navtype.info} />
                        </S.InformationBox>

                    </S.DivFlexColumn>
                </S.InformationContainer>
            </>
        );
    }
    if (informationtype === navtype.reservation) {
        return (
            <>
                <S.InformationContainer>
                    <S.DivFlexColumn>
                        <S.InformationBox>
                            <InformationHead text={navtype.reservation} />
                        </S.InformationBox>

                    </S.DivFlexColumn>
                </S.InformationContainer>
            </>
        );
    }
    if (informationtype === navtype.logout) {
        return (
            <>
                <S.InformationContainer>
                    <S.DivFlexColumn>
                        <S.InformationBox>
                            <InformationHead text={navtype.logout} />
                        </S.InformationBox>

                    </S.DivFlexColumn>
                </S.InformationContainer>
            </>
        );
    }
};

export default MentoInformation;