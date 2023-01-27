import React from "react";
import Footer from "../Homepage/Footer";
import Contact from "./Contact";
import SupportHero from "./SupportHero";

const Support = () => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
  return (
    <>
      <SupportHero />
      <Contact />
      <Footer />
    </>
  );
};

export default Support;
