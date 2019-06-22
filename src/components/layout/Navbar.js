import React from "react";
import { IconContext } from "react-icons";
import { FaGithubAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = props => {
  return (
    <nav className="navbar bg-primary custom-nav">
      <IconContext.Provider value={{ className: "git-logo" }}>
        <FaGithubAlt />
      </IconContext.Provider>
      <h1>{props.title}</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
