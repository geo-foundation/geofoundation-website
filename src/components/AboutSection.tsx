// src/components/AboutSection.tsx
import React from 'react';
import '../App.css';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About GeoFoundation</h2>
        <div className="about-grid">
          <div className="about-content">
            <p className="lead-text">
              GeoFoundation enables companies to navigate geopolitical developments and empowers them with strategic foresight to turn risks into opportunities in a rapidly changing world.
            </p>
            <p>
              We connect global macro-level trends with on-the-ground realities, providing actionable insights that support risk management and compliance with evolving regulations.
            </p>
            <div className="about-highlights">
              <div className="highlight-item">
                <div className="highlight-icon">🔍</div>
                <div className="highlight-text">
                  <h3>Data-Driven Intelligence</h3>
                  <p>Our platform analyzes thousands of data points from diverse sources in real-time.</p>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">🤖</div>
                <div className="highlight-text">
                  <h3>Agentic AI Technology</h3>
                  <p>Autonomous agents provide proactive alerts and automate compliance reporting.</p>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">🌐</div>
                <div className="highlight-text">
                  <h3>Global Context Awareness</h3>
                  <p>Transform static risk scores into dynamic strategic insights with local context.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="image-placeholder">
              <div className="placeholder-text">Global Risk Intelligence Dashboard</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
