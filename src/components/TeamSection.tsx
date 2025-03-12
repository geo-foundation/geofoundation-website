// src/components/TeamSection.tsx
import React from 'react';
import '../App.css';

const TeamSection: React.FC = () => {
  return (
    <section id="team" className="team-section">
      <div className="container">
        <h2 className="section-title">Team</h2>
        <p className="section-subtitle">
          Our team combines expertise in geopolitical analysis, risk management, and artificial intelligence to deliver cutting-edge solutions.
        </p>
        
        <div className="team-members">
          <div className="team-member">
            <div className="member-image">
              <img src="/data/team/kilian.jpg" alt="Kilian Sprenkamp" />
            </div>
            <div className="team-info">
              <h3>Kilian Sprenkamp</h3>
              <p className="member-title">Co-Founder</p>
              <p className="member-bio" style={{ textAlign: 'justify' }}>
                Doctoral Researcher specializing in AI & Geopolitical Risk Analysis. Prior experience as a Machine Learning Engineer.
              </p>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/kiliansprenkamp/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://github.com/sprenkamp" target="_blank" rel="noopener noreferrer">Github</a>
              </div>
            </div>
          </div>
          
          <div className="team-member">
            <div className="member-image">
              <img src="/data/team/konstantin.jpg" alt="Konstantin Gerner" />
            </div>
            <div className="team-info">
              <h3>Konstantin Gerner</h3>
              <p className="member-title">Co-Founder</p>
              <p className="member-bio" style={{ textAlign: 'justify' }}>
              Business Continuity & Risk Management Consultant with experience in developing AI-driven solutions for global enterprises.
              </p>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/konstantingerner/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </div>
            </div>
          </div>
          
        </div>
        
        <div className="careers-section">
          <h3>Join Our Team</h3>
          <p>
            We're looking for passionate individuals to help us build the future of geopolitical risk intelligence. 
            If you're interested in joining our team, pleass use the contact form below to get in touch.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
