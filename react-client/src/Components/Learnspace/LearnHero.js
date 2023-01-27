import React from "react";
import Typical from "react-typical";
import "./LearnHero.css";
import Arrow from "../UI elements/Arrow";

const LearnHero = () => {
  return (
    <div className="herol-container">
      <h1>
        <Typical
          steps={["Hi There!", 1000, "Welcome to Learnspace!", 1000]}
          loop={Infinity}
          wrapper="b"
        />
      </h1>
      <div className="herol-btns">
          <Arrow />
      </div>
    </div>
  );
};

export default LearnHero;
