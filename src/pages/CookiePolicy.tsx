// src/pages/CookiePolicy.tsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CookiePolicy: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <section className="content-section">
        <div className="container">
          <h1 className="policy-title">Cookie Policy</h1>
          <p className="policy-date">Last updated: March 11, 2025</p>
          
          <div className="policy-content">
            <h2>1. Introduction</h2>
            <p>
              This Cookie Policy explains how GeoFoundation ("we", "us", or "our") uses cookies and similar technologies on our website. This policy should be read alongside our Privacy Policy, which explains how we use your personal information.
            </p>
            <p>
              By continuing to browse or use our website, you agree to our use of cookies as described in this Cookie Policy.
            </p>

            <h2>2. What Are Cookies?</h2>
            <p>
              Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and provide information to the website owners.
            </p>
            <p>
              Cookies can be "persistent" or "session" cookies. Persistent cookies remain on your device when you go offline, while session cookies are deleted as soon as you close your web browser.
            </p>

            <h2>3. How We Use Cookies</h2>
            <p>We use cookies for the following purposes:</p>
            
            <h3>3.1 Essential Cookies</h3>
            <p>
              These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and account access. You may disable these by changing your browser settings, but this may affect how the website functions.
            </p>

            <h3>3.2 Analytical/Performance Cookies</h3>
            <p>
              These cookies allow us to recognize and count the number of visitors and see how visitors move around our website when they are using it. This helps us improve how our website works, for example, by ensuring that users find what they are looking for easily.
            </p>

            <h3>3.3 Functionality Cookies</h3>
            <p>
              These cookies are used to recognize you when you return to our website. This enables us to personalize our content for you and remember your preferences (for example, your choice of language or region).
            </p>

            <h3>3.4 Targeting Cookies</h3>
            <p>
              These cookies record your visit to our website, the pages you have visited, and the links you have followed. We use this information to make our website and the advertising displayed on it more relevant to your interests. We may also share this information with third parties for this purpose.
            </p>

            <h2>4. Third-Party Cookies</h2>
            <p>
              In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the website and deliver advertisements on and through the website.
            </p>
            <p>Third-party cookies used on our website include:</p>
            <ul>
              <li>Google Analytics: for analyzing website traffic and user behavior</li>
              <li>Google Ads: for marketing and remarketing purposes</li>
              <li>LinkedIn: for tracking and marketing purposes</li>
              <li>Facebook: for tracking and marketing purposes</li>
            </ul>

            <h2>5. Your Cookie Choices</h2>
            <p>
              When you first visit our website, you will be presented with a cookie banner that allows you to accept or decline non-essential cookies. You can change your cookie preferences at any time by clicking on the "Cookie Settings" link in the footer of our website.
            </p>
            <p>
              Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set and how to manage and delete them, visit <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer">www.aboutcookies.org</a> or <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer">www.allaboutcookies.org</a>.
            </p>
            <p>
              To opt out of being tracked by Google Analytics across all websites, visit <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">https://tools.google.com/dlpage/gaoptout</a>.
            </p>

            <h2>6. Cookie Table</h2>
            <table className="cookie-table">
              <thead>
                <tr>
                  <th>Cookie Name</th>
                  <th>Provider</th>
                  <th>Purpose</th>
                  <th>Expiry</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>_ga</td>
                  <td>Google Analytics</td>
                  <td>Used to distinguish users</td>
                  <td>2 years</td>
                </tr>
                <tr>
                  <td>_gid</td>
                  <td>Google Analytics</td>
                  <td>Used to distinguish users</td>
                  <td>24 hours</td>
                </tr>
                <tr>
                  <td>_gat</td>
                  <td>Google Analytics</td>
                  <td>Used to throttle request rate</td>
                  <td>1 minute</td>
                </tr>
                <tr>
                  <td>cookie_consent</td>
                  <td>GeoFoundation</td>
                  <td>Stores your cookie consent preferences</td>
                  <td>1 year</td>
                </tr>
                <tr>
                  <td>session_id</td>
                  <td>GeoFoundation</td>
                  <td>Manages user session</td>
                  <td>Session</td>
                </tr>
              </tbody>
            </table>

            <h2>7. Changes to This Cookie Policy</h2>
            <p>
              We may update this Cookie Policy from time to time to reflect changes to the cookies we use or for other operational, legal, or regulatory reasons. Please revisit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
            </p>
            <p>
              The date at the top of this Cookie Policy indicates when it was last updated.
            </p>

            <h2>8. Contact Us</h2>
            <p>
              If you have any questions about our use of cookies or this Cookie Policy, please contact us at <a href="mailto:privacy@geofoundation.ai">privacy@geofoundation.ai</a>.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CookiePolicy;