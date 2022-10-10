import React, { useContext, useState } from "react";
import Nav from "../../Components/Nav/Nav";
import Menu from "../../Components/Menu/Menu";
import "./list.css";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";

import { BsCalendar3 } from "react-icons/bs";
import SearchItem from "../../Components/SearchItem/SearchItem";
import { SearchContext } from "../../context/SearchContext";

function List() {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const { city, dates, options } = useContext(SearchContext);
  return (
    <>
      <Nav />
      <div className="blue container">
        <div className="header">
          <Menu />
        </div>
      </div>
      <div className="container">
        <div className="list-container">
          <div className="sidebar">
            <span className="heading s-heading">Search</span>
            <span>Destination</span>
            <input type="text" placeholder="Madrid" value={city} />
            <span>Check In Date</span>
            <div
              className="s-date pointer"
              onClick={() => setOpenDate(!openDate)}
            >
              <BsCalendar3 />
              &nbsp;&nbsp;&nbsp;
              {`${format(dates[0].startDate, "dd-MM-yyyy")} To ${format(
                dates[0].endDate,
                "dd-MM-yyyy"
              )} `}
            </div>
            {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={dates}
                className=""
              />
            )}
            <span>Options</span>
            <div className="option-container">
              <div className="option-item">
                <span>Min Price(Per Night)</span>
                <input type="number" />
              </div>
              <div className="option-item">
                <span>Max Price(Per Night)</span>
                <input type="number" />
              </div>
              <div className="option-item">
                <span>Adult</span>
                <input type="number" value={options?.adult} />
              </div>
              <div className="option-item">
                <span>Child</span>
                <input type="number" value={options?.child} />
              </div>
              <div className="option-item">
                <span>Room</span>
                <input type="number" value={options?.room} />
              </div>
              <button className="btn sidebar-btn pointer">Search</button>
            </div>
          </div>
          <div className="hotel-list">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </>
  );
}

export default List;
