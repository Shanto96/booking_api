import React, { useRef, useState } from "react";
import "./newsletter.css";
import emailjs from "@emailjs/browser";

function Newsletter() {
  const formRef = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0rg8e87",
        "template_maazq4a",
        formRef.current,
        "GFbMIoPaM7-o57yaz"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="newsletter">
      <h1>Save Time, Save Money!</h1>
      <span>Sign Up, We will send best deal for you</span>
      <div className="newsletter-form-container">
        {sent ? (
          <p>Subscribed Successfully</p>
        ) : (
          <form onSubmit={sendEmail} ref={formRef}>
            <input type="email" placeholder="Enter your Email" name="email" />
            <button className="btn" type="submit">
              Subscribe
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Newsletter;
