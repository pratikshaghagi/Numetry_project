import React from 'react';
import { Link } from 'react-router-dom';
import './main.css';


const Sidebar = () => {
  return (
    <div className="sidebar">
      <div class="head"><h2>Urban Pro</h2></div>
      <ul>
      <li>
          <Link to="/Home">Home</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/Gym">Gym</Link>
        </li>
        <li>
          <Link to="/Hobbies">Hobbies</Link>
        </li>
        <li>
          <Link to="/Community">Community</Link>
        </li>
        <li>
          <Link to="/Feedback">Feedback</Link>
        </li>
        
        <li>
          <Link to="/account">Account</Link>
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li>
        <li>
          <Link to="/support">Support</Link>
        </li>
        <li>
          <Link to="/Chatbot">Chatbot</Link>
        </li>
        <li>
          <Link to="/AccountSettings">AccountSettings</Link>
        </li>
        <li>
          <Link to="/BillingHistory">BillingHistory</Link>
        </li>
        <li>
          <Link to="/logout">Logout</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
