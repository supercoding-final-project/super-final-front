// import React from 'react';

// import { useState } from 'react';
import { NavBarContainer } from 'src/pages/my/mentiMyLayout.style';

import LeftNavbar_Items from './LeftNavbar_Items';

const LeftNavbar = ({ navItemHandler, navtype }) => {

    // const [select, setSelect] = useState("정보수정")

    const navItemLists = Object.keys(navtype)


    return (
        <div>
            <NavBarContainer >
                {navItemLists.map((item, idx) =>
                    <LeftNavbar_Items key={idx} navItemHandler={navItemHandler} type={navtype[item]} />
                )}
            </NavBarContainer>
        </div>
    );
};

export default LeftNavbar;