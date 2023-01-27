import React from "react";
import Footer from "../Homepage/Footer";
import PediaHero from "./PediaHero";
import PediaInfo from "./PediaInfo";

const Pedia = () => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
  return (
    <>
      <PediaHero />;
      <PediaInfo />;
      <Footer />;
    </>
  );
};

export default Pedia;
