// src/components/ContactSection.tsx
import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../App.css';

const ContactSection: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    // Access environment variables
    const serviceId = process.env.EMAILJS_SERVICE_ID || '';
    const templateId = process.env.EMAILJS_TEMPLATE_ID || '';
    const publicKey = process.env.EMAILJS_PUBLIC_KEY || '';
    
    if (form.current) {
      emailjs.sendForm(serviceId, templateId, form.current, publicKey)
        .then((result) => {
          console.log('Email sent successfully:', result.text);
          setFormSubmitted(true);
          setIsSubmitting(false);
          
          // Reset form after 5 seconds
          setTimeout(() => {
            setFormSubmitted(false);
            setFormData({
              name: '',
              email: '',
              company: '',
              message: '',
            });
          }, 5000);
        })
        .catch((error) => {
          console.error('Email sending failed:', error);
          setSubmitError('Failed to send message. Please try again later.');
          setIsSubmitting(false);
        });
    }
  };
  
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Get in Touch</h2>
        <p className="section-subtitle">
          Interested in learning how GeoFoundation can help your organization navigate geopolitical complexity? 
          Contact us for a demo or to discuss your specific needs.
        </p>
        
        <div className="contact-grid">
          <div className="contact-form-container">
            {formSubmitted ? (
              <div className="success-message">
                <h3>Thank you for your message!</h3>
                <p>We'll get back to you shortly.</p>
              </div>
            ) : (
              <form className="contact-form" ref={form} onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="company">Company</label>
                  <input 
                    type="text" 
                    id="company" 
                    name="company" 
                    value={formData.company} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    rows={5} 
                    required 
                  />
                </div>
                
                {submitError && <div className="error-message">{submitError}</div>}
                
                <button 
                  type="submit" 
                  className="submit-button" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
          
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <div>
                <h3>Phone</h3>
                <p>Switzerland: +41 76 652 43 70</p>
                <p>Austria: +43 677 6163 2531</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">✉️</div>
              <div>
                <h3>Email</h3>
                <p><a href="mailto:contact@geofoundation.ai">contact@geofoundation.ai</a></p>
              </div>
            </div>
            
            <div className="contact-social">
              <h3>Follow Us</h3>
              <div className="social-icons">
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
