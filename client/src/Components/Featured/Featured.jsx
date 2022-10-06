import React from "react";
import "./featured.css";
import Dublin from "../../assets/dublin.jpg";
import Reno from "../../assets/reno.jpg";
import Austin from "../../assets/austin.jpg";

function Featured() {
  return (
    <div className="featured d-flex">
      <div className="featured-item">
        <img src={Dublin} alt="" className="featured-img" />
        <div className="overlay"></div>
        <div className="f-info-container">
          <span>Dublin</span>
          <span>
            <span className="number">124&nbsp;</span>Properties
          </span>
        </div>
      </div>
      <div className="featured-item">
        <img src={Austin} alt="" className="featured-img" />
        <div className="f-info-container">
          <span>Austin</span>
          <span>
            <span className="number">325&nbsp;</span>Properties
          </span>
        </div>
      </div>
      <div className="featured-item">
        <img src={Reno} alt="" className="featured-img" />
        <div className="f-info-container">
          <span>Reno</span>
          <span>
            <span className="number">255&nbsp;</span>Properties
          </span>
        </div>
      </div>
    </div>
  );
}

export default Featured;
