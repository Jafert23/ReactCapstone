import React from 'react';
import TestimonialCard from './testimonialCard.js';

const Testimonials = ({ reviews }) => {
  return (
    <section className="testimonials-section">
      <h2>What Our Customers Say</h2>

      <div className="testimonial-grid">
        {reviews.map((entry, index) => (
          <TestimonialCard
            key={index}
            image={entry.image}
            username={entry.username}
            review={entry.review}
            stars={entry.stars}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
