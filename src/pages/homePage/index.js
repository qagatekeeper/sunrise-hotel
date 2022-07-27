import React from "react";
import {
  PreNavbar,
  Navbar,
  Slider,
  Experience,
  About,
  Services,
  Team,
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
      <Team />
    </>
  );
};

export default HomePage;
