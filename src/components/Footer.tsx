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
          <h3>Contact Info</h3>
          <ul className="footer-links contact-align-right">
            <li>+43 677 6163 2531</li>
            <li><a href="mailto:contact@geofoundation.ai">contact@geofoundation.ai</a></li>
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
