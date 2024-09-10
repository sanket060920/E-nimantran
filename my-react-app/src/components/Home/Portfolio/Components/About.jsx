import React from "react";
import NavBar from "../Components/NaveBar";
import BottomFooter from "../Components/BottomFooter";
import '../Components/Styles/About.css'

const About = () => {
  return (
    <div className="profile-container">
      <NavBar/>
      <div className="About_content">
            <div className="Summary">
                <h1 className="Summary_heading">About Me</h1>
                <p className="Summary_para">Results-driven Network Engineer with 1.5 years of experience in designing, developing, and maintaining 
                scalable network solutions and applications. Proficient in Python, Java, C++, and object-oriented programming 
                with a strong background in network protocols, data structures, and database management. Adept at 
                leveraging version control tools and debugging techniques to deliver high-quality, efficient code. Passionate 
                about solving complex problems and driving innovation. </p>
            </div>
            <div className="Skills">
                <h1 className="Skills_heading">Skills</h1>
                <p className="Skills_para">Programming Languages: Python, Java, C++, Object-Oriented Programming (OOP),Data Structures 
                and Algorithms (DSA), Database Management : SQL, Networking: TCP/IP, DNS, DHCP, Tools: Git
                GitHub, VS Code, Jupyter Notebook  </p>
            </div>
      </div>
      <BottomFooter/>
    </div>
  );
};

export default About;
