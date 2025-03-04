// src/components/PlatformSection.tsx
import React from 'react';
import '../App.css';

const PlatformSection: React.FC = () => {
  return (
    <section id="platform" className="platform-section">
      <div className="container">
        <h2 className="section-title">Our Intelligence Platform</h2>
        <p className="section-subtitle">
          Our intelligent platform integrates internal company data with real-time geopolitical information, leveraging agentic AI to deliver proactive decision support.
        </p>
        
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🤖</div>
            <h3>Geo-Bot Assistant</h3>
            <p>An intuitive AI assistant delivering comprehensive analyses of geopolitical risks. Ask questions in natural language and receive in-depth intelligence about any situation affecting your business.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Automated Reporting</h3>
            <p>Customized reports that streamline decision-making. Our AI agents generate regular summaries of emerging risks, regulatory changes, and market opportunities relevant to your operations.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Real-Time Alerts</h3>
            <p>Immediate notifications that help manage risks proactively. Get instant alerts about geopolitical developments, supply chain disruptions, or market shifts that could impact your business.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">🔄</div>
            <h3>Digital Twin Simulation</h3>
            <p>Test business scenarios before implementation. Our platform creates a digital replica of your supply chain to simulate the impact of geopolitical events on your operations.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3>Mobile Accessibility</h3>
            <p>Access critical insights anywhere, anytime. Our platform is fully responsive and available on all devices, ensuring you stay informed even when on the go.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>Enterprise Security</h3>
            <p>Your data is protected with enterprise-grade security. We employ end-to-end encryption, secure authentication, and regular security audits to safeguard your sensitive information.</p>
          </div>
        </div>
        
        <div className="platform-cta">
          <h3>Ready to transform your approach to geopolitical risk?</h3>
          <button className="cta-button">Request a Demo</button>
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;
