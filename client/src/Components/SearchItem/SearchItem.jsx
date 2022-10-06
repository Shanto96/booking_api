import React from "react";
import "./searchItem.css";
import Hotel from "../../assets/hotelRoom.jpg";

function SearchItem() {
  return (
    <div className="src-item">
      <div className="i-left">
        <img src={Hotel} alt="" className="si-img" />
      </div>
      <div className="i-middle">
        <span className="tittle">Tower Street Apartments</span>
        <span className="location">500m from center</span>
        <span>Free Airport Taxi</span>
        <span>Studio appartment with Air Condition</span>
        <span>
          Entire studio. 1 bathroom . 21m<sup>2</sup> 1 full bed{" "}
        </span>
        <span className="free">Free Cancelation</span>
        <span>You can cancel later , so look at this great price today!</span>
      </div>

      <div className="i-right">
        <div className="rating">
          <span>Excellent</span>
          <span>8.9</span>
        </div>
        <div className="pricing">
          <span>$112</span>
          <span>Includes taxes and fees</span>
          <button className="">See Availability</button>
        </div>
      </div>
    </div>
  );
}

export default SearchItem;
