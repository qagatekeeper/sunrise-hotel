import React from "react";
import IconGrp from "../iconGroup";
import "./preNavbar.css";

const PreNavbar = () => {
  return (
    <div className="pre-navbar-wrapper">
      <div className="pre-navbar flex absolute-center jc-space-beetwen">
        <IconGrp />
        <div className="pre-navbar-contacts-menus">
          <div className="pre-navbar-contacts-menu-items flex">
            <div className="pre-navbar-menu-item flex gap-1">
              <div className="pre-navbar-menu-icon ">
                <i class="fa-solid fa-envelope"></i>
              </div>
              <div className="pre-navbar-menu-text">
                <a href="#">info@sunrise.com</a>
              </div>
            </div>
            <div className="pre-navbar-menu-item flex gap-1">
              <div className="pre-navbar-menu-icon">
                <i class="fa-solid fa-phone"></i>
              </div>
              <div className="pre-navbar-menu-text">+94(65)222-44-55</div>
            </div>
            <div className="pre-navbar-menu-item search-bar flex absolute-center">
              <i class="fa-solid fa-magnifying-glass serchbar-icon"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreNavbar;
