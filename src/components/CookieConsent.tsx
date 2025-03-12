// src/components/CookieConsent.tsx
import React, { useState, useEffect } from 'react';
import '../App.css';

const CookieConsent: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      // Show the banner after a small delay to allow the page to load
      const timer = setTimeout(() => {
        setVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem('cookie_consent', JSON.stringify({
      essential: true,
      analytics: true,
      marketing: true,
      preferences: true,
      timestamp: new Date().toISOString()
    }));
    setVisible(false);
  };

  const acceptEssential = () => {
    localStorage.setItem('cookie_consent', JSON.stringify({
      essential: true,
      analytics: false,
      marketing: false,
      preferences: false,
      timestamp: new Date().toISOString()
    }));
    setVisible(false);
  };

  const openSettings = () => {
    // In a more complete implementation, this would open a modal with detailed cookie settings
    // For now, we'll just accept essential cookies
    acceptEssential();
  };

  if (!visible) return null;

  return (
    <div className="cookie-consent">
      <div className="cookie-content">
        <h3>We value your privacy</h3>
        <p>
          We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies. Read our <a href="/cookie-policy">Cookie Policy</a> and <a href="/privacy-policy">Privacy Policy</a> to learn more.
        </p>
        <div className="cookie-actions">
          <button className="cookie-button secondary" onClick={acceptEssential}>Essential Only</button>
          <button className="cookie-button secondary" onClick={openSettings}>Cookie Settings</button>
          <button className="cookie-button primary" onClick={acceptAll}>Accept All</button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;