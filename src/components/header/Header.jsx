import React from "react";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import "./header.css";

const Header = () => {
  return (
    <header>
        <div className="container headerContainer">
            <div className="headerContent">
              <h5>Hello I am</h5>
              <h1>Kyle Francis</h1>
              <h5 className="textLight">Software Engineer</h5>
            </div>
            <CTA />
            <HeaderSocials />
        </div>
    </header>
  );
};

export default Header;
