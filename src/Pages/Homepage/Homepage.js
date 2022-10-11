import React from "react";
import { Data } from "../../Data";
import "./__Homepage.scss";

export default function Homepage() {
  return (
    <>
    <div className="lodgement__container">
      {Data.map((postDetail, index) => {
        return (
            <>
              {/* <h1>{postDetail.title}</h1>;<p>{postDetail.description}</p>; */}
              <img src={postDetail.cover} alt="" className="lodge__cover" />
              {/* <p>{postDetail.host.name}</p>;
              <img src={postDetail.host.picture} alt="" /> */}
            </>
        );
      })}
      </div>
    </>
  );
}
