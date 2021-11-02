import React from 'react';
import HomeImage from "../../src/images/img1.svg";
import { NavLink } from 'react-router-dom';
import Common from "./Common";

const Home=()=> {

    return (
        <>
           <>
            <Common 
              compTitle = "Grow Your Business With"
              strongTitle = " TechyDeepanshu"
              compBtn = "Contact Us"
              compBtnPath = "/contact"
              compImage = {HomeImage}

            />
        </>
        </>
    )
}

export default Home;
