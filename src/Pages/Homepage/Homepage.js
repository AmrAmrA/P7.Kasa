import React from "react";
import { Link } from "react-router-dom";
import { Data } from "../../Data";
import backgroundHomePage from "./background_homepage.png";
import "./__Homepage.scss";

export default function Homepage() {
  return (
    <section className="homepage">
      <article className="background">
        <img src={backgroundHomePage} alt="" className="background__image" />
        <h1 className="background__title">Chez vous et partout ailleurs </h1>
      </article>
      <article className="lodgementContainer">
        {Data.map((card, index) => {
          return (
            <Link to={`/logements/${card.id}`}>
              <ul className="box">
                <img
                  src={card.cover}
                  alt={card.title}
                  className="box__cover"
                />
                <h2 className="box__title">{card.title}</h2>
                <div className="box__filter"></div>
              </ul>
            </Link>
          );
        })}
      </article>
    </section>
  );
}