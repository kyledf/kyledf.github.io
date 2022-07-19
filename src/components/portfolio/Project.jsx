import React from "react";
import "./portfolio.css";
import { useState } from "react";
import { MdExpandMore } from "react-icons/md";

const Project = (props) => {
  const {id, img, title, about, icon, github, demo} = props;
  const [expand, setExpand] = useState(false);
  const [itemName, setItemName] = useState("portfolioItem");

  return (
    <article key={id} className={itemName}>
      <div className="portfolioItemImg">
        <img src={img} alt={title} />
      </div>
      <h3>{title}</h3>
      <div className="expand">
        <h4>About</h4>
        <div className="about">{about}</div>
        <h4>Tools Used</h4>
        <div className="icons">{icon}</div>
      </div>
      <div className="portfolioItemCTA">
        <a href={github} className="button" target="_blank">
          Github
        </a>
        <a href={demo} className="button buttonPrimary" target="_blank">
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
