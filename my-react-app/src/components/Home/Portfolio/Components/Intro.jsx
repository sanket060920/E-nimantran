import React from "react";
import { Link } from 'react-router-dom';


const Intro = () => {
  return (
    <div className="profile-content">
        <div className="profile-text">
          <h2>---- Hello</h2>
          <h1>
            I'm <span className="highlight-text">Sanket Godse</span>
          </h1>
          <p>
            This is Sanket Godse , visual designer, photographer, web developer, and creative director located in the United States, looking to work around the globe.
          </p>
          <button className="cv-button"><Link to="/Portfolio/Resume">My Resume</Link></button>
        </div>
        <div className="profile-image">
          <img src={require("../Components/Images/MyPhoto.png")} alt="Profile" />
        </div>
      </div>
  );
};

export default Intro;
