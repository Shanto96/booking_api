import React, { useState } from "react";
import Nav from "../../Components/Nav/Nav";
import Header from "../../Components/Header/Header";
import Featured from "../../Components/Featured/Featured";
import Property from "../../Components/Property/Property";
import Guest from "../../Components/Guest/Guest";
import Newsletter from "../../Components/Newsletter/Newsletter";
import Footer from "../../Components/Footer/Footer";
import "./home.css";

function Home() {
  const [mobileMenu, setMobileMenu] = useState(false);
  console.log(mobileMenu);
  return (
    <div>
      <Nav mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
      <Header mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />

      <div className="container">
        <div className="home-container">
          <span className="heading">Featured Item</span>
          <Featured />
          <span className="heading">Browse By Property Type</span>
          <Property />
          <span className="heading">Home guest Love</span>
          <Guest />
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Home;
