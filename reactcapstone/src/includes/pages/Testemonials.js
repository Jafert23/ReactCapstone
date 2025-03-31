import React from 'react';
import '../styles/Testimonials.css';
import TestimonialCard from './TestimonialCard';
import sara from '../images/Sarah.png';
import mike from '../images/Mike.png';
import jessica from '../images/Jessica.png';
import david from '../images/David.png';

const Testimonials = ({ reviews }) => {
  const defaultReviews = [
    {
      username: 'Sara L.',
      stars: 5,
      review: 'The Mediterranean flavors were authentic and delicious! Will definitely return.',
      image: sara,
    },
    {
      username: 'Mike T.',
      stars: 4,
      review: 'Great atmosphere and excellent service. The lemon dessert was amazing!',
      image: mike,
    },
    {
      username: 'Jessica R.',
      stars: 5,
      review: 'Best Greek salad in town, and the staff is incredibly friendly.',
      image: jessica,
    },
    {
      username: 'David K.',
      stars: 4,
      review: 'Wonderful dining experience with authentic Mediterranean cuisine.',
      image: david,
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
