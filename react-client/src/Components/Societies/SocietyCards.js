import React from "react";
import "./SocietyCard.css";
import SocietyCarditem from "./SocietyCarditem";
import DSC from "./DSC.png";
import COC from "./COC.jpg";
import SRA from "./SRA.png";
import Techno from "./Techno.png";
import Prati from "./Prati.jpg";
import Enthu from "./Enthu.jpg";

const Society_cards = (props) => {
  return (
    <div className="cardss">
      <div className="cardss__container">
        <div className="cardss__wrapper">
          <ul className="cardss__items">
            <SocietyCarditem
              src={DSC}
              text="DSC VJTI"
              path="https://www.dscvjti.tech/"
            />
            <SocietyCarditem
              src={COC}
              text="Community of Coders"
              path="https://communityofcoders.in/"
            />
          </ul>
          <ul className="cardss__items">
            <SocietyCarditem
              src={SRA}
              text="Society of Robotics & Automation"
              path="https://www.sravjti.in/"
            />
            <SocietyCarditem
              src={Techno}
              text="Technovanza, VJTI"
              path="https://technovanza.org/"
            />
          </ul>
          <ul className="cardss__items">
            <SocietyCarditem
              src={Prati}
              text="Pratibimb, VJTI"
              path="https://www.instagram.com/pratibimbvjti/?hl=en"
            />
            <SocietyCarditem
              src={Enthu}
              text="Enthusia, VJTI"
              path="http://enthusia.in/"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Society_cards;
