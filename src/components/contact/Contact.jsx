import React from "react";
import { useRef } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./contact.css";

const Contact = (props) => {
  const { setOpenModal, setModalTitle, setModalPara } = props;
  const form = useRef();
  const process = () => toast.loading("Processing your message...");

  const sendEmail = (e) => {
    process();
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
          toast.dismiss();
          console.log(result.text);
          setModalTitle("Thanks for reaching out!");
          setModalPara(
            "Your message has been sent. I'll try get back to you as soon as possible."
          );
          setOpenModal(true);
        },
        (error) => {
          toast.dismiss();
          console.log(error.text);
          setModalTitle("Something went wrong!");
          setModalPara(
            "Your message could not be sent. Please try again later."
          );
          setOpenModal(true);
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact">
      <ToastContainer
        position="top-center"
        draggable={false}
        closeButton={false}
        toastStyle={{
          backgroundColor: "rgba(44, 44, 109, 0.8)",
          color: "white",
          border: "2px solid rgba(77, 181, 255, 0.8)",
          borderRadius: "0.75rem",
          marginTop: "1rem",
        }}
      />
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
