import React from "react";
import {
  PreNavbar,
  Navbar,
  Slider,
  Experience,
  About,
  Services,
  Team,
  Gallery,
  Rooms,
  ContactUs,
  VisitorExpression,
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
      <Gallery />
      <Rooms />
      <VisitorExpression />
      <ContactUs />
    </>
  );
};

export default HomePage;
