import React, { useContext, useState } from "react";
import { MdCancel } from "react-icons/md";
import useFetch from "../../hooks/useFetch";
import "./reserve.css";
import { SearchContext } from "../../context/SearchContext";
function Reserve({ setShowModel, id }) {
  const { loading, data, error } = useFetch(`/hotel/rooms/${id}`);
  const [selectedRoom, setSelectedRoom] = useState([]);
  const { dates } = useContext(SearchContext);

  const handleSelect = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectedRoom(
      checked
        ? [...selectedRoom, value]
        : selectedRoom.filter((item) => item != value)
    );
  };
  const getDateInRange = (startDate, endDate) => {
    const date = new Date(startDate.getTime());
    let dates = [];
    while (date <= endDate) {
      dates.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }
    return dates;
  };
  console.log(getDateInRange(dates[0].startDate, dates[0].endDate));
  return (
    <div className="r-container">
      {data.length > 0 ? (
        <>
          <span className="r-heading">Select Your Room</span>
          {data.map((room) => {
            return (
              <div className="room-container  d-flex">
                <div className="r-info">
                  <span className="r-title">{room.title}</span>
                  <span>{room.desc}</span>
                  <span>Price : $ {room.price}</span>
                  <span>Max Person:</span>
                </div>
                <div className="r-number">
                  {room?.roomNumber?.map((single) => {
                    return (
                      <div className="rn-container">
                        <form action="">
                          <input
                            type="checkbox"
                            value={single?._id}
                            onChange={(e) => handleSelect(e)}
                          />
                          &nbsp;&nbsp;
                          <label>{single?.number}</label>
                        </form>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </>
      ) : (
        "No Rooms Available Now"
      )}
      <MdCancel onClick={() => setShowModel(false)} className="cancel-btn" />
      <button className="btn s-btn">Reserve Now</button>
    </div>
  );
}

export default Reserve;
