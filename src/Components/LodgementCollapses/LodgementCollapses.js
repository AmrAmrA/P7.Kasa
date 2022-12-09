import React from "react";
import { useParams } from "react-router-dom";
import Accordion from "../../Components/Accordion/Accordion";
import LodgmentData from "../../logements";
import "./__LodgementCollapses.scss";

export default function LodgementCollapses() {
  const params = useParams();
  return (
    <>
      {LodgmentData.filter((card) => card.id === params.id).map(
        (card, index) => (
          <div className="accordions">
            <Accordion title="Description" content={card.description} />
            <Accordion
              title="Équipements"
              content=<ul>
                {card.equipments.map((cardItem, index) => (
                  <li>{cardItem} </li>
                ))}
              </ul>
            />
          </div>
        )
      )}
    </>
  );
}
