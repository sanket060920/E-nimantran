import React from "react";
import NavBar from "../Components/NaveBar";
import BottomFooter from "../Components/BottomFooter";
import '../Components/Styles/About.css'

const About = () => {
  return (
    <div className="profile-container">
      <NavBar/>
      <div className="About_content">
        <h1 className="About_heading">About Me</h1>
        <p className="About_para">Information about you, your background, skills, and experience.</p>
        <p className="About_para">Information about you, your background, skills, and experience.</p>
        <p className="About_para">Information about you, your background, skills, and experience.</p>
        <p className="About_para">Information about you, your background, skills, and experience.</p>
        <p className="About_para">Information about you, your background, skills, and experience.</p>
        <p className="About_para">Information about you, your background, skills, and experience.</p>
        <p className="About_para">Information about you, your background, skills, and experience.</p>
        <p className="About_para">Information about you, your background, skills, and experience.</p>
        <p className="About_para">Information about you, your background, skills, and experience.</p>
      </div>
      <BottomFooter/>

    </div>
  );
};

export default About;
