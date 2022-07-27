import React from "react";
import {
  PreNavbar,
  Navbar,
  Slider,
  Experience,
  About,
  Services,
} from "../../components";

const HomePage = () => {
  return (
    <>
      <PreNavbar />
      <Navbar />
      <Slider />
      <Experience />
      <About />
      <Services />
    </>
  );
};

export default HomePage;
