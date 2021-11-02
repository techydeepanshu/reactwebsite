import React from 'react'
import Common from './Common';
import HomeImage from "../../src/images/img2.svg";

const About=()=> {
    return (
        <>
            <Common 
              compTitle = "Welcome to About Page"
              compBtn = "Contact Us"
              compBtnPath = "/contact"
              compImage = {HomeImage}

            />
        </>
    )
}

export default About;