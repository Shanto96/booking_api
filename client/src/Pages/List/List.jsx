import React, { useContext, useEffect, useState } from "react";
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
import useFetch from "../../hooks/useFetch";

function List() {
  const [openDate, setOpenDate] = useState(false);
  const [listDate, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const { city, dates, options, dispatch } = useContext(SearchContext);
  const [min, setMin] = useState(null);
  const [max, setMax] = useState(null);
  const [destination, setDestination] = useState(city);

  const { data, loading, error, reFetch } = useFetch(
    `/hotel/find?city=${destination?.toLowerCase()}&min=${min || 0}&max=${
      max || 999
    }`
  );
  console.log(data);

  const handleDateChange = async (item) => {
    await setDate([item.selection]);
    dispatch({
      type: "NEW_SEARCH",
      payload: {
        city: destination,
        dates: listDate,
        options: options,
      },
    });
  };
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
            <input
              type="text"
              placeholder="Madrid"
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value);
              }}
            />
            <span>Check In Date</span>
            <div
              className="s-date pointer"
              onClick={() => setOpenDate(!openDate)}
            >
              <BsCalendar3 />
              &nbsp;&nbsp;&nbsp;
              {dates[0]
                ? `${format(dates[0].startDate, "dd-MM-yyyy")} To ${format(
                    dates[0].endDate,
                    "dd-MM-yyyy"
                  )} `
                : ""}
            </div>
            {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => {
                  handleDateChange(item);
                }}
                moveRangeOnFirstSelection={false}
                ranges={listDate}
                className=""
              />
            )}
            <span>Options</span>
            <div className="option-container">
              <div className="option-item">
                <span>Min Price(Per Night)</span>
                <input type="number" onChange={(e) => setMin(e.target.value)} />
              </div>
              <div className="option-item">
                <span>Max Price(Per Night)</span>
                <input type="number" onChange={(e) => setMax(e.target.value)} />
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
            {loading ? (
              <p>Loading</p>
            ) : data.length > 0 ? (
              data?.map((hotel) => <SearchItem hotel={hotel} />)
            ) : (
              <p>No hotels available at this place</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default List;
