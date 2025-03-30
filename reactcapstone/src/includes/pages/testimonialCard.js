import React from 'react';

const testimonialCard = ({ image, username, review, stars }) => {
  return (
    <div className="testimonial-card">
      {/* Star Rating */}
      <div className="stars">
        {'★'.repeat(stars)}{'☆'.repeat(5 - stars)}
      </div>

      {/* User Image */}
      <img src={image} alt={username} className="user-img" />

      {/* Username */}
      <h4>{username}</h4>

      {/* Short Review */}
      <p className="review-text">{review}</p>
    </div>
  );
};

export default testimonialCard;
