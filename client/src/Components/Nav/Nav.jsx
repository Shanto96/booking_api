import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./nav.css";

function Nav() {
  const { user } = useContext(AuthContext);
  return (
    <div className="blue container">
      <div className="nav">
        <span className="logo">Hotel Booking</span>
        <div className="n-right">
          {user ? (
            <button className="btn">Log Out </button>
          ) : (
            <>
              <button className="btn">Register</button>
              <button className="btn">Log In</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Nav;
