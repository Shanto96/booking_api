import React, { useContext, useState } from "react";
import Nav from "../../Components/Nav/Nav";
import Menu from "../../Components/Menu/Menu";
import Room1 from "../../assets/singleRoom1.jpg";
import Room2 from "../../assets/singleroom2.jpg";
import Room3 from "../../assets/singleRoom3.jpg";
import Room4 from "../../assets/singleroom4.jpg";
import Room5 from "../../assets/singleroom5.jpg";
import Family from "../../assets/family.jpg";
import { MdLocationPin } from "react-icons/md";
import Newsletter from "../../Components/Newsletter/Newsletter";
import Footer from "../../Components/Footer/Footer";
import "./single.css";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
  MdCancel,
} from "react-icons/md";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";
import Reserve from "../../Components/Reserve/Reserve";

function Single() {
  const [showModel, setShowModel] = useState(false);

  const params = useParams();
  const location = useLocation();
  const { loading, data, error, reFetch } = useFetch(
    `/hotel/find/${params.id}`
  );
  const id = location.pathname.split("/")[2];

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const { dates } = useContext(SearchContext);
  const MILISECONDS_PER_DAY = 1000 * 24 * 60 * 60;
  const dayDifferent = (date1, date2) => {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const dateDiff = Math.ceil(timeDiff / MILISECONDS_PER_DAY);
    return dateDiff;
  };
  const days = dayDifferent(dates[0].endDate, dates[0].startDate);
  const photos = [Room1, Room2, Room3, Room4, Room5, Family];
  const [photoIndex, setPhotoIndex] = useState(0);
  const [openSlider, setOpenSlider] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    if (user) {
      setShowModel(true);
    } else {
      setShowModel(true);

      //navigate("/login");
    }
  };

  return (
    <div>
      <Nav />
      <div className="blue container">
        <div className="header">
          <Menu />
        </div>
      </div>
      <div className="container">
        <div className="s-top">
          <div className="t-left">
            <span>{data?.name}</span>
            <span>
              <MdLocationPin /> {data?.address}
            </span>
            <span>
              Book a stay over ${data?.cheapestPrice} at this property and get a
              free airport taxi
            </span>
          </div>
          <div className="t-right">
            <button className="btn s-btn" onClick={(e) => handleClick(e)}>
              Reserver or Book Now
            </button>
          </div>
        </div>
        <div className="photo-gallery">
          {openSlider && (
            <div className="slider-wrapper">
              <MdCancel
                className="cancel"
                size={20}
                onClick={() => setOpenSlider(false)}
              />
              <MdOutlineArrowBackIos
                size={70}
                className="arrow"
                onClick={() =>
                  photoIndex != 0
                    ? setPhotoIndex(photoIndex - 1)
                    : setPhotoIndex(photos.length - 1)
                }
              />
              <img src={photos[photoIndex]} alt="" className="slideImg" />
              <MdOutlineArrowForwardIos
                size={70}
                className="arrow"
                onClick={() =>
                  photoIndex != photos.length - 1
                    ? setPhotoIndex(photoIndex + 1)
                    : setPhotoIndex(0)
                }
              />
            </div>
          )}
          <img
            src={Room1}
            alt=""
            onClick={() => {
              setPhotoIndex(0);
              setOpenSlider(true);
            }}
          />
          <img
            src={Room2}
            alt=""
            onClick={() => {
              setPhotoIndex(1);
              setOpenSlider(true);
            }}
          />
          <img
            src={Room3}
            alt=""
            onClick={() => {
              setPhotoIndex(2);
              setOpenSlider(true);
            }}
          />
          <img
            src={Room4}
            alt=""
            onClick={() => {
              setPhotoIndex(3);
              setOpenSlider(true);
            }}
          />
          <img
            src={Room5}
            alt=""
            onClick={() => {
              setPhotoIndex(4);
              setOpenSlider(true);
            }}
          />
          <img
            src={Family}
            alt=""
            onClick={() => {
              setPhotoIndex(5);
              setOpenSlider(true);
            }}
          />
        </div>
        <div className="info">
          <div className="content">
            <span>{data?.title}</span>
            <span>{data?.desc}</span>
          </div>
          <div className="price">
            <span>Perfect for a {days}-night stay!</span>
            <span>
              Located in the real heart of Colorado, this property has an
              excellent location score of 9.81!
            </span>
            <span>
              <span>{days * data?.cheapestPrice}</span>({days} nights)
            </span>
            <button className="btn s-btn" onClick={(e) => handleClick(e)}>
              Reserve or Book Now!
            </button>
          </div>
        </div>
      </div>
      {showModel && <Reserve setShowModel={setShowModel} id={id} />}
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Single;
