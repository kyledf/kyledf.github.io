import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { MdWork } from "react-icons/md";
import { FaFolder, FaSmile } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <div className="titleContainer">
        <h5>Get to Know</h5>
        <h2>About Me</h2>
      </div>

      <div className="container aboutContainer">
        <div className="aboutMe">
          <div className="aboutMeImg">
            <img src={ME} alt="About image" />
          </div>
        </div>
        <div className="aboutContent">
          <div className="aboutCards">
            <article className="aboutCard">
              <MdWork className="aboutIcon" />
              <h5>Experience</h5>
              <small>3+ Years University</small>
            </article>
            <article className="aboutCard">
              <FaFolder className="aboutIcon" />
              <h5>Projects</h5>
              <small>3 Completed Projects</small>
            </article>
            <article className="aboutCard">
              <FaSmile className="aboutIcon" />
              <h5>Hobbies</h5>
              <small>Coding, Filmmaking, Drumming, Travel</small>
            </article>
          </div>

          <p>
            I am a full-time student at AUT completing a Bachelor of Engineering
            (Honours) degree, majoring in Software Engineering. I enjoy programming,
            filmmaking, drumming and traveling. I enjoy working as part of a
            team, but I am also capable of working independently. I am always willing to
            learn more about new technologies and how to use them. In the
            future, I would love to combine my passion for film and programming
            into a career as a front-end or full-stack developer.
          </p>

          <a href="#contact" className="button buttonPrimary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
