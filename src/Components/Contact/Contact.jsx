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
          <form action="https://formspree.io/mqkkzlje" method="POST">
            <input type="name" placeholder="Name"></input>
            <input type="text" placeholder="Email" />
            <input type="tel" placeholder="Phone" />
            <textarea
              name="message"
              placeholder="Enter your message"
              id=""
              cols="30"
              rows="10"
            ></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
