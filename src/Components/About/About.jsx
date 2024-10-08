import React from "react";
import "./About.css";

const handleDownloadButton = () => {
    window.open('Assets/img/MyResume.pdf')
}

const About = () => {
  return (
    <div className="About" id="about">
      <div className="a-top">
        <div className="a-name">
          <span>About </span>
          <span>Me</span>
        </div>
        <div>
          <span>
            Frontend Developer with hands on experiences in web designing and
            development.
          </span>
        </div>
        <hr />
      </div>
      <div className="a-bottom">
        <div className="a-bottom-top">
          <div className="about-desc-left">
            <span>
              Name: <span className="a-span">Rohit Gawde</span>{" "}
            </span>
            <span>
              Age: <span className="a-span">23</span>{" "}
            </span>
            <span>
              Qualification: <span className="a-span">BE/BTech</span>
            </span>
            <span>
              Language: <span className="a-span">Hindi, English</span>
            </span>
          </div>
          <div className="dw-resume-btn">
            {/* <a href="https://docs.google.com/document/d/1pG4ch4A0voupL-4mNhRP3dgRAPKDq0dp0v3txe8XzKk/edit?usp=sharing" target="_blank" rel="noreferrer"> */}
            
              <button className="button" onClick={handleDownloadButton}>Download Resume</button>
            {/* </a> */}
          </div>
        </div>
        <div className="a-bottom-bottom">
          <div className="list-btn">
            <a href="https://list-rho.vercel.app/" target="_blank" className="button">See the project list</a>
          </div>
          <div className="card">
            <span>10+</span>
            <span>Projects</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
