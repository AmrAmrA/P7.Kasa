import React from "react";
import { useParams } from "react-router-dom";
import LodgmentData from '../../logements'
import Accordion from "../../Components/Accordion/Accordion";
import Slider from "../../Components/Slider/Slider";
import Error from "../../Pages/Error/Error";
import "./__Lodgement.scss";
import redStar from "./redStar.png";
import greyStar from "./greyStar.png";

export default function Lodgement() {
  // A hook who allows us to display data for every differnt ID inside the JSON File
  const params = useParams();
  // Number of stars to compare with our stars array from JSON Data
  const starsArray = [1, 2, 3, 4, 5];

  const index = LodgmentData.findIndex((el) => el.id === params.id);

  if (index === -1) return <Error />;

  return (
    <main className="container__lodgement">
      <Slider />
      {LodgmentData.filter((card) => card.id === params.id).map((card, index) => (
        <section key={index} className="fullcard">
          <article className="lodgementDescription">
            <div className="geographicInofrmations">
              <h1>{card.title}</h1>
              <p>{card.location}</p>
              <ul className="tagsList">
                {card.tags.map((tagsItem, index) => (
                  <li className="tagsItems"> {tagsItem} </li>
                ))}
              </ul>
            </div>
            <div className="hostInformations">
              <div className="name__image">
                <p>{card.host.name}</p>
                <img
                  src={card.host.picture}
                  alt={`L'hôte de la maison: ${card.host.name}`}
                  className="profil__picture"
                />
              </div>
              <div className="starsList">
                {starsArray.map((index) => (
                  <img
                    alt="Nombre d'étoiles pour évaluer la qualité du logement"
                    className="star"
                    key={index}
                    // A ternary to present the number of red stars according to the stars that come from the Json file
                    src={index <= card.rating ? redStar : greyStar}
                  />
                ))}
              </div>
            </div>
          </article>
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
        </section>
      ))}
    </main>
  );
}
