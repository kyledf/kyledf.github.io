import React from "react";
import { useRef } from "react";
import emailjs from "emailjs-com";
import "./contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_hqokaqv",
        "template_eohdyjo",
        form.current,
        "N_n8vX3h2VrsCKLzO"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact">
      <div className="titleContainer">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      </div>

      <div className="container contactContainer">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Full Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <input type="text" name="subject" placeholder="Subject" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Message"
            required
          ></textarea>
          <button type="submit" className="button buttonPrimary">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
