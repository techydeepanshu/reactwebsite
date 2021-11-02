import React from 'react';
import HomeImage from "../../src/images/img1.svg";
import { NavLink } from 'react-router-dom';

const Common=(props)=> {

    return (
        <>
         <div className="container-fluid nav-bg container_home">
            <div className="row">
              <div className="col-10 mx-auto">
                  <div className="row mt-4">

                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column  justify-content-center">
                    <h1 className="title">{props.compTitle}<strong>{props.strongTitle}</strong></h1>
                    <p>We are the team of talented developer making websites</p>
                    <div className="mt-3">
                        <NavLink to={props.compBtnPath} className="btn-get-started"> {props.compBtn} </NavLink>
                    </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                    <img src={props.compImage} className="animation" alt="home" />
                </div>
 
                  </div>

        </div>
      </div>
    </div>
        </>
    )
}

export default Common;
