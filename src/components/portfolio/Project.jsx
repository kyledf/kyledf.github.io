import React from "react";
import "./portfolio.css";
import { useState } from "react";
import { BiExpand, BiCollapse } from "react-icons/bi";

const Project = (props) => {
  const [expand, setExpand] = useState(false);

  return (
    <article key={props.id} className="portfolioItem">
      <div className="portfolioItemImg">
        <img src={props.img} alt={props.title} />
      </div>
      <h3>{props.title}</h3>
      {expand && <h4>About</h4>}
      <div className="about">{expand && props.about}</div>
      {expand && <h4>Tools Used</h4>}
      <div className="icons">{expand && props.icon}</div>
      <div className="portfolioItemCTA">
        <a href={props.github} className="button" target="_blank">
          Github
        </a>
        <a href={props.demo} className="button buttonPrimary" target="_blank">
          Demo
        </a>
        <a
          className="button expandButton"
          onClick={() => {
            setExpand(!expand);
          }}
        >
         { expand? <BiCollapse/> : <BiExpand/>}
        </a>
      </div>
    </article>
  );
};

export default Project;
