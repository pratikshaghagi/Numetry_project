import React, { useState } from 'react';
import './pages.css';

const Support = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    issue: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to API)
    console.log('Support ticket submitted:', formData);
  };

  return (
    <div className="support-container">
      <h1>Support</h1>
      
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-item">
          <h3>How do I reset my password?</h3>
          <p>You can reset your password by going to the Account Settings page and clicking on "Reset Password".</p>
        </div>
        <div className="faq-item">
          <h3>How do I contact support?</h3>
          <p>You can contact support by filling out the form below or sending an email to support@example.com.</p>
        </div>
        <div className="faq-item">
          <h3>What is the response time for support tickets?</h3>
          <p>Our support team aims to respond to all tickets within 24 hours.</p>
        </div>
      </div>
      
      <div className="contact-section">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="input-group">
            <label>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="input-group">
            <label>Issue:</label>
            <textarea name="issue" value={formData.issue} onChange={handleChange} required />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Support;
