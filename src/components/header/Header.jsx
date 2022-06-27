import React from "react";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";
import "./header.css";
import {
  batch,
  Animator,
  MoveOut,
  Fade,
  Zoom,
} from "react-scroll-motion";

const Header = () => {
  return (
    <header>
        <div className="container headerContainer">
          <Animator animation={batch(Fade(), MoveOut(0, -500))}>
            <div className="headerContent">
              <h5>Hello I am</h5>
              <h1>Kyle Francis</h1>
              <h5 className="textLight">Software Engineer</h5>
            </div>
            <CTA />
            <HeaderSocials />
          </Animator>
          <Animator animation={Fade()}>
            <div className="me">
              <Animator animation={Zoom(0, 1)}>
                <img src={ME} alt="me" />
              </Animator>
            </div>
          </Animator>
        </div>
    </header>
  );
};

export default Header;
