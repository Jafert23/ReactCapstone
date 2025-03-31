import React from 'react';
import '../styles/Footer.css';
import logo from '../images/Logo.svg';
function Footer() {
  return (
    <div>
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-logo">
            <img src={logo} alt="Little Lemon Logo" />
          </div>
          <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        </div>
        
        <div className="footer-section">
          <h3>Navigation</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/reservations">Reservations</a></li>
            <li><a href="/order-online">Order Online</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>123 Main Street, Chicago, IL</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@littlelemon.com</p>
          <div className="social-icons">
            <a href="/#"><i className="fa fa-facebook"></i></a>
            <a href="/#"><i className="fa fa-instagram"></i></a>
            <a href="/#"><i className="fa fa-twitter"></i></a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Little Lemon Restaurant. All rights reserved.</p>
      </div>
    </div>
  );
}   
export default Footer;
