// src/components/AboutSection.tsx
import React from 'react';
import '../App.css';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About GeoFoundation</h2>
        <div className="about-content" style={{ maxWidth: '100%' }}>
          <p className="lead-text" style={{ textAlign: 'justify' }}>
          Never be surprised by the geopolitical risks affecting your supply chain. GeoFoundation minimizes manual effort, improves response times, and turns global uncertainty into predictable, data-driven actionable insights.
          </p>
          <p style={{ textAlign: 'justify' }}>
          Our name <strong>GeoFoundation</strong> combines <em>geo</em> (representing geopolitical data) with <em>foundation models</em> (advanced AI technologies like GPT, LLaMA, and Deepseek). We automate risk assessment and compliance activities while bridging global trends with on-the-ground realities to transform fragmented signals into strategic foresight.
          </p>
          <div className="about-highlights">
            <div className="highlight-item">
              <div className="highlight-icon">🔍</div>
              <div className="highlight-text">
                <h3>Data-Driven Intelligence</h3>
                <p style={{ textAlign: 'justify' }}>Our platform analyzes thousands of data points from diverse sources in real-time - delivering up-to-date risk insights to keep you ahead of global uncertainty.</p>
              </div>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon">🤖</div>
              <div className="highlight-text">
                <h3>AI Agents</h3>
                <p style={{ textAlign: 'justify' }}>Our AI Agents uses advanced Large Language Models and specialized tools to autonomously gather data to generate actionable insights. Operating continuously, they deliver proactive alerts, reduce manual workloads, and transform evolving geopolitical signals into critical intelligence</p>
              </div>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon">🌐</div>
              <div className="highlight-text">
                <h3>Strategic Foresight & Compliance</h3>
                <p style={{ textAlign: 'justify' }}>Turn global uncertainty into predictable, data-driven actionable insights while ensuring seamless regulatory compliance.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
