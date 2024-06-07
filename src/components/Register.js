import './Auth.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    registerAs: '',
    name: '',
    email: '',
    contact: '',
    city: '',
    password: '',
    confirmPassword: ''
  });
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/api/user/create', formData)
      .then(response => {
        console.log(response.data);
        navigate('/layout'); // Navigate to the layout page
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  };

  return (
    <div className="Auth-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Role:
            <select name="role" value={formData.role} onChange={handleChange} required>
              <option value="">Select</option>
              <option value="Student">Student</option>
              <option value="Tutor">Tutor</option>
            </select>
          </label>
        </div>
        <div className="input-group">
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="input-group">
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="input-group">
          <label>Contact:</label>
          <input type="text" name="contact" value={formData.contact} onChange={handleChange} required />
        </div>
        <div className="input-group">
          <label>City:</label>
          <input type="text" name="city" value={formData.city} onChange={handleChange} required />
        </div>
        <div className="input-group">
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <div className="input-group">
          <label>Confirm Password:</label>
          <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
