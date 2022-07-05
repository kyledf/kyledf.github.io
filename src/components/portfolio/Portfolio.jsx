import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";

const data = [
  {
    id: 1,
    title: "SportsHub",
    img: IMG1,
    github: "https://github.com/kyleCS50/SportsHub",
    videoDemo: "https://www.youtube.com/watch?v=R73ASu2QsIc",
  },
  {
    id: 2,
    title: "CabsOnline",
    img: IMG2,
    github: "https://github.com/kyleCS50/cabsOnline",
    videoDemo: "https://youtu.be/4gldyWe_-m4",
  },
  {
    id: 3,
    title: "Virtual Pet Game",
    img: IMG3,
    github: "https://github.com/kyleCS50/KyleVirtualPet",
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
        {
        data.map(({id, title, img, github, videoDemo}) => {
          return (
            <article key={id} className="portfolioItem">
              <div className="portfolioItemImg">
                <img src={img} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolioItemCTA">
                <a href={github} className="button" target="_blank">
                  Github
                </a>
                <a
                  href={videoDemo}
                  className="button buttonPrimary"
                  target="_blank"
                >
                  Video Demo
                </a>
              </div>
            </article>
          );
        })
        }
      </div>
    </section>
  );
};

export default Portfolio;