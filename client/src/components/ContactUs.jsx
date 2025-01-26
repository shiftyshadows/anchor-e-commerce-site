import React from "react";
import "../styles/ContactUs.css"; // Create a CSS file for styling

const ContactUs = () => {
  return (
    <div className="contact-us">
      <h1>Contact Us</h1>
      <p>
        If you have any questions, please feel free to reach out to us. We’d love
        to hear from you!
      </p>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Your Name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Your Email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" rows="5" placeholder="Your Message" required />
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactUs;
