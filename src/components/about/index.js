import React from "react";
import "./about.css";
import aboutImg from "../../asserts/images/about.jpg";
import aboutImg1 from "../../asserts/images/a1.jpg";

const About = () => {
  return (
    <div className="about-wrapper" id="about">
      <div className="max-width text-center">
        <div className="about">
          <div className="about-title">About Our SUN RISE</div>
          <div className="about-para ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.Sed tempus vestibulum lacus blandit faucibus. Nunc
            imperdiet, diam nec rhoncus ullamcorper, nisl nulla suscipit ligula,
            at imperdiet urna
          </div>
          <img src={aboutImg} alt="aboutImg" className="about-img" />
          <img
            src={aboutImg1}
            alt="aboutImg"
            className="about-img about-img1"
          />
          <div className="about-info">
            <h4>You'll love all the amenities we offer!</h4>
            <p>Lorem ipsum dolor sit amet, ut magna aliqua. </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;