import React from 'react';
import '../styles/Header.css';
import { createScrollHandler } from '../utils/scrollUtils';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        {/* Logo (left) */}
        <div className="logo">
          <img src="path/to/logo.png" alt="Little Lemon Logo" />
        </div>

        {/* Navigation Links (right) */}
        <ul className="nav-links">
          <li>
            <a href="#hero" onClick={createScrollHandler('hero')}>Home</a>
          </li>
          <li>
            <a href="#about" onClick={createScrollHandler('about')}>About</a>
          </li>
          <li>
            <a href="#specials" onClick={createScrollHandler('specials')}>Menu</a>
          </li>
          <li>
            <a href="#reservations" onClick={createScrollHandler('reservations')}>Reservations</a>
          </li>
          <li>
            <a href="#order-online" onClick={createScrollHandler('specials')}>Order Online</a>
          </li>
          <li>
            <a href="#testimonials" onClick={createScrollHandler('testimonials')}>Testimonials</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
