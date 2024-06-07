import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import ForgotPassword from './Forgotpassword';
import logo from './img/logos.jpg';


function Navbar() {
  return (
    <div className="Navbar">
      <div class= "nav">
       <div class="navi"><img src={logo} alt="Logo"></img>  
        <h1> Urbon Pro Tutour App</h1></div>
      <nav>
        <ul>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/forgot-password">Forgot Password</Link></li>
        </ul>
      </nav>
      </div>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </div>
  );
}

export default Navbar;
