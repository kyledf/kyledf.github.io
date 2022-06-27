import React from "react";
import { MdEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { RiWhatsappFill } from "react-icons/ri";
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
        <div className="contactOptions">
          <article className="contactOption">
            <MdEmail className="contactOptionIcon" />
            <h4>Email</h4>
            <h5>fakeemail@gmail.com</h5>
            <a href="mailto:fakeemail@gmail.com" target="_blank">
              Send an Email
            </a>
          </article>
          <article className="contactOption">
            <BsMessenger className="contactOptionIcon" />
            <h4>Messenger</h4>
            <h5>@realPerson</h5>
            <a href="https://m.me/realPerson" target="_blank">
              Send a Message
            </a>
          </article>
          <article className="contactOption">
            <RiWhatsappFill className="contactOptionIcon" />
            <h4>WhatsApp</h4>
            <h5>021 123 4567</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+0211234567"
              target="_blank"
            >
              Send a Message
            </a>
          </article>
        </div>
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
