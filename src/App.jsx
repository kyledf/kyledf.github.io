import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Modal from "./components/contact/Modal";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Portfolio from "./components/portfolio/Portfolio";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import { useState } from "react";

const App = () => {
  const [activeNav, setActiveNav] = useState("#");
  const [openModal, setOpenModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalPara, setModalPara] = useState("");
  const handleScrollActiveNav = () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");

    window.addEventListener("scroll", () => {
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          current = section.id;
        }
      });
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
          link.classList.add("active");
        }
      });
    });
  };

  return (
    <>
      {openModal && (
        <Modal
          modalTitle={modalTitle}
          modalPara={modalPara}
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
      )}

      <Nav
        activeNav={activeNav}
        setActiveNav={setActiveNav}
        handleScrollActiveNav={handleScrollActiveNav}
      />
      <Header />
      <About />
      <Experience />
      <Portfolio />
      <Contact
        setOpenModal={setOpenModal}
        setModalTitle={setModalTitle}
        setModalPara={setModalPara}
      />
      <Footer />
    </>
  );
};

export default App;
