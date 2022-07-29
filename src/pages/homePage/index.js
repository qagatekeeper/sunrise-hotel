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
      <ContactUs />
    </>
  );
};

export default HomePage;
