import React, { useState } from "react";
import "./adminNavbar.css";

const AdminNavbar = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  return (
    <div className="an-wrapper">
      <div className="container">
        <div className="admin-navbar flex jc-space-between">
          <div className="an-left">
            <div className="an-left-menu">left</div>
          </div>
          <div className="an-right">
            <div
              className="an-right-menu"
              onClick={() => setOpenDropdown(!openDropdown)}
            >
              <i className="uil uil-user"></i>
              <i className="uil uil-angle-down"></i>
              {openDropdown && (
                <div className="an-right-menu-dropdown flex flex-column">
                  <div className="an-right-menu-dropdown-item flex ai-center gap-1">
                    <i className="uil uil-user"></i>
                    <h5>User Profile</h5>
                  </div>
                  <div className="an-right-menu-dropdown-item flex ai-center gap-1">
                    <i className="uil uil-setting"></i>
                    <h5>Settings</h5>
                  </div>
                  <div className="an-right-menu-dropdown-item flex ai-center gap-1">
                    <i className="uil uil-signout"></i>
                    <h5>Logout</h5>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminNavbar;
