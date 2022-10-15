import React from "react";
import { Link } from "react-router-dom";
import { Data } from "../../Data";
import backgroundHomePage from "./background_homepage.png";
import "./__Homepage.scss";

export default function Homepage() {
  return (
    <div className="homepage">
      <div className="background">
        <img src={backgroundHomePage} alt="" className="background__image" />
        <h1 className="background__title">Chez vous et partout ailleurs </h1>
      </div>
      <div className="lodgementContainer">
        {Data.map((postDetail, index) => {
          return (
            <>
              <Link to={`/logements/${postDetail.id}`}>
                <article className="box">
                  <img
                    src={postDetail.cover}
                    alt={postDetail.title}
                    className="box__cover"
                  />
                  <h2 className="box__title">{postDetail.title}</h2>
                  <div className="box__filter"></div>;
                </article>
              </Link>
            </>
          );
        })}
      </div>
    </div>
  );
}
