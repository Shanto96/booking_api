import React from "react";
import "./guest.css";
import GuestRoom from "../../assets/homeGuest.jpg";
function Guest() {
  return (
    <div className="guest">
      <div className="guest-item">
        <img src={GuestRoom} alt="" />
        <span>Aparthotel Stare Miasto</span>
        <span>Madrid</span>
        <span>Staring from $123</span>
        <span>
          <button className="btn">8.9</button> Excelent
        </span>
      </div>
      <div className="guest-item">
        <img src={GuestRoom} alt="" />
        <span>Aparthotel Stare Miasto</span>
        <span>Madrid</span>
        <span>Staring from $123</span>
        <span>
          <button className="btn">8.9</button> Excelent
        </span>
      </div>
      <div className="guest-item">
        <img src={GuestRoom} alt="" />
        <span>Aparthotel Stare Miasto</span>
        <span>Madrid</span>
        <span>Staring from $123</span>
        <span>
          <button className="btn">8.9</button> Excelent
        </span>
      </div>
      <div className="guest-item">
        <img src={GuestRoom} alt="" />
        <span>Aparthotel Stare Miasto</span>
        <span>Madrid</span>
        <span>Staring from $123</span>
        <span>
          <button className="btn">8.9</button> Excelent
        </span>
      </div>
      <div className="guest-item">
        <img src={GuestRoom} alt="" />
        <span>Aparthotel Stare Miasto</span>
        <span>Madrid</span>
        <span>Staring from $123</span>
        <span>
          <button className="btn">8.9</button> Excelent
        </span>
      </div>
    </div>
  );
}

export default Guest;
