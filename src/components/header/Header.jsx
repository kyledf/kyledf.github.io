import React from "react";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";
import "./header.css";

const Header = () => {
  return (
    <header>
      <div className="container headerContainer">
        <h5>Hello I am</h5>
        <h1>Kyle Francis</h1>
        <h5 className="textLight">Software Engineer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
      </div>
    </header>
  );
};

export default Header;
