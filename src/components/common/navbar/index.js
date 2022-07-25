import React from "react";
import "./navbar.css";
const Navbar = () => {
  return (
    <div className="navbar-wrapper flex absolute-center">
      <div className="navbar-container container">
        <div className="navbar flex ai-center jc-space-beetwen">
          <div className="navbar-left">
            <h1 className>
              <a href="#123" className="navbar-brand">
                SUN
                <span> RISE</span>
                <p className="para">Your Dreamy Resort</p>
              </a>
            </h1>
          </div>
          <div className="navbar-right">
            <div className="navbar-menu">
              <ul className="navbar-menu-list flex">
                <li className="navbar-menu-item">
                  <a href="#123" className="navbar-menu-link">
                    home
                  </a>
                </li>
                <li className="navbar-menu-item">
                  <a href="#123" className="navbar-menu-link">
                    about
                  </a>
                </li>
                <li className="navbar-menu-item">
                  <a href="#123" className="navbar-menu-link">
                    team
                  </a>
                </li>
                <li className="navbar-menu-item">
                  <a href="#123" className="navbar-menu-link">
                    gallery
                  </a>
                </li>
                <li className="navbar-menu-item">
                  <a href="#123" className="navbar-menu-link">
                    rooms
                  </a>
                </li>
                <li className="navbar-menu-item">
                  <a href="#123" className="navbar-menu-link">
                    contact us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
