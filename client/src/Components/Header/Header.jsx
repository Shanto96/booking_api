import React, { useContext, useState } from "react";
import "./header.css";
import { BiHotel, BiTaxi } from "react-icons/bi";
import { FaPlaneDeparture, FaUserAlt, FaBed } from "react-icons/fa";
import { AiFillCar } from "react-icons/ai";
import { BsCalendar3 } from "react-icons/bs";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import Menu from "../Menu/Menu";
import { SearchContext } from "../../context/SearchContext";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
function Header() {
  const [openDate, setOpenDate] = useState(false);
  const [destination, setDestination] = useState(undefined);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [option, setOption] = useState({
    adult: 1,
    child: 2,
    room: 1,
  });
  const [optionOpened, setOptionOpened] = useState(false);
  const handleOption = (e, name, operation) => {
    e.preventDefault();
    setOption((prev) => {
      return {
        ...prev,
        [name]:
          operation === "i"
            ? option[name] + 1
            : option[name] !== 0
            ? option[name] - 1
            : option[name],
      };
    });
  };
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();
  const handleSearch = () => {
    if (destination.length > 0) {
      dispatch({
        type: "NEW_SEARCH",
        payload: { city: destination, dates: date, options: option },
      });
      navigate("/hotels");
    }
  };

  const { dispatch } = useContext(SearchContext);
  return (
    <div className="blue container">
      <div className="header">
        <Menu className="d-none" />
        <>
          <h2>A lifetime of Discounts? It's Genius</h2>
          <span>
            Get rewarded for your travels - unlock instant saving of 10% or more
            with a free booking account
          </span>
          {!user && <button className="btn h-btn">Sign in / Register</button>}
          <form>
            <div className="d-sm sm-form-container">
              <div className="form-container">
                <div>
                  <FaBed />
                  <input
                    type="text"
                    placeholder={"Where are you going?"}
                    onChange={(e) => setDestination(e.target.value)}
                    required
                  />
                </div>
                <div className="p-relative range-container">
                  <span
                    onClick={() => setOpenDate(!openDate)}
                    className="pointer"
                  >
                    {" "}
                    <BsCalendar3 />
                    {`${format(date[0].startDate, "dd-MM-yyyy")} To ${format(
                      date[0].endDate,
                      "dd-MM-yyyy"
                    )} `}{" "}
                  </span>
                  {openDate && (
                    <DateRange
                      editableDateInputs={true}
                      onChange={(item) => setDate([item.selection])}
                      moveRangeOnFirstSelection={false}
                      ranges={date}
                      className="date"
                    />
                  )}
                </div>
                <div className="p-relative range-container">
                  <span
                    onClick={() => setOptionOpened(!optionOpened)}
                    className="pointer "
                  >
                    <FaUserAlt />
                    {option.adult} Person {option.child} Children {option.room}{" "}
                    Bed
                  </span>
                  {optionOpened && (
                    <div className="options">
                      <div className="optionItem">
                        Adult
                        <div className="btn-container">
                          <button
                            className="btn option-btn"
                            onClick={(e) => handleOption(e, "adult", "i")}
                          >
                            +
                          </button>
                          {option.adult}
                          <button
                            className="btn option-btn"
                            onClick={(e) => handleOption(e, "adult", "d")}
                          >
                            -
                          </button>
                        </div>
                      </div>
                      <div className="optionItem">
                        Child
                        <div className="btn-container">
                          <button
                            className="btn option-btn"
                            onClick={(e) => handleOption(e, "child", "i")}
                          >
                            +
                          </button>
                          {option.child}
                          <button
                            className="btn option-btn"
                            onClick={(e) => handleOption(e, "child", "d")}
                          >
                            -
                          </button>
                        </div>
                      </div>
                      <div className="optionItem">
                        Room
                        <div className="btn-container">
                          <button
                            className="btn option-btn"
                            onClick={(e) => handleOption(e, "room", "i")}
                          >
                            +
                          </button>
                          {option.room}
                          <button
                            className="btn option-btn"
                            onClick={(e) => handleOption(e, "room", "d")}
                          >
                            -
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <button
                  className="btn s-btn"
                  type="submit"
                  onClick={(e) => handleSearch()}
                >
                  Search
                </button>
              </div>
            </div>
          </form>
        </>
      </div>
    </div>
  );
}

export default Header;
