import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
    <div className="container-fluid nav-bg">
      <div className="row">
        <div className="col-10 mx-auto">

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            React World
          </NavLink>
         
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
               

              <li className="nav-item">
                <NavLink exact activeClassName="menu_active" className="nav-link  " to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact activeClassName="menu_active" className="nav-link  " to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact activeClassName="menu_active" className="nav-link  " to="/services">
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact activeClassName="menu_active" className="nav-link  " to="/contact">
                  Contact
                </NavLink>
              </li>
              
               
            </ul>
          </div>
        </div>
      </nav>
        </div>
      </div>
    </div>
    </>
  );
}

export default Navbar;
