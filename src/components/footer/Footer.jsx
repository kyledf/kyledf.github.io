import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import LOGO from "../../assets/logo.png";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <a href="#">
        <img src={LOGO} alt="Logo for website" />
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footerSocials">
        <a href="https://www.linkedin.com/in/kyledf/" target="_blank">
          <BsLinkedin />
        </a>
        <a href="https://github.com/kyledf" target="_blank">
          <BsGithub />
        </a>
        <a href="mailto:kyledanielfrancis@gmail.com">
          <MdEmail />
        </a>
      </div>

      <div className="footerCopyright">
        <small>Copyright &copy; 2023 Kyle Francis. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
