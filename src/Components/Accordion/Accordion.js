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
        {" "}
        {title} <img src={Accordion__icon} alt="" className="accordion__icon" />
      </div>
      <div className="accordion__content">{content}</div>
    </div>
  );
}

export default Accordion;
