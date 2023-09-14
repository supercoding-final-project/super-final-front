/* eslint-disable react/prop-types */
// import React from 'react';

// import { useState } from 'react';
import LeftNavbar_Items from 'src/components/mypage/LeftNavbar_Items';
import LeftNavbarHead from "src/components/mypage/LeftNavbarHead"
import * as S from 'src/pages/my/mentiMyLayout.style';

const LeftNavbar = ({ navItemHandler, navtype, User }) => {
    const navItemLists = Object.keys(navtype)


    return (
        <>
            <S.NavBarContainer >
                <S.NavContentBox>
                    <LeftNavbarHead User={User}></LeftNavbarHead>
                    {navItemLists.map((item, idx) =>
                        <LeftNavbar_Items key={idx} navItemHandler={navItemHandler} type={navtype[item]} />
                    )}
                </S.NavContentBox>
            </S.NavBarContainer>
        </>
    );
};

export default LeftNavbar;
