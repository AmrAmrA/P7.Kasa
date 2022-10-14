import React from "react";
import { Link, useParams } from "react-router-dom";
import { Data } from "../../Data";
import "./__Lodgement.scss";
export default function Lodgement() {
  const  params  = useParams();

  return (
    <>
      <p>{params.id}</p>
      <div className="container">
        {Data.filter((card) => card.id === params.id).map((card, index) => (
          <div key={index} className="fullcard">
            <h1>{card.title}</h1>
            <p>{card.description}</p>
            <img src={card.host.picture} alt="" />
            <p>{card.host.name}</p>
          </div>
        ))}
      </div>
    </>
  );
}
