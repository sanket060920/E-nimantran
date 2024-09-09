import React from "react";
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar">
    <ul>
      <li><Link to="/PortFolio">Home</Link></li>
      <li><Link to="/Portfolio/About">About</Link></li>
      <li><Link to="/Portfolio/About">My Work</Link></li>
      {/* <li>Resume</li> */}
      {/* <li>Services</li> */}
    </ul>
  </nav>
  );
};

export default NavBar;
