import React from "react";
import { Link } from "react-router-dom";
import { Data } from "../../Data";
import backgroundHomePage from "./background_homepage.png";
import "./__Homepage.scss";

export default function Homepage() {
  return (
    <main className="homepage">
      <div className="background">
        <img src={backgroundHomePage} alt="" className="background__image" />
        <h1 className="background__title">Chez vous et partout ailleurs </h1>
      </div>
      <section className="lodgementContainer">
        {Data.map((card, index) => {
          return (
            <article>
              <Link to={`/logements/${card.id}`}>
                <div className="box">
                  <img
                    src={card.cover}
                    alt={card.title}
                    className="box__cover"
                  />
                  <h2 className="box__title">{card.title}</h2>
                  <div className="box__filter"></div>
                </div>
              </Link>
            </article>
          );
        })}
      </section>
    </main>
  );
}
