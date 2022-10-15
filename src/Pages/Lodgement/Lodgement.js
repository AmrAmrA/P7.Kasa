import React from "react";
import { useParams } from "react-router-dom";
import { Data } from "../../Data";
import Accordion from "../../Components/Accordion/Accordion";
import "./__Lodgement.scss";
import redStar from "./redStar.png";
import greyStar from "./greyStar.png";

export default function Lodgement() {
  const params = useParams();

  const starsArray = [1, 2, 3, 4, 5];
  return (
    <>
      <div className="container__lodgement">
        {Data.filter((card) => card.id === params.id).map((card, index) => (
          <div key={index} className="fullcard">
            <img
              src={card.cover}
              alt="Un slider de plusieurs clichés pour présenter l'appartement"
              className="image__lodgement"
            />

            <div className="lodgementDescription">
              <div className="geographicInofrmations">
                <h1>{card.title}</h1>
                <p>{card.location}</p>
              </div>
              <div className="hostInformations">
                <p>{card.host.name}</p>
                <img
                  src={card.host.picture}
                  alt={`L'hôte de la maison: ${card.host.name}`}
                />
              </div>
            </div>

            <div className="lodgementInformations">
            <ul className="tagsList">
              {card.tags.map((tagsItem, index) => (
                <li className="tagsItems"> {tagsItem} </li>
              ))}
            </ul>

            <div className="starsList">
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
            <p></p>
          </div>
        ))}
      </div>
    </>
  );
}
