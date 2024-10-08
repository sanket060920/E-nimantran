import React from "react";
import NavBar from "../Components/NaveBar";
import BottomFooter from "../Components/BottomFooter";
import '../Components/Styles/Resume.css'


const Resume = () => {
  return (
    <div className="profile-container">
      <NavBar/>
      <div className="Resume_content">
        <h1>Download My Resume</h1>
        <a href="my-react-app\public\Files\Resume(Sanket Godse).txt" download>
            <button className="cv-button">Download CV</button>
        </a>
      </div>
      <BottomFooter/>
      {/* my-react-app\src\components\Home\Portfolio\Files\Resume(Sanket Godse).txt */}

    </div>


  );
};

export default Resume;
