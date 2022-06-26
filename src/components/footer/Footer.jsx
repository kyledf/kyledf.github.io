import React from "react";
import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <a href=""></a>
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
        <a href="https://linkedin.com" target="_blank">
          <BsLinkedin />
        </a>
        <a href="https://github.com" target="_blank">
          <BsGithub />
        </a>
        <a href="https://twitter.com" target="_blank">
          <BsTwitter />
        </a>
      </div>

      <div className="footerCopyright">
        <small>&copy; Kyle Francis. All rights reserved. 2022</small>
      </div>
    </footer>
  );
};

export default Footer;
