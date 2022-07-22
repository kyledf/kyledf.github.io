import React from "react";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import "./header.css";

const Header = () => {
  return (
    <header>
      <div className="container headerContainer">
        <div className="headerTitle">
          <h5>Hello I am</h5>
          <h1>Kyle Francis</h1>
          <h5 className="textLight">
            Software Engineer
          </h5>
        </div>
        <div className="headerLinks">
          <CTA />
          <HeaderSocials />
        </div>
      </div>
    </header>
  );
};

export default Header;
