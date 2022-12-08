import React from "react";
import "./__Accordion.scss";
import { useState } from "react";
import Accordion__icon from "./chevron.png";
function Accordion({ title, content }) {
  const [active, setActive] = useState(false);

  const handleToggle = (e) => {
    setActive(!active);
  };

  return (
    <div className={`accordion ${active && "active"} `}>
      <div className="accordion__title" onClick={handleToggle}>
        <p>{title}</p>
        <img
          src={Accordion__icon}
          alt="Une flèche sur laquelle appuyer pour ouvrir ou fermer l'Accordion"
          className="accordion__icon"
        />
      </div>
      <p className="accordion__content">{content}</p>
    </div>
  );
}

export default Accordion;
