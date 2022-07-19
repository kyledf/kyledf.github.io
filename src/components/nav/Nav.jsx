import React from "react";
import { AiFillHome, AiFillMessage } from "react-icons/ai";
import { FaUserAlt, FaFileCode } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import "./nav.css";
import { useEffect } from "react";

const Nav = (props) => {
  const { activeNav, setActiveNav, handleScrollActiveNav } = props;
  useEffect(() => {
    handleScrollActiveNav();
  }, []);

  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
        datatooltip="Home"
      >
        <AiFillHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
        datatooltip="About"
      >
        <FaUserAlt />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
        datatooltip="Experience"
      >
        <MdWork />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
        datatooltip="Portfolio"
      >
        <FaFileCode />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
        datatooltip="Contact"
      >
        <AiFillMessage />
      </a>
    </nav>
  );
};

export default Nav;
