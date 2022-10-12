import React from "react";
import { Data } from "../../Data";
import backgroundHomePage from "./background_homepage.png";
import "./__Homepage.scss";

export default function Homepage() {
  return (
    <div className="homepage">
    <div className="background">
    <img src={backgroundHomePage} alt="" className="background__image"/>
    <h1 className="background__title">Chez vous et partout ailleurs </h1>
    </div>
    <div className="lodgement__container">
      {Data.map((postDetail, index) => {
        return (
            <>
              <span>{postDetail.title}</span>;
              <img src={postDetail.cover} alt= {postDetail.title} className="lodge__cover" />
            </>
        );
      })}
      </div>
    </div>
  );
}
