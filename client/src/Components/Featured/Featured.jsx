import React from "react";
import "./featured.css";
import Dublin from "../../assets/dublin.jpg";
import Reno from "../../assets/reno.jpg";
import Austin from "../../assets/austin.jpg";
import useFetch from "../../hooks/useFetch";

function Featured() {
  const { data, loading, error } = useFetch(
    "/hotel/countbycity?cities=london,berlin,madrid"
  );

  return (
    <div className="featured d-flex">
      {loading ? (
        <p>Loading</p>
      ) : (
        <>
          <div className="featured-item">
            <img src={Dublin} alt="" className="featured-img" />
            <div className="overlay"></div>
            <div className="f-info-container">
              <span>Berlin</span>
              <span>
                <span className="number">{data[2]}&nbsp;</span>Properties
              </span>
            </div>
          </div>
          <div className="featured-item">
            <img src={Austin} alt="" className="featured-img" />
            <div className="f-info-container">
              <span>London</span>
              <span>
                <span className="number">{data[0]}&nbsp;</span>Properties
              </span>
            </div>
          </div>
          <div className="featured-item">
            <img src={Reno} alt="" className="featured-img" />
            <div className="f-info-container">
              <span>Madrid</span>
              <span>
                <span className="number">{data[1]}&nbsp;</span>Properties
              </span>
            </div>
          </div>{" "}
        </>
      )}
    </div>
  );
}

export default Featured;
