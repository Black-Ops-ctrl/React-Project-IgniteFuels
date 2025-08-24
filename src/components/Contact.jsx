import React from "react";
import "./contact.css";
import igniteImg from "../assets/images/ignite.png";

const Contact = () => {
  return (
    <div className="contact-page">
      {/* full-screen white background behind everything */}
      <div className="contact-bg" aria-hidden="true" />

      <div className="contact-container">
        {/* Left Side Image */}
        <div className="contact-image">
          <img src={igniteImg} alt="Ignite Fuel" />
        </div>

        {/* Right Side Content */}
        <div className="contact-content">
          <h1 className="contact-title">Contact Us</h1>
          <div className="contact-box">
            <p><strong>Website:</strong> www.ignitefuel.com</p>
            <p><strong>Email:</strong> ignitefuel@gmail.com</p>
            <p><strong>Contact No:</strong> +92-304-66555513</p>
            <p><strong>Headquarter:</strong> Johar Town Phase 2 Lahore, Pakistan</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
