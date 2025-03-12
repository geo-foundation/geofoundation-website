// src/components/PlatformSection.tsx
import React from 'react';
import '../App.css';

const PlatformSection: React.FC = () => {
  return (
    <section id="platform" className="platform-section">
      <div className="container">
        <h2 className="section-title">Our Intelligence Platform</h2>
        <p className="section-subtitle" style={{ textAlign: 'justify' }}>
        GeoFoundation seamlessly integrates internal company data with real-time geopolitical intelligence from key data sources (news, social media, financial, regulatory, scientific, and environmental data) automatically filtering out noise to highlight what matters to your business.</p>
        
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🔗</div>
            <h3>Works with your Data</h3>
            <p style={{ textAlign: 'justify' }}>Seamlessly connects internal company data (SAP, ERP) with real-time geopolitical insights from multimodal data streams (news, social media, financial, regulatory, scientific, environmental).</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🤖</div>
            <h3>AI Agents</h3>
            <p style={{ textAlign: 'justify' }}>Our Agentic AI harnesses foundational LLMs to drive autonomous analysis. Users can ask complex queries in natural language, and agents understand and use tools like sentiment analysis, predictive modeling, and trend forecasting to autonomously reach the user's goal.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Automated Reporting</h3>
            <p style={{ textAlign: 'justify' }}>Customized reports that streamline decision-making. Our AI agents generate regular summaries of emerging risks, regulatory changes, and market opportunities relevant to your operations.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Real-Time Alerts</h3>
            <p style={{ textAlign: 'justify' }}>Immediate notifications that help manage risks proactively. Get instant alerts about geopolitical developments, supply chain disruptions, or market shifts that could impact your business.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">⚖️</div>
            <h3>Compliance</h3>
            <p style={{ textAlign: 'justify' }}>
              Our platform ensures adherence to the Supply Chain Act by automating due diligence and risk assessments across your supplier network. With continuous monitoring, real-time alerts, and comprehensive supplier analysis, you remain compliant with evolving regulatory mandates while mitigating potential risks.
            </p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">🔐</div>
            <h3>Enterprise Security</h3>
            <p style={{ textAlign: 'justify' }}>Your data is protected with enterprise-grade security. We employ end-to-end encryption for all stored data and implement secure processing pipelines that isolate customer data when feeding information to foundation models, ensuring confidentiality and compliance with data protection standards.</p>
          </div>
        </div>
        
        <div className="platform-cta">
          <h3>Ready to transform your approach to geopolitical risk?</h3>
          <a href="#contact" className="cta-button" onClick={() => {
            // Pre-fill the contact form message
            const messageElement = document.getElementById('message') as HTMLTextAreaElement;
            if (messageElement) {
              messageElement.value = "I'm interested in scheduling a demo of GeoFoundation's platform.";
              // Trigger the onChange event to update React state
              messageElement.dispatchEvent(new Event('change', { bubbles: true }));
            }
          }}>Request a Demo</a>
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;
