// src/components/Footer.tsx
import React from 'react';
import '../App.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h3>GeoFoundation</h3>
          <p>
            Transforming geopolitical risk management with AI-driven intelligence for multinational companies.
          </p>
        </div>
        
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#platform">Platform</a></li>
            <li><a href="#team">Team</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        
        <div className="footer-column">
          <h3>Contact Info</h3>
          <ul className="footer-links">
            <li>Wannerstrasse 35, 8045 Zurich</li>
            <li>Switzerland: +41 76 652 43 70</li>
            <li>Austria: +43 677 6163 2531</li>
            <li><a href="mailto:contact@geofoundation.ai">contact@geofoundation.ai</a></li>
          </ul>
        </div>
        
        <div className="footer-column">
          <h3>Legal</h3>
          <ul className="footer-links">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Cookie Policy</a></li>
          </ul>
        </div>
      </div>
      
      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} GeoFoundation. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
