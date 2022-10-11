import React, { useState } from "react";
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
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

function Single() {
  const params = useParams();
  const { loading, data, error, reFetch } = useFetch(
    `/hotel/find/${params.id}`
  );
  console.log(data);
  const photos = [Room1, Room2, Room3, Room4, Room5, Family];
  const [photoIndex, setPhotoIndex] = useState(0);
  const [openSlider, setOpenSlider] = useState(false);
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
            <button className="btn s-btn">Reserver or Book Now</button>
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
            <span>Perfect for a 9-night stay!</span>
            <span>
              Located in the real heart of Colorado, this property has an
              excellent location score of 9.81!
            </span>
            <span>
              <span>$945</span>(9 nights)
            </span>
            <button className="btn s-btn">Reserve or Book Now!</button>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Single;
