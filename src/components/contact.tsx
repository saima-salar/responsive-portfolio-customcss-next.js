import React from 'react';
import "../style/contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2 className="heading">
        Contact <span>me</span>
      </h2>
      <form action="">
        <div className="input-group">
          <div className="input-box">
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email" required />
          </div>
          <div className="input-box">
            <input type="tel" placeholder="Phone Number" />
            <input type="text" placeholder="Subject" />
          </div>
        </div>
        <div className="input-group-2">
          <textarea
            name="message"
            id="message"
            cols={30}
            rows={10}
            placeholder="Your Message"
            required
          ></textarea>
          <input type="submit" value="Send Message" className="btn" />
        </div>
      </form>
    </section>
  );
};

export default Contact;
