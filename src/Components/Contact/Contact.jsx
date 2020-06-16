import React from "react";
import "./Contact.scss";
import "../../App.scss";
const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact">
        <div className="border"></div>
        <h1>Contact</h1>
        <div className="contact-form">
          <form action="">
            <input type="name" placeholder="name"></input>
            <input type="text" />
            <input type="text" />
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </form>
          <button>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
