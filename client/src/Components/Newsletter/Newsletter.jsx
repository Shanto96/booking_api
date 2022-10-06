import React from "react";
import "./newsletter.css";

function Newsletter() {
  return (
    <div className="newsletter">
      <h1>Save Time, Save Money!</h1>
      <span>Sign Up, We will send best deal for you</span>
      <div className="newsletter-form-container">
        <input type="email" placeholder="Enter your Email" />
        <button className="btn">Subscribe</button>
      </div>
    </div>
  );
}

export default Newsletter;
