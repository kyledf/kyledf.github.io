import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.png";
import { FaHtml5, FaReact, FaPhp, FaJava } from "react-icons/fa";
import { SiFirebase, SiJavascript, SiCss3, SiMysql } from "react-icons/si";
import Project from "./Project";

const data = [
  {
    id: 1,
    title: "SportsHub",
    img: IMG1,
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisi vel consectetur euismod, nisi nisl consectetur nisi, euismod nisi nisl euismod nisi.",
    github: "https://github.com/kyledf/SportsHub",
    demo: "https://www.youtube.com/watch?v=R73ASu2QsIc",
    icons: [
      <FaReact size={30} />,
      <SiJavascript size={30} />,
      <SiFirebase size={30} />,
    ],
  },
  {
    id: 2,
    title: "CabsOnline",
    img: IMG2,
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisi vel consectetur euismod, nisi nisl consectetur nisi, euismod nisi nisl euismod nisi.",
    github: "https://github.com/kyledf/cabsOnline",
    demo: "https://youtu.be/4gldyWe_-m4",
    icons: [
      <FaHtml5 size={30} />,
      <SiCss3 size={30} />,
      <SiJavascript size={30} />,
      <FaPhp size={30} />,
      <SiMysql size={30} />,
    ],
  },
  {
    id: 3,
    title: "Virtual Pet Game",
    img: IMG3,
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisi vel consectetur euismod, nisi nisl consectetur nisi, euismod nisi nisl euismod nisi.",
    github: "https://github.com/kyledf/KyleVirtualPet",
    demo: "https://youtu.be/ig_glJpfH_g",
    icons: [<FaJava size={30} />, <SiMysql size={30} />],
  },
  {
    id: 4,
    title: "Portfolio Website",
    img: IMG4,
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisi vel consectetur euismod, nisi nisl consectetur nisi, euismod nisi nisl euismod nisi.",
    github: "https://github.com/kyledf/portfolio",
    demo: "https://kyledf.github.io/portfolio",
    icons: [<FaReact size={30} />, <FaHtml5 size={30} />, <SiCss3 size={30} />, <SiJavascript size={30} />],
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
        {data.map(({ id, title, img, about, github, demo, icons }) => {
          return (
            <Project
              id={id}
              title={title}
              img={img}
              about={about}
              github={github}
              demo={demo}
              icon={icons}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
