import React from "react";
import "./portfolio.css";
import { useState } from "react";
import { MdExpandMore } from "react-icons/md";

const Project = (props) => {
  const [expand, setExpand] = useState(false);
  const [itemName, setItemName] = useState("portfolioItem");

  return (
    <article key={props.id} className={itemName}>
      <div className="portfolioItemImg">
        <img src={props.img} alt={props.title} />
      </div>
      <h3>{props.title}</h3>
      <div className="expand">
        <h4>About</h4>
        <div className="about">{props.about}</div>
        <h4>Tools Used</h4>
        <div className="icons">{props.icon}</div>
      </div>
      <div className="portfolioItemCTA">
        <a href={props.github} className="button" target="_blank">
          Github
        </a>
        <a href={props.demo} className="button buttonPrimary" target="_blank">
          Demo
        </a>
        <label
          className="button expandButton"
          onClick={() => {
            setExpand(!expand);
            setItemName(expand ? "portfolioItem" : "portfolioItemExpanded");
          }}
        >
          <MdExpandMore />
        </label>
      </div>
    </article>
  );
};

export default Project;
