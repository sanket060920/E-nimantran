import React from "react";
// import { Link } from 'react-router-dom';
import "../Portfolio/Portfolio.css";
import Intro from "./Components/Intro";
import NavBar from "./Components/NaveBar";
import BottomFooter from "./Components/BottomFooter";

const ProfileComponent = () => {
  return (
    <div className="profile-container">
      <NavBar/>
      <Intro/>
      <BottomFooter/>
    </div>
  );
};

export default ProfileComponent;
