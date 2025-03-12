// src/pages/PrivacyPolicy.tsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <section className="content-section">
        <div className="container">
          <h1 className="policy-title">Privacy Policy</h1>
          <p className="policy-date">Last updated: March 11, 2025</p>
          
          <div className="policy-content">
            <h2>1. Introduction</h2>
            <p>
              At GeoFoundation, we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
            <p>
              This Privacy Policy complies with the General Data Protection Regulation (GDPR), the ePrivacy Directive, and other applicable European privacy laws.
            </p>

            <h2>2. Data Controller</h2>
            <p>
              GeoFoundation is the data controller responsible for your personal data. If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p>
              Email: <a href="mailto:privacy@geofoundation.ai">privacy@geofoundation.ai</a><br />
              Address: [Company Address]
            </p>

            <h2>3. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <h3>3.1 Personal Data</h3>
            <p>
              Personal data refers to any information that identifies or can be used to identify you directly or indirectly. We may collect:
            </p>
            <ul>
              <li>Contact information (name, email address, phone number, company)</li>
              <li>Account information if you create an account on our platform</li>
              <li>Communication data from correspondence with us</li>
              <li>Marketing and communications preferences</li>
            </ul>

            <h3>3.2 Technical Data</h3>
            <p>When you visit our website, we automatically collect:</p>
            <ul>
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Device information</li>
              <li>Pages visited and actions taken on our site</li>
              <li>Time and date of your visit</li>
              <li>Referral source</li>
            </ul>

            <h2>4. How We Collect Your Data</h2>
            <p>We collect data through:</p>
            <ul>
              <li>Direct interactions: When you contact us, create an account, subscribe to our services, or request information</li>
              <li>Automated technologies: Cookies, server logs, and similar technologies (see our Cookie Policy)</li>
              <li>Third parties: Business partners, service providers, analytics providers, and advertising networks</li>
            </ul>

            <h2>5. How We Use Your Data</h2>
            <p>We process your personal data based on one or more of the following legal bases:</p>
            <h3>5.1 Legitimate Interests</h3>
            <p>
              We may process your data when necessary for our legitimate interests, provided your rights don't override these interests, including:
            </p>
            <ul>
              <li>Improving and personalizing our services</li>
              <li>Analyzing how our website and services are used</li>
              <li>Marketing our services to you</li>
              <li>Preventing fraud and ensuring network security</li>
            </ul>

            <h3>5.2 Performance of Contract</h3>
            <p>
              We process your data to perform our obligations under any contract we have with you, or to take steps at your request before entering into such a contract.
            </p>

            <h3>5.3 Consent</h3>
            <p>
              Where we rely on your consent to process personal data, you have the right to withdraw this consent at any time by contacting us or using the opt-out methods provided.
            </p>

            <h3>5.4 Legal Obligation</h3>
            <p>
              We may process your data when necessary to comply with a legal obligation.
            </p>

            <h2>6. Data Sharing and Disclosures</h2>
            <p>We may share your personal data with:</p>
            <ul>
              <li>Service providers who perform services on our behalf</li>
              <li>Professional advisers (lawyers, bankers, auditors, insurers)</li>
              <li>Regulatory authorities, when required by law</li>
              <li>Business partners, for co-marketing activities (with your consent)</li>
            </ul>
            <p>
              We require all third parties to respect the security of your personal data and to treat it in accordance with the law.
            </p>

            <h2>7. International Transfers</h2>
            <p>
              We may transfer your personal data to countries outside the European Economic Area (EEA). Whenever we do this, we ensure a similar degree of protection by using specific contracts approved by the European Commission that give personal data the same protection it has in Europe.
            </p>

            <h2>8. Data Security</h2>
            <p>
              We have implemented appropriate security measures to protect your personal data from accidental loss, unauthorized access, alteration, and disclosure. Access to your personal data is limited to those employees, agents, contractors, and other third parties who have a business need to know.
            </p>

            <h2>9. Data Retention</h2>
            <p>
              We will retain your personal data only for as long as necessary to fulfill the purposes for which we collected it, including to satisfy any legal, accounting, or reporting requirements.
            </p>

            <h2>10. Your Legal Rights</h2>
            <p>Under the GDPR, you have the right to:</p>
            <ul>
              <li>Access your personal data</li>
              <li>Correct inaccurate personal data</li>
              <li>Request erasure of your personal data</li>
              <li>Object to processing of your personal data</li>
              <li>Request restriction of processing your personal data</li>
              <li>Request transfer of your personal data</li>
              <li>Withdraw consent where we rely on consent to process your personal data</li>
            </ul>
            <p>
              To exercise any of these rights, please contact us at <a href="mailto:privacy@geofoundation.ai">privacy@geofoundation.ai</a>. You will not have to pay a fee to access your personal data or to exercise any of your other rights, unless your request is clearly unfounded, repetitive, or excessive.
            </p>

            <h2>11. Complaints</h2>
            <p>
              If you have any complaints about how we handle your personal data, please contact us first. You also have the right to lodge a complaint with your local data protection authority.
            </p>

            <h2>12. Changes to this Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;