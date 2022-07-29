import React, { useState } from "react";
import "./navbar.css";
import { menuList } from "../../../helpers/data/navbarData.js";

const Navbar = () => {
  const [active, setActive] = useState("home");

  return (
    <div className="navbar-wrapper flex absolute-center">
      <div className="navbar-container container">
        <div className="navbar flex ai-center jc-space-between">
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
                {menuList.map((item, index) => (
                  <li className="navbar-menu-item" key={index}>
                    <a
                      href={`#${item.name}`}
                      onClick={() => setActive(`${item.name}`)}
                      className={`navbar-menu-link ${
                        active === `${item.name}` ? "active" : ""
                      }`}
                    >
                      {`${item.name}`}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
