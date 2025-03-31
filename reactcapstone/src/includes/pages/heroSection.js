import React from 'react';
import '../styles/HeroSection.css';
import { scrollToElement } from '../utils/scrollUtils';

const HeroSection = ({ name, city, description, heroImage }) => {
  const scrollToReservations = () => {
    scrollToElement('reservations');
  };

  return (
    <section className="hero-section">
      <div className="hero-container">
        {/* Left: Name, City, Short Description, and Reserve Button */}
        <div className="hero-text">
          <h1>{name}</h1>
          <h2>{city}</h2>
          <p>{description}</p>
          <button className="reserve-btn" onClick={scrollToReservations}>Reserve a Table</button>
        </div>

        {/* Right: Hero Image */}
        <div className="hero-image">
          <img src={heroImage} alt="Hero" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
