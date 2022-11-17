import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./nav.css";
import { BsList } from "react-icons/bs";

function Nav({ mobileMenu, setMobileMenu }) {
  const { user } = useContext(AuthContext);
  console.log(mobileMenu);
  return (
    <div className="blue container">
      <div className="nav">
        <span className="logo">Hotel Booking</span>
        <div className="n-right">
          {user ? (
            <button className="btn">Log Out </button>
          ) : (
            <>
              <button className="btn">Log In</button>
              <BsList
                className="d-sm pointer"
                size={30}
                onClick={() => setMobileMenu(!mobileMenu)}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Nav;
