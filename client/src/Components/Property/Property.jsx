import React from "react";
import "./property.css";
import Apartment from "../../assets/appartment.jpg";
import Cabin from "../../assets/cabins.jpg";
import Resort from "../../assets/Resort.jpg";
import Vila from "../../assets/villa.jpg";
import Hotel from "../../assets/hotelRoom.jpg";
import useFetch from "../../hooks/useFetch";

function Property() {
  const { data, loading, error } = useFetch("/hotel/countbytype");
  console.log(data);
  return (
    <div className="property">
      {loading ? (
        <p>Loading</p>
      ) : (
        <>
          <div className="property-item">
            <img src={Hotel} alt="" />
            <span>{data[0].type}</span>
            <span>{data[0].value}</span>
          </div>{" "}
          <div className="property-item">
            <img src={Apartment} alt="" />
            <span>{data[1].type}</span>
            <span>{data[1].value}</span>
          </div>{" "}
          <div className="property-item">
            <img src={Resort} alt="" />
            <span>{data[2].type}</span>
            <span>{data[2].value}</span>
          </div>{" "}
          <div className="property-item">
            <img src={Vila} alt="" />
            <span>{data[3].type}</span>
            <span>{data[3].value}</span>
          </div>{" "}
          <div className="property-item">
            <img src={Cabin} alt="" />
            <span>{data[4].type}</span>
            <span>{data[4].value}</span>
          </div>{" "}
        </>
      )}
    </div>
  );
}

export default Property;
