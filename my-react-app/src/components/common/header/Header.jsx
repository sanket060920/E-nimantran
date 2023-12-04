import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css'; 

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Your Logo
        </Link>

        <div className={`menu-icon ${isMenuOpen && 'active'}`} onClick={toggleMenu}>
          <div className="line line1"></div>
          <div className="line line2"></div>
          <div className="line line3"></div>
        </div>

        <ul className={`nav-menu ${isMenuOpen && 'active'}`}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links" onClick={toggleMenu}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links" onClick={toggleMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
