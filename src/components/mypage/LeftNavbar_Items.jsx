// import React from 'react'
import { NavBarItems } from "src/pages/my/mentiMyLayout.style";


const LeftNavbar_Items = ({ navItemHandler, type }) => {

    return (
        <>
            <NavBarItems onClick={() => navItemHandler(type)}>{type}</NavBarItems>
        </>
    );
};

export default LeftNavbar_Items;