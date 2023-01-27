import React from "react";
import Footer from "../Homepage/Footer";
import SocietyCards from "./SocietyCards";
import SocietyHero from "./SocietyHero";

const Society = () => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
  return (
    <>
      <SocietyHero />
      <SocietyCards />
      <Footer />
    </>
  );
};

export default Society;
