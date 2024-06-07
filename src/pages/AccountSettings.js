import React, { useState } from 'react';
import axios from 'axios';
import './pages.css'; // Import CSS file for styling

const AccountSettings = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Update personal information
      const response = await axios.put('YOUR_API_ENDPOINT/update-profile', formData);
      console.log(response.data);
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    try {
      // Change password
      const response = await axios.put('YOUR_API_ENDPOINT/change-password', {
        currentPassword: formData.currentPassword,
        newPassword: formData.newPassword
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error changing password:', error);
    }
  };

  return (
    <div className="account-settings-container">
      <h2>Account Settings</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <button type="submit">Update Profile</button>
      </form>
      <form onSubmit={handlePasswordChange}>
        <div className="form-group">
          <label>Current Password:</label>
          <input type="password" name="currentPassword" value={formData.currentPassword} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>New Password:</label>
          <input type="password" name="newPassword" value={formData.newPassword} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Confirm New Password:</label>
          <input type="password" name="confirmNewPassword" value={formData.confirmNewPassword} onChange={handleChange} />
        </div>
        <button type="submit">Change Password</button>
      </form>
    </div>
  );
};

export default AccountSettings;
