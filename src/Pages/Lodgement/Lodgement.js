import React from "react";
import { useParams } from "react-router-dom";
import LodgmentData from "../../logements";
import Accordion from "../../Components/Accordion/Accordion";
import Slider from "../../Components/Slider/Slider";
import StarsRating from "../../Components/StarsRating/StarsRating";
import Tags from "../../Components/Tags/Tags";
import Host from "../../Components/Host/Host";
import Error from "../../Pages/Error/Error";
import "./__Lodgement.scss";

export default function Lodgement() {
  // A hook who allows us to display data for every differnt ID inside the JSON File
  const params = useParams();
  const index = LodgmentData.findIndex((el) => el.id === params.id);
  if (index === -1) return <Error />;

  return (
    <main className="container__lodgement">
      <Slider />
      {LodgmentData.filter((card) => card.id === params.id).map(
        (card, index) => (
          <section key={index} className="fullcard">
            <article className="lodgementDescription">
              <div className="geographicInofrmations">
                <h1>{card.title}</h1>
                <p>{card.location}</p>
                <Tags />
              </div>
              <div className="hostInformations">
                <Host />
                <StarsRating />
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
        )
      )}
    </main>
  );
}
