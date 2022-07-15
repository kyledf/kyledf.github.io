import React from "react";
import { AiFillHome, AiFillMessage } from "react-icons/ai";
import { RiFilePaper2Fill } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import "./nav.css";

const Nav = (props) => {
  return (
    <nav>
      <a
        href="#"
        onClick={() => props.setActiveNav("#")}
        className={props.activeNav === "#" ? "active" : ""}
        datatooltip="Home"
      >
        <AiFillHome />
      </a>
      <a
        href="#about"
        onClick={() => props.setActiveNav("#about")}
        className={props.activeNav === "#about" ? "active" : ""}
        datatooltip="About"
      >
        <FaUserAlt />
      </a>
      <a
        href="#experience"
        onClick={() => props.setActiveNav("#experience")}
        className={props.activeNav === "#experience" ? "active" : ""}
        datatooltip="Experience"
      >
        <MdWork />
      </a>
      <a
        href="#portfolio"
        onClick={() => props.setActiveNav("#portfolio")}
        className={props.activeNav === "#portfolio" ? "active" : ""}
        datatooltip="Portfolio"
      >
        <RiFilePaper2Fill />
      </a>
      <a
        href="#contact"
        onClick={() => props.setActiveNav("#contact")}
        className={props.activeNav === "#contact" ? "active" : ""}
        datatooltip="Contact"
      >
        <AiFillMessage />
      </a>
    </nav>
  );
};

export default Nav;
