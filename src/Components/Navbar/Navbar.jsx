import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="n-container">
      <div className="n-left">
        <h2>Portfolio.</h2>
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul>
            <Link spy={true} to="Navbar" smooth={true}>
              <li>Home</li>
            </Link>
            <Link spy={true} to="about" smooth={true}>
              <li>About</li>
            </Link>
            <Link spy={true} to="Education" smooth={true}>
              <li>Education</li>
            </Link>
            <Link spy={true} to="Skills" smooth={true}>
              <li>Skills</li>
            </Link>
          </ul>
        </div>
        <Link spy={true} to="Contact" smooth={true}>
          <button className="button">Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
