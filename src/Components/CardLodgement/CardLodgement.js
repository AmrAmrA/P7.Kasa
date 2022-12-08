import React from "react";
import { Link } from "react-router-dom";
import { Data } from "../../Data";
import "./__cardLodgement.scss";
export default function CardLodgement() {
  return (
    <section className="lodgementContainer">
      {Data.map((card, index) => (
        <article>
          <Link to={`/logements/${card.id}`}>
            <div className="box">
              <img src={card.cover} alt={card.title} className="box__cover" />
              <h2 className="box__title">{card.title}</h2>
              <div className="box__filter"></div>
            </div>
          </Link>
        </article>
      ))}
    </section>
  );
}
