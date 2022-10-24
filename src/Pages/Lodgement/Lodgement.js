import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Data } from "../../Data";
import Accordion from "../../Components/Accordion/Accordion";
import "./__Lodgement.scss";
import redStar from "./redStar.png";
import greyStar from "./greyStar.png";
import leftArrow from "./leftArrow.png";
import rightArrow from "./rightArrow.png";

export default function Lodgement() {
  // A hook who allows us to display data for every differnt ID inside the JSON File
  const params = useParams();
  // Number of stars to compare with our stars array from JSON Data
  const starsArray = [1, 2, 3, 4, 5];
  // arbitrary value for our slider functions
  const length = 5; 
    // <div>
    //   {Data.filter((Lodgement) => Lodgement.id === params.id).map((Lodgement, index) => (
    //    <section>
    //     {Lodgement.pictures.filter((photo, index) => (
    //       console.log(photo.length)
    //     ))}
    //    </section>
    //   ))}
    // </div>

  const [current, setCurrent] = useState(0);
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === length ? 1 - 1 : current - 1);
  };
  return (
    <div className="container__lodgement">
      {Data.filter((card) => card.id === params.id).map((card, index) => (
        <div key={index} className="fullcard">
          <section className="slider">
            <img
              src={leftArrow}
              alt="Flèche gauche pour passer à la slide précédente"
              className="left__arrow"
              onClick={prevSlide}
            />
            <img
              src={rightArrow}
              alt="Flèche droite pour passer à la slide suivante"
              className="right__arrow"
              onClick={nextSlide}
            />
            {card.pictures.map((image, index) => {
              return (
                <div
                  className={index === current ? "slide active" : "slide"}
                  key={index}
                >
                  {" "}
                  {index === current && (
                    <img
                      src={image}
                      alt="Une série de slider pour présenter l'appartement"
                      className="centralImage"
                    />
                  )}
                </div>
              );
            })}
          </section>
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
  );
}
