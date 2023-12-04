// FooterComponent.jsx
import React from 'react';
import '../footer/footer.css';

function FooterComponent() {
  return (
    <footer className="footer-container">
      <div className="footer-section">
        <h2>Navigation</h2>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h2>Contact Us</h2>
        <p>Email: info@example.com</p>
        <p>Phone: +1 (123) 456-7890</p>
      </div>
      <div className="footer-section">
        <p>&copy; 2023 Your Company</p>
      </div>
    </footer>
  );
}

export default FooterComponent;
