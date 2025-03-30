import React from 'react';

const heroSection = ({ name, city, description, heroImage }) => {
  return (
    <section className="hero-section">
      <div className="hero-container" style={{ display: 'flex', alignItems: 'center' }}>
        {/* Left: Name, City, Short Description, and Reserve Button */}
        <div className="hero-text" style={{ flex: 1, paddingRight: '1rem' }}>
          <h1>{name}</h1>
          <h2>{city}</h2>
          <p>{description}</p>
          <button className="reserve-btn">Reserve a Table</button>
        </div>

        {/* Right: Hero Image */}
        <div className="hero-image" style={{ flex: 1 }}>
          <img src={heroImage} alt="Hero" style={{ width: '100%', height: 'auto' }} />
        </div>
      </div>
    </section>
  );
};

export default heroSection;
