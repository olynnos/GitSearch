import React from "react";
import { IconContext } from "react-icons";
import { FaGithubAlt } from "react-icons/fa";

const Navbar = props => {
  return (
    <nav className="navbar bg-primary custom-nav">
      <IconContext.Provider value={{ className: "git-logo" }}>
        <FaGithubAlt />
      </IconContext.Provider>
      <h1>{props.title}</h1>
    </nav>
  );
};

export default Navbar;
