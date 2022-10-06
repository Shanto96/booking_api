import React from "react";
import "./footer.css";
import { TiLocation } from "react-icons/ti";
import { RiCopyrightLine } from "react-icons/ri";
import Payment from "../../assets/payment.png";

function Footer() {
  return (
    <div className="container">
      <div className=" footer">
        <div>
          <div className="logo f-logo">Kibria Booking</div>
        </div>
        <div className="f-list">
          <ul>
            <li>Countries</li>
            <li>Cities</li>
            <li>Districts</li>
            <li>Airports</li>
            <li>Hotel Rooms</li>
          </ul>
        </div>
        <div className="f-list">
          <ul>
            <li>Countries</li>
            <li>Cities</li>
            <li>Districts</li>
            <li>Airports</li>
            <li>Hotel Rooms</li>
          </ul>
        </div>
        <div className="address">
          <span className="heading f-heading">Address</span>
          <span className="address">
            <span>
              <TiLocation />
              &nbsp;&nbsp; 2221 International Blvd,
              <br /> Oakland, California,94606
            </span>
          </span>
        </div>
      </div>
      <div className="f-bottom">
        <div className="copy">
          <RiCopyrightLine />
          &nbsp;All rights reserved by Kibria
        </div>
        <div className="payment">
          <img src={Payment} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
