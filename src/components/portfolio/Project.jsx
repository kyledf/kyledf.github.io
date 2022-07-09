import React from "react";
import "./portfolio.css";
import { useState } from "react";
import { FaExpandAlt } from "react-icons/fa";

const Project = (props) => {
  const [expand, setExpand] = useState(false);

  return (
    <article key={props.id} className="portfolioItem">
      <div className="portfolioItemImg">
        <img src={props.img} alt={props.title} />
      </div>
      <h3>{props.title}</h3>
      <div className="about">
        <p>{expand && props.about}</p>
      </div>
      <div className="portfolioItemCTA">
        <a href={props.github} className="button" target="_blank">
          Github
        </a>
        <a
          href={props.videoDemo}
          className="button buttonPrimary"
          target="_blank"
        >
          Video Demo
        </a>
        <a
          className="button"
          onClick={() => {
            setExpand(!expand);
          }}
        >
          <FaExpandAlt />
        </a>
      </div>
    </article>
  );
};

export default Project;
