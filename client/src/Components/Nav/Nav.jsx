import React from "react";
import "./nav.css";

function Nav() {
  return (
    <div className="blue container">
      <div className="nav">
        <span className="logo">Hotel Booking</span>
        <div className="n-right">
          <button className="btn">Register</button>
          <button className="btn">Log In</button>
        </div>
      </div>
    </div>
  );
}

export default Nav;
