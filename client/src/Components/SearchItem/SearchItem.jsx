import React from "react";
import "./searchItem.css";
import Hotel from "../../assets/hotelRoom.jpg";
import { Link, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

function SearchItem(hotel) {
  const params = useParams();
  const { loading, data, error, reFetch } = useFetch(
    `/hotel/find/$(params.id)`
  );
  console.log(data);
  return (
    <div className="src-item pointer">
      <div className="i-left">
        <img src={Hotel} alt="" className="si-img" />
      </div>
      <div className="i-middle">
        <span className="tittle">{hotel?.hotel?.title}</span>
        <span className="location">{hotel?.hotel?.distance} m from center</span>
        <span>Free Airport Taxi</span>
        <span>{hotel?.hotel?.address}</span>
        <span>{hotel?.hotel?.desc}</span>
        <span className="free pointer">Free Cancelation</span>
        <span>You can cancel later , so look at this great price today!</span>
      </div>

      <div className="i-right">
        <div className="rating">
          <span>Excellent</span>
          <span>{hotel?.hotel?.rating}</span>
        </div>
        <div className="pricing">
          <span>$ {hotel?.hotel?.cheapestPrice} </span>
          <span>Includes taxes and fees</span>
          <button className="">
            <Link
              to={`/hotel/${hotel?.hotel?._id}`}
              style={{ color: "inherit", textDocoration: "none" }}
            >
              See Availability
            </Link>{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchItem;
