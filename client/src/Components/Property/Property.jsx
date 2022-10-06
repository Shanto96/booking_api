import React from "react";
import "./property.css";
import Apartment from "../../assets/appartment.jpg";
import Cabin from "../../assets/cabins.jpg";
import Resort from "../../assets/Resort.jpg";
import Vila from "../../assets/villa.jpg";
import Hotel from "../../assets/hotelRoom.jpg";

function Property() {
  return (
    <div className="property">
      <div className="property-item">
        <img src={Hotel} alt="" />
        <span>Apartments</span>
        <span>123 Hotels</span>
      </div>{" "}
      <div className="property-item">
        <img src={Apartment} alt="" />
        <span>Apartments</span>
        <span>245 Hotels</span>
      </div>{" "}
      <div className="property-item">
        <img src={Resort} alt="" />
        <span>Resort</span>
        <span>369 Hotels</span>
      </div>{" "}
      <div className="property-item">
        <img src={Vila} alt="" />
        <span>Villa</span>
        <span>147 Hotels</span>
      </div>{" "}
      <div className="property-item">
        <img src={Cabin} alt="" />
        <span>Cabin</span>
        <span>258 Hotels</span>
      </div>
    </div>
  );
}

export default Property;
