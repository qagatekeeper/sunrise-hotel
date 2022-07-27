import React, { useState } from "react";
import "./navbar.css";
const Navbar = () => {
  const [active, setActive] = useState("home");

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
                  <a
                    href="#home"
                    onClick={() => setActive("home")}
                    className={`navbar-menu-link ${
                      active === "home" ? "active" : ""
                    }`}
                  >
                    home
                  </a>
                </li>
                <li className="navbar-menu-item">
                  <a
                    href="#about"
                    onClick={() => setActive("about")}
                    className={`navbar-menu-link ${
                      active === "about" ? "active" : ""
                    }`}
                  >
                    about
                  </a>
                </li>
                <li className="navbar-menu-item">
                  <a
                    href="#team"
                    onClick={() => setActive("team")}
                    className={`navbar-menu-link ${
                      active === "team" ? "active" : ""
                    }`}
                  >
                    team
                  </a>
                </li>
                <li className="navbar-menu-item">
                  <a
                    href="#gallery"
                    onClick={() => setActive("gallery")}
                    className={`navbar-menu-link ${
                      active === "gallery" ? "active" : ""
                    }`}
                  >
                    gallery
                  </a>
                </li>
                <li className="navbar-menu-item">
                  <a
                    href="#rooms"
                    onClick={() => setActive("rooms")}
                    className={`navbar-menu-link ${
                      active === "rooms" ? "active" : ""
                    }`}
                  >
                    rooms
                  </a>
                </li>
                <li className="navbar-menu-item">
                  <a
                    href="#contact-us"
                    onClick={() => setActive("contact-us")}
                    className={`navbar-menu-link ${
                      active === "contact-us" ? "active" : ""
                    }`}
                  >
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
