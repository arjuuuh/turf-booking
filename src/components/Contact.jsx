import React, { useState } from 'react';
import './Contact.css';
import axios from 'axios'; // ✅ Use axios since it's imported

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/contact/message', formData);

      if (response.status === 201) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Server error. Please try again later.');
    }
  };

  return (
    <div className="contact-container">
      <h1 className="contact-heading">CONTACT US</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
      <div className="contact-section">
        <h2>Contact Us</h2>
        <p>Email: contact@campnouturf.com</p>
        <p>
          Phone: +91 98765 43210<br />
          Phone: +91 85904 94339
        </p>
        <p>Location: Nedumkandam, Idukki, Kerala, India</p>
      </div>
    </div>
  );
};

export default Contact;
