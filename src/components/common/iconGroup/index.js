import React from "react";
import "./iconGrp.css";

const IconGrp = ({ display }) => {
  return (
    <>
      <div className="pre-navbar-logos flex gap-1 cursor-pointer">
        <div className="pre-navbar-logo flex absolute-center facebook ">
          <i className="fa-brands fa-facebook-f"></i>
        </div>
        <div className="pre-navbar-logo absolute-center flex twitter">
          <i className="fa-brands fa-twitter"></i>
        </div>
        <div className="pre-navbar-logo absolute-center flex google">
          <i className="fa-brands fa-google-plus-g"></i>
        </div>
      </div>
    </>
  );
};

export default IconGrp;
