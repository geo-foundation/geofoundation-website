// src/pages/TermsOfService.tsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TermsOfService: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <section className="content-section">
        <div className="container">
          <h1 className="policy-title">Terms of Service</h1>
          <p className="policy-date">Last updated: March 11, 2025</p>
          
          <div className="policy-content">
            <h2>1. Introduction</h2>
            <p>
              Welcome to GeoFoundation. These Terms of Service ("Terms") govern your access to and use of our website, products, and services ("Services"). Please read these Terms carefully before using our Services.
            </p>
            <p>
              By accessing or using our Services, you agree to be bound by these Terms. If you disagree with any part of the Terms, you may not access or use our Services.
            </p>

            <h2>2. Definitions</h2>
            <p>Throughout these Terms:</p>
            <ul>
              <li>"Company", "we", "us", and "our" refer to GeoFoundation</li>
              <li>"You" and "your" refer to the individual or entity accessing or using our Services</li>
              <li>"Platform" refers to our intelligence platform that analyzes geopolitical data</li>
              <li>"Content" refers to any information, data, text, software, graphics, and other materials displayed on or available through our Services</li>
            </ul>

            <h2>3. Account Registration</h2>
            <p>
              To access certain features of our Services, you may need to register for an account. You must provide accurate, current, and complete information during the registration process and keep your account information updated.
            </p>
            <p>
              You are responsible for safeguarding your account credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account.
            </p>

            <h2>4. Services and Subscription</h2>
            <p>
              GeoFoundation offers an intelligence platform that analyzes geopolitical data to help multinational companies navigate global environments.
            </p>
            <p>
              We may offer various subscription plans with different features and pricing. The features and limitations of each subscription plan will be described on our website or in a separate agreement.
            </p>
            <p>
              We reserve the right to modify, suspend, or discontinue any part of our Services at any time, with or without notice.
            </p>

            <h2>5. Fees and Payment</h2>
            <p>
              Certain Services may require payment of fees. All fees are stated in the applicable order form or subscription plan.
            </p>
            <p>
              Unless otherwise specified, fees are non-refundable. We may change our fees at any time with notice. Continued use of our Services after a fee change constitutes your acceptance of the new fees.
            </p>

            <h2>6. User Conduct</h2>
            <p>You agree not to:</p>
            <ul>
              <li>Use our Services in any way that violates any applicable law or regulation</li>
              <li>Attempt to probe, scan, or test the vulnerability of our systems or networks</li>
              <li>Attempt to access data not intended for you</li>
              <li>Interfere with or disrupt our Services or servers or networks connected to our Services</li>
              <li>Impersonate any person or entity or falsely state or misrepresent your affiliation with a person or entity</li>
              <li>Attempt to decompile, reverse engineer, disassemble, or hack our Services</li>
              <li>Use our Services to transmit any malicious code or harmful content</li>
              <li>Collect or harvest any information from our Services without our consent</li>
            </ul>

            <h2>7. Intellectual Property Rights</h2>
            <p>
              Our Services and all content, features, and functionality are owned by GeoFoundation, its licensors, or other providers and are protected by copyright, trademark, and other intellectual property laws.
            </p>
            <p>
              You are granted a limited, non-exclusive, non-transferable, and revocable license to use our Services for their intended purpose.
            </p>
            <p>
              Any feedback, comments, or suggestions you provide regarding our Services may be used by us without restriction.
            </p>

            <h2>8. Third-Party Links and Services</h2>
            <p>
              Our Services may contain links to third-party websites or services that are not owned or controlled by GeoFoundation. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services.
            </p>

            <h2>9. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, GeoFoundation shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
            </p>
            <ul>
              <li>Your use or inability to use our Services</li>
              <li>Any conduct or content of any third party on our Services</li>
              <li>Unauthorized access, use, or alteration of your transmissions or content</li>
              <li>Interruption, suspension, or termination of our Services</li>
              <li>Any errors, omissions, or inaccuracies in our content or Services</li>
            </ul>

            <h2>10. Disclaimer of Warranties</h2>
            <p>
              Our Services are provided on an "as is" and "as available" basis. GeoFoundation expressly disclaims all warranties of any kind, whether express or implied, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
            </p>
            <p>
              We do not warrant that our Services will be uninterrupted, secure, accurate, complete, or error-free.
            </p>

            <h2>11. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless GeoFoundation, its officers, directors, employees, agents, and affiliates from and against any and all claims, liabilities, damages, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising from:
            </p>
            <ul>
              <li>Your use of our Services</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any rights of a third party</li>
              <li>Your conduct in connection with our Services</li>
            </ul>

            <h2>12. Term and Termination</h2>
            <p>
              These Terms shall remain in full force and effect while you use our Services. We may terminate or suspend your access to our Services immediately, without prior notice or liability, for any reason, including without limitation if you breach these Terms.
            </p>
            <p>
              Upon termination, your right to use our Services will immediately cease. All provisions of these Terms which by their nature should survive termination shall survive, including without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
            </p>

            <h2>13. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of [Your Country], without regard to its conflict of law provisions.
            </p>

            <h2>14. Changes to Terms</h2>
            <p>
              We reserve the right to modify or replace these Terms at any time. We will provide notice of any material changes by updating the "Last updated" date at the top of these Terms or by other means as determined by us.
            </p>
            <p>
              Your continued use of our Services after such changes constitutes your acceptance of the new Terms.
            </p>

            <h2>15. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at <a href="mailto:legal@geofoundation.ai">legal@geofoundation.ai</a>.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default TermsOfService;