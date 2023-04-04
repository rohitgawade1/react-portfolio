import React from "react";
import "./Intro.css";
import img from "../../Images/bg.jpg";
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <div className="i-container">
      <div className="i-left">
        <div className="i-name">
          <span>Hi! I Am</span>
          <span>Rohit Gawde</span>
          <span>Frontend Developer | Web Developer</span>
        </div>
        <Link spy={true} to="Contact" smooth={true}>
          <button className="button">Hire me</button>
        </Link>
      </div>
      <div className="i-right">
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default Intro;
