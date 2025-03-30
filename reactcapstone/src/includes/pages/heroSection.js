import React from 'react';
import '../styles/HeroSection.css';

const heroSection = ({ name, city, description, heroImage }) => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        {/* Left: Name, City, Short Description, and Reserve Button */}
        <div className="hero-text">
          <h1>{name}</h1>
          <h2>{city}</h2>
          <p>{description}</p>
          <button className="reserve-btn">Reserve a Table</button>
        </div>

        {/* Right: Hero Image */}
        <div className="hero-image">
          <img src={heroImage} alt="Hero" />
        </div>
      </div>
    </section>
  );
};

export default heroSection;
