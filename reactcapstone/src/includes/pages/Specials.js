import React from 'react';
import '../styles/Specials.css';
import SpecialCard from './SpecialCard';    
import greekSalad from '../images/greek-salad.jpg';
import fishPlate from '../images/fishPlate.jpg';
import lemonDessert from '../images/lemon-dessert.jpg';

const Specials = ({ specials }) => {
  const defaultSpecials = [
    {
      name: 'Greek Salad',
      price: '12.99',
      description: 'Fresh and crisp Greek salad with feta cheese, olives, and our homemade dressing.',
      image: greekSalad,
    },
    {
      name: 'Fish Plate',
      price: '14.99',
      description: 'Fresh Mediterranean fish with seasonal vegetables and our special sauce.',
      image: fishPlate,
    },
    {
      name: 'Lemon Dessert',
      price: '7.99',
      description: 'Our famous lemon dessert, made with imported Italian lemons and a secret family recipe.',
      image: lemonDessert,
    }
  ];

  const specialsToRender = specials || defaultSpecials;

  return (
    <section className="specials-section">
      <h2>This Week's Specials</h2>

      <div className="specials-cards">
        {specialsToRender.map((dish, index) => (
          <SpecialCard
            key={index}
            image={dish.image}
            name={dish.name}
            price={dish.price}
            description={dish.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Specials;
