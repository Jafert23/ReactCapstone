import React from 'react';
import '../styles/Testimonials.css';
import TestimonialCard from './testimonialCard.js';

const Testimonials = ({ reviews }) => {
  const defaultReviews = [
    {
      username: 'Sara L.',
      stars: 5,
      review: 'The Mediterranean flavors were authentic and delicious! Will definitely return.',
      image: 'path/to/sara.jpg',
    },
    {
      username: 'Mike T.',
      stars: 4,
      review: 'Great atmosphere and excellent service. The lemon dessert was amazing!',
      image: 'path/to/mike.jpg',
    },
    {
      username: 'Jessica R.',
      stars: 5,
      review: 'Best Greek salad in town, and the staff is incredibly friendly.',
      image: 'path/to/jessica.jpg',
    },
    {
      username: 'David K.',
      stars: 4,
      review: 'Wonderful dining experience with authentic Mediterranean cuisine.',
      image: 'path/to/david.jpg',
    }
  ];

  const reviewsToRender = reviews || defaultReviews;
  
  return (
    <section className="testimonials-section">
      <h2>What Our Customers Say</h2>

      <div className="testimonial-grid">
        {reviewsToRender.map((entry, index) => (
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
