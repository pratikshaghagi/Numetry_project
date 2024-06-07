import React from 'react';
import './Auth.css';
const ForgotPassword = () => {
  return (
    <div className="Auth-container">
      <h2>Forgot Password</h2>
      <form>
        <div className="input-group">
          <label>Email:</label>
          <input type="email" required />
        </div>
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
