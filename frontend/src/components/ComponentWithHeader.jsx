import React from "react";
import {Outlet} from "react-router-dom";
import Header from "./Header";


const ComponentWithHeader = () => {
    return (
        <>
            <Header/>
            <Outlet/>
        </>
    );
};

export default ComponentWithHeader;
