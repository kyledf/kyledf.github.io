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
        href="#header"
        onClick={() => props.setActiveNav("#header")}
        className={props.activeNav === "#header" ? "active" : ""}
      >
        <AiFillHome />
      </a>
      <a
        href="#about"
        onClick={() => props.setActiveNav("#about")}
        className={props.activeNav === "#about" ? "active" : ""}
      >
        <FaUserAlt />
      </a>
      <a
        href="#experience"
        onClick={() => props.setActiveNav("#experience")}
        className={props.activeNav === "#experience" ? "active" : ""}
      >
        <MdWork />
      </a>
      <a
        href="#portfolio"
        onClick={() => props.setActiveNav("#portfolio")}
        className={props.activeNav === "#portfolio" ? "active" : ""}
      >
        <RiFilePaper2Fill />
      </a>
      <a
        href="#contact"
        onClick={() => props.setActiveNav("#contact")}
        className={props.activeNav === "#contact" ? "active" : ""}
      >
        <AiFillMessage />
      </a>
    </nav>
  );
};

export default Nav;
