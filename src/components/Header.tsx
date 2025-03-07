// src/components/Header.tsx
import React, { useState, useEffect } from 'react';
import '../App.css';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <nav className="navbar">
        <div className="logo-container">
          <span className="logo-text">GeoFoundation</span>
        </div>
        <button className="mobile-menu-btn" onClick={toggleMenu}>
          <span>☰</span>
        </button>
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li><a href="#hero" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
          <li><a href="#platform" onClick={() => setMenuOpen(false)}>Platform</a></li>
          <li><a href="#team" onClick={() => setMenuOpen(false)}>Team</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
          <li>
            <a 
              href="#contact" 
              className="cta-link" 
              onClick={(e) => {
                setMenuOpen(false);
                // Pre-fill the contact form message
                setTimeout(() => {
                  const messageElement = document.getElementById('message') as HTMLTextAreaElement;
                  if (messageElement) {
                    messageElement.value = "I'm interested in getting early access to GeoFoundation's platform.";
                    // Trigger the onChange event to update React state
                    messageElement.dispatchEvent(new Event('change', { bubbles: true }));
                  }
                }, 100); // Small delay to ensure form is loaded
              }}
            >
              Get Early Access
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
