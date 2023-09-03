/* eslint-disable react/prop-types */
// import React from 'react';

// import { useState } from 'react';
import * as S from 'src/pages/my/mentiMyLayout.style';

import LeftNavbar_Items from './LeftNavbar_Items';
import LeftNavbarHead from "./menti/LeftNavbarHead"

const LeftNavbar = ({ navItemHandler, navtype, menti }) => {

    // const [select, setSelect] = useState("정보수정")

    const navItemLists = Object.keys(navtype)


    return (
        <>
            <S.NavBarContainer >
                <S.NavContentBox>
                    <LeftNavbarHead menti={menti}></LeftNavbarHead>
                    {navItemLists.map((item, idx) =>
                        <LeftNavbar_Items key={idx} navItemHandler={navItemHandler} type={navtype[item]} />
                    )}
                </S.NavContentBox>
            </S.NavBarContainer>
        </>
    );
};

export default LeftNavbar;
