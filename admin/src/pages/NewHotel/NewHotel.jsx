import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState, useRef, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import axios from "axios";
import { toast } from "react-toastify";

const NewHotel = ({ inputs, title }) => {
  const [files, setFiles] = useState("");
  const nameRef = useRef();
  const typeRef = useRef();
  const addressRef = useRef();
  const cityRef = useRef();
  const distanceRef = useRef();
  const descRef = useRef();
  const priceRef = useRef();
  const featuredRef = useRef();
  const titleRef = useRef();

  const [featured, setFeatured] = useState(null);
  const [type, setType] = useState(null);
  const [room, setRoom] = useState([]);

  const [rooms, setRooms] = useState([]);

  const { data, loading, error } = useFetch("/room");

  useEffect(() => {
    setRooms(data);
  }, [data]);

  const handleClick = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "kibriaUpload");
    data.append("api_key", `${process.env.REACT_APP_CLOUD}`);
    let info = {
      name: nameRef?.current?.value,
      type: type,
      address: addressRef?.current?.value,
      city: cityRef?.current?.value,
      distance: distanceRef?.current?.value,
      desc: descRef?.current?.value,
      cheapestPrice: priceRef?.current?.value,
      rating: 4,
      featuredRef: featured,
      title: titleRef?.current?.value,
      room: room,
      photos: null,
    };

    try {
      const id = toast.loading("Hotel is Creating");
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
      console.log(list);
      info.photos = list;
      console.log(info);
      const res = await axios.post("/hotel", info);
      toast.update(id, {
        render: "New Hotel Created",
        type: "success",
        isLoading: false,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const handleSelect = (e) => {
    const value = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setRoom(value);
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
                files[0]
                  ? URL.createObjectURL(files[0])
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form onSubmit={(e) => handleClick(e)}>
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
                <input type="text" placeholder=" Name" required ref={nameRef} />
              </div>
              <div className="formInput">
                <label> Type</label>
                <select onChange={(e) => setType(e.target.value)}>
                  <option value="" selected disabled>
                    Select Type
                  </option>
                  <option value="hotel ">Hotel</option>
                  <option value="appartment">Appartment</option>
                  <option value="resort">Resort</option>
                  <option value="Vila">Vila</option>
                  <option value="Cabin">Cabin</option>
                </select>
              </div>{" "}
              <div className="formInput">
                <label> Featured</label>
                <select onChange={(e) => setFeatured(e.target.value)}>
                  <option value="" selected disabled>
                    Featured
                  </option>
                  <option value={true}>Yes</option>
                  <option value={false}>No</option>
                </select>
              </div>
              <div className="formInput">
                <label> City</label>
                <input type="text" placeholder="New York" ref={cityRef} />
              </div>
              <div className="formInput">
                <label> Address</label>
                <input type="text" placeholder="Address" ref={addressRef} />
              </div>
              <div className="formInput">
                <label> Distance</label>
                <input type="text" placeholder="120Km" ref={distanceRef} />
              </div>{" "}
              <div className="formInput">
                <label> Description</label>
                <input type="text" placeholder="Description" ref={descRef} />
              </div>{" "}
              <div className="formInput">
                <label>Price</label>
                <input
                  type="text"
                  placeholder="Price"
                  required
                  ref={priceRef}
                />
              </div>{" "}
              <div className="formInput">
                <label>Title</label>
                <input
                  type="text"
                  placeholder="Title"
                  required
                  ref={titleRef}
                />
              </div>
              <div className="formInput">
                <label> Rooms</label>
                <select multiple onChange={(e) => handleSelect(e)}>
                  {rooms.map((room) => (
                    <option value={room?._id}>{room?.name}</option>
                  ))}
                </select>
              </div>
              <div className="formInput">
                <button type="submit">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewHotel;
