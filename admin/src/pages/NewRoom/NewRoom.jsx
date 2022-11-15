import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState, useRef } from "react";
import axios from "axios";
import useFetch from "../../hooks/useFetch";
import { toast } from "react-toastify";

const NewRoom = ({ inputs, title }) => {
  const [files, setFiles] = useState("");
  const nameRef = useRef();
  const typeRef = useRef();
  const descRef = useRef();
  const priceRef = useRef();
  const titleRef = useRef();
  const roomNumberRef = useRef();
  const maxPersonRef = useRef();
  const [hotelId, sethotelId] = useState(null);
  const { data, loading, error } = useFetch("/hotel");

  const handleClick = async (e) => {
    e.preventDefault();
    let roomList = roomNumberRef.current.value.split(",").map((room) => ({
      number: room,
    }));
    console.log(roomList);

    let info = {
      name: nameRef?.current?.value,
      type: typeRef?.current?.value,
      desc: descRef?.current?.value,
      photos: null,
      title: titleRef?.current?.value,
      price: priceRef?.current?.value,
      maxPerson: maxPersonRef?.current?.value,
      roomNumber: roomList,
    };
    try {
      const id = toast.loading("Room is Creating");
      const list = await Promise.all(
        Object.values(files).map(async (file) => {
          const formData = new FormData();
          formData.append("file", file);
          formData.append("upload_preset", "kibriaUpload");
          formData.append("api_key", `${process.env.REACT_APP_CLOUD}`);
          const imgRes = await axios.post(
            "https://api.cloudinary.com/v1_1/dvwcs0jga/image/upload",
            formData
          );
          return imgRes.data.url;
        })
      );
      info.photos = list;

      const res = await axios.post(`/room/${hotelId}`, info);

      console.log(res.data);
      toast.update(id, {
        render: "New Room Created",
        type: "success",
        isLoading: false,
        autoClose: 7000,
      });

      nameRef.current.value = "";
      typeRef.current.value = "";
      descRef.current.value = "";
      priceRef.current.value = "";
      titleRef.current.value = "";
      roomNumberRef.current.value = "";
      maxPersonRef.current.value = "";
      setFiles(null);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                files
                  ? URL.createObjectURL(files[0])
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  required
                  multiple
                  onChange={(e) => setFiles(e.target.files)}
                  style={{ display: "none" }}
                />
              </div>
              <div className="formInput">
                <label> Name</label>
                <input
                  type="text"
                  placeholder="A master Bed"
                  required
                  ref={nameRef}
                />
              </div>
              <div className="formInput">
                <label> Type</label>
                <input
                  type="text"
                  placeholder="Single Room"
                  required
                  ref={typeRef}
                />
              </div>
              <div className="formInput">
                <label> Description</label>
                <input
                  type="text"
                  placeholder="Awesome room with a hill view from balcony"
                  ref={descRef}
                />
              </div>
              <div className="formInput">
                <label> Price</label>
                <input type="Number" placeholder="250$" ref={priceRef} />
              </div>
              <div className="formInput">
                <label> Title</label>
                <input type="text" placeholder="A deluxe Room" ref={titleRef} />
              </div>{" "}
              <div className="formInput">
                <label> Room Number</label>
                <input
                  type="text"
                  placeholder="Enter room numbers by separating comma"
                  required
                  ref={roomNumberRef}
                />
              </div>{" "}
              <div className="formInput">
                <label>Maximum Person</label>
                <input
                  type="Number"
                  placeholder="Password Again"
                  required
                  ref={maxPersonRef}
                />
              </div>{" "}
              <div className="formInput">
                <label> Hotels</label>
                <select onChange={(e) => sethotelId(e.target.value)}>
                  {data?.map((hotel) => (
                    <option value={hotel?._id}>{hotel?.name}</option>
                  ))}
                </select>
              </div>
              <div className="formInput">
                <button onClick={(e) => handleClick(e)}>Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewRoom;
