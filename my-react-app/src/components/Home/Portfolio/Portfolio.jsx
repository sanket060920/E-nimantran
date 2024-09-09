import React from "react";
import "../Portfolio/Portfolio.css";

const ProfileComponent = () => {
  return (
    <div className="profile-container">
      <nav className="navbar">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Portfolio</li>
          {/* <li>Resume</li> */}
          {/* <li>Services</li> */}
        </ul>
      </nav>

      <div className="profile-content">
        <div className="profile-text">
          <h2>---- Hello</h2>
          <h1>
            I'm <span className="highlight-text">Sanket Godse</span>
          </h1>
          <p>
            This is Sanket Godse , visual designer, photographer, web developer, and creative director located in the United States, looking to work around the globe.
          </p>
          <button className="cv-button">Download CV</button>
        </div>
        <div className="profile-image">
          <img src={require("../Images/MyPhoto.png")} alt="Profile" />
        </div>
      </div>

      <footer className="profile-footer">
        <ul className="social-links">
          <li>Instagram</li>
          <li>Linkedin</li>
          <li>Github</li>
          <li>Twitter</li>
        </ul>
      </footer>
    </div>
  );
};

export default ProfileComponent;
