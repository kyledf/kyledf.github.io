import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.png";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.png";

const data = [
  {
    id: 1,
    title: "SportsHub",
    img: IMG1,
    github: "https://github.com",
    liveDemo: "https://www.youtube.com/watch?v=R73ASu2QsIc",
  },
  {
    id: 2,
    title: "Music Box App",
    img: IMG2,
    github: "https://github.com",
    liveDemo: "https://dribbble.com/shots/18577041-Music-Box-App",
  },
  {
    id: 3,
    title: "CryptoWatch App UI Design",
    img: IMG3,
    github: "https://github.com",
    liveDemo: "https://dribbble.com/shots/18574935-CryptoWatch-App-UI-Design",
  },
  {
    id: 4,
    title: "Trip Planner & Social App Concept",
    img: IMG4,
    github: "https://github.com",
    liveDemo: "https://dribbble.com/shots/18575656-Trip-Planner-Social-App-Concept",
  },
  {
    id: 5,
    title: "Discovery, Swapping and Settings screen",
    img: IMG5,
    github: "https://github.com",
    liveDemo: "https://dribbble.com/shots/18576680-Discovery-Swapping-and-Settings-screen",
  },
  {
    id: 6,
    title: "Rental App — Booking",
    img: IMG6,
    github: "https://github.com",
    liveDemo: "https://dribbble.com/shots/18580225-Rental-App-Booking",
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
        data.map(({id, title, img, github, liveDemo}) => {
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
                  href={liveDemo}
                  className="button buttonPrimary"
                  target="_blank"
                >
                  Live Demo
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
