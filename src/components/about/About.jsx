import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { MdWork } from "react-icons/md";
import { FaFolder, FaSmile } from "react-icons/fa";
import {
  Animator,
  MoveIn,
  Fade,
  Zoom,
  batch,
  FadeIn,
  FadeOut,
  ZoomIn,
  ZoomOut,
} from "react-scroll-motion";

const About = () => {
  return (
    <section id="about">
      <Animator animation={FadeIn()}>
        <div className="titleContainer">
          <h5>Get to Know</h5>
          <h2>About Me</h2>
        </div>
      </Animator>

      <div className="container aboutContainer">
        <Animator animation={MoveIn(-400, 0)}>
          <div className="aboutMe">
            <div className="aboutMeImg">
              <img src={ME} alt="About image" />
            </div>
          </div>
        </Animator>
        <div className="aboutContent">
          <div className="aboutCards">
            <Animator animation={batch(FadeIn(), MoveIn(0, 200))}>
              <article className="aboutCard">
                <MdWork className="aboutIcon" />
                <h5>Experience</h5>
                <small>3+ Years University</small>
              </article>
            </Animator>
            <Animator animation={batch(FadeIn(), MoveIn(0, 250))}>
              <article className="aboutCard">
                <FaFolder className="aboutIcon" />
                <h5>Projects</h5>
                <small>1 Completed Project</small>
              </article>
            </Animator>
            <Animator animation={batch(FadeIn(), MoveIn(0, 300))}>
              <article className="aboutCard">
                <FaSmile className="aboutIcon" />
                <h5>Hobbies</h5>
                <small>Coding, Filmmaking, Drumming</small>
              </article>
            </Animator>
          </div>

          <Animator animation={MoveIn(600, 0)}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem, dolores eligendi repudiandae dolore reiciendis
              repellat aliquid, tempora voluptatem, magni dolor error rem.
              Veritatis nemo, incidunt fuga numquam eum officiis voluptatem.
            </p>
          </Animator>

          <Animator animation={FadeIn()}>
          <a href="#contact" className="button buttonPrimary">
            Let's Talk
          </a>
          </Animator>
        </div>
      </div>
    </section>
  );
};

export default About;
