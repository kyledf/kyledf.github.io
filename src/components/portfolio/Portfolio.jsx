import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import Project from "./Project";

const data = [
  {
    id: 1,
    title: "SportsHub",
    img: IMG1,
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisi vel consectetur euismod, nisi nisl consectetur nisi, euismod nisi nisl euismod nisi.",
    github: "https://github.com/kyledf/SportsHub",
    videoDemo: "https://www.youtube.com/watch?v=R73ASu2QsIc",
  },
  {
    id: 2,
    title: "CabsOnline",
    img: IMG2,
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisi vel consectetur euismod, nisi nisl consectetur nisi, euismod nisi nisl euismod nisi.",
    github: "https://github.com/kyledf/cabsOnline",
    videoDemo: "https://youtu.be/4gldyWe_-m4",
  },
  {
    id: 3,
    title: "Virtual Pet Game",
    img: IMG3,
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisi vel consectetur euismod, nisi nisl consectetur nisi, euismod nisi nisl euismod nisi.",
    github: "https://github.com/kyledf/KyleVirtualPet",
    videoDemo: "https://youtu.be/ig_glJpfH_g",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="titleContainer">
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>
      </div>
      <div className="container containerPortfolio">
        {data.map(({ id, title, img, about, github, videoDemo }) => {
          return (
            <Project
              id={id}
              title={title}
              img={img}
              about={about}
              github={github}
              videoDemo={videoDemo}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
