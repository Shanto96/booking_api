import React from "react";
import "./guest.css";
import GuestRoom from "../../assets/homeGuest.jpg";
import useFetch from "../../hooks/useFetch";
function Guest() {
  const { data, loading, error } = useFetch(
    "/hotel/find?featured=true&limit=5"
  );
  console.log(data);
  return (
    <div className="guest">
      {loading ? (
        <p>Loading</p>
      ) : (
        data.map((hotel) => {
          return (
            <div className="guest-item">
              <img src={GuestRoom} alt="" />
              <span>{hotel?.name}</span>
              <span>{hotel?.city}</span>
              <span>Staring from {hotel?.cheapestPrice}</span>
              <span>
                <button className="btn">{hotel.rating}</button> Excelent
              </span>
            </div>
          );
        })
      )}
    </div>
  );
}

export default Guest;
