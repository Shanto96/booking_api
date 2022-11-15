import React from "react";
import { BiHotel, BiTaxi } from "react-icons/bi";
import { FaPlaneDeparture, FaUserAlt, FaBed } from "react-icons/fa";
import { AiFillCar } from "react-icons/ai";
import { BsCalendar3 } from "react-icons/bs";

function Menu() {
  return (
    <ul className="d-none">
      <li>
        {" "}
        <BiHotel /> Stays
      </li>
      <li>
        {" "}
        <FaPlaneDeparture />
        Flights
      </li>
      <li>
        {" "}
        <AiFillCar />
        Car Rentals
      </li>
      <li>
        {" "}
        <BiTaxi />
        Airport Taxis
      </li>
    </ul>
  );
}

export default Menu;
