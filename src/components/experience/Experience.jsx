import React from "react";
import { SiCheckmarx } from "react-icons/si";
import "./experience.css";

const Experience = () => {
  return (
    <section id="experience">
      <div className="titleContainer">
        <h5>The Skills I Have</h5>
        <h2>My Experience</h2>
      </div>

      <div className=" container experienceContainer">
        <div className="experienceFrontEnd">
          <h3>Frontend Development</h3>
          <div className="experienceContent">
            <article className="experienceDetails">
              <SiCheckmarx className="experienceDetailsIcon" />
              <div>
                <h4>HTML</h4>
                <small className="textLight">5+ years</small>
              </div>
            </article>
            <article className="experienceDetails">
              <SiCheckmarx className="experienceDetailsIcon" />
              <div>
                <h4>CSS</h4>
                <small className="textLight">5+ years</small>
              </div>
            </article>
            <article className="experienceDetails">
              <SiCheckmarx className="experienceDetailsIcon" />
              <div>
                <h4>JavaScript</h4>
                <small className="textLight">9+ months</small>
              </div>
            </article>
            <article className="experienceDetails">
              <SiCheckmarx className="experienceDetailsIcon" />
              <div>
                <h4>React</h4>
                <small className="textLight">9+ months</small>
              </div>
            </article>
            <article className="experienceDetails">
              <SiCheckmarx className="experienceDetailsIcon" />
              <div>
                <h4>React Native</h4>
                <small className="textLight">9+ months</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experienceBackEnd">
          <h3>Backend Development</h3>
          <div className="experienceContent">
            <article className="experienceDetails">
              <SiCheckmarx className="experienceDetailsIcon" />
              <div>
                <h4>PHP</h4>
                <small className="textLight">2+ years</small>
              </div>
            </article>
            <article className="experienceDetails">
              <SiCheckmarx className="experienceDetailsIcon" />
              <div>
                <h4>MySQL</h4>
                <small className="textLight">2+ years</small>
              </div>
            </article>
            <article className="experienceDetails">
              <SiCheckmarx className="experienceDetailsIcon" />
              <div>
                <h4>Java</h4>
                <small className="textLight">2+ years</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experienceTools">
          <h3>Tools and Technologies</h3>
          <div className="experienceContent">
            <article className="experienceDetails">
              <SiCheckmarx className="experienceDetailsIcon" />
              <div>
                <h4>Git</h4>
                <small className="textLight">3+ years</small>
              </div>
            </article>
            <article className="experienceDetails">
              <SiCheckmarx className="experienceDetailsIcon" />
              <div>
                <h4>Figma</h4>
                <small className="textLight">9+ months</small>
              </div>
            </article>
            <article className="experienceDetails">
              <SiCheckmarx className="experienceDetailsIcon" />
              <div>
                <h4>Trello</h4>
                <small className="textLight">9+ months</small>
              </div>
            </article>
            <article className="experienceDetails">
              <SiCheckmarx className="experienceDetailsIcon" />
              <div>
                <h4>Firebase</h4>
                <small className="textLight">9+ months</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
