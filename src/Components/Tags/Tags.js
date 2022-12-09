import React from "react";
import { useParams } from "react-router-dom";
import LodgmentData from "../../logements";
import "./__Tags.scss";

export default function Tags() {
  const params = useParams();
  return (
    <>
      {LodgmentData.filter((card) => card.id === params.id).map(
        (card, index) => (
          <ul className="tagsList">
            {card.tags.map((tagsItem, index) => (
              <li className="tagsItems"> {tagsItem} </li>
            ))}
          </ul>
        )
      )}
    </>
  );
}
