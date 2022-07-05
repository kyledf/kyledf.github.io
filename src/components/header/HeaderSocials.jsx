import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="headerSocials">
      <a href="https://www.linkedin.com/in/kyle-francis-655540225/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/kyledf" target="_blank">
        <BsGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;