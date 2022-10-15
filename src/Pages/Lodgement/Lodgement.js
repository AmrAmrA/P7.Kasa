import React from "react";
import { useParams } from "react-router-dom";
import { Data } from "../../Data";
import "./__Lodgement.scss";
import redStar from "./redStar.png";
import greyStar from "./greyStar.png";
export default function Lodgement() {
  const params = useParams();

  const starsArray = [1, 2, 3, 4, 5];
  return (
    <>
      <p>{params.id}</p>
      <div className="container">
        {Data.filter((card) => card.id === params.id).map((card, index) => (
          <div key={index} className="fullcard">
            <h1>{card.title}</h1>
            <h1>{card.location}</h1>
            <p>{card.description}</p>
            <img
              src={card.host.picture}
              alt={`L'hôte de la maison: ${card.host.name}`}
            />
            <p>{card.host.name}</p>
            <ul>
              {card.equipments.map((cardItem, index) => (
                <li>{cardItem} </li>
              ))}
              ;
            </ul>
            <ul>
              {card.tags.map((tagsItem, index) => (
                <li> {tagsItem} </li>
              ))}
              ;
            </ul>
            <div>
              {starsArray.map((index) => (
                <img
                  alt="Nombre d'étoiles pour évaluer la qualité du logement"
                  className="star"
                  key={index}
                  src={index <= card.rating ? redStar : greyStar}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
