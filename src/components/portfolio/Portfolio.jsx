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
      "An app where athletes can create and join events and teams, and chat with other athletes. The app is built with React Native, JavaScript, and Firebase.",
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
      "CabsOnline allows users to book a cab service from a pick-up destination to a drop-off destination. If you are an admin of the page you can assign bookings to drivers and view bookings by searching their booking ID. The website is built with HTML, CSS, and JavaScript, with PHP and AJAX to handle processing bookings.",
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
      "This game app allows users to play with a virtual pet of their choosing. They can feed and play with the pet or let the pet sleep. The aim of the game is to get the highest number of rounds. The game was built with Java, SQL, and Apache Derby DB.",
    github: "https://github.com/kyledf/KyleVirtualPet",
    demo: "https://youtu.be/ig_glJpfH_g",
    icons: [<FaJava size={30} />, <SiMysql size={30} />],
  },
  {
    id: 4,
    title: "Portfolio Website",
    img: IMG4,
    about: "This website allows me to showcase my skills and projects, let people connect with me via my socials, and get in contact with me.",
    github: "https://github.com/kyledf/portfolio",
    demo: "https://kyledf.me",
    icons: [
      <FaReact size={30} />,
      <FaHtml5 size={30} />,
      <SiCss3 size={30} />,
      <SiJavascript size={30} />,
    ],
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
