import React from "react";
import Footer from "../Homepage/Footer";
import Learnspace from "./Learnspace";
import LearnHero from "./LearnHero";

const Head = () => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
  return (
    <>
      <LearnHero />
      <Learnspace />
      <Footer />
    </>
  );
};

export default Head;
