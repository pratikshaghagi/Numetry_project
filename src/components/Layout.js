import React from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
import './main.css';


const Layout = () => {
  return (
    <div className="layout">
      <div className="cont">
      <Sidebar />
      <div className="main-content">
        <Outlet />
      </div></div>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>About Us</h3>

             <p> As India's largest professional learning <br></br>company global footprint in 170+ countries.</p>
          </div>
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>Email: contact@urbon pro.com</p>
            <p>Phone: 123-456-7890</p>
            <p>Website: www.urbonprotutour.com</p>
          </div>
          <div className="footer-section">
            <h3>Follow Us</h3>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>LinkedIn</p>
          </div>
          <div className="footer-section">
            <h3>Sevices</h3>
            <p>Training</p>
            <p>Education</p>
            <p>Career</p>
          </div>
          <div className="footer-section">
            <h3></h3>
            <p>Training</p>
            <p>Education</p>
            <p>Career</p>
          </div>
          
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 TechCareer Guide. All rights reserved.</p>
        </div>
      </footer>


    </div>
    
  );
};

export default Layout;
