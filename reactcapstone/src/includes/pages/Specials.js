import React from 'react';
import '../styles/Specials.css';
import SpecialCard from './specialCard';    

const Specials = ({ specials }) => {
  const defaultSpecials = [
    {
      name: 'Greek Salad',
      price: '12.99',
      description: 'Fresh and crisp Greek salad with feta cheese, olives, and our homemade dressing.',
      image: 'path/to/greek-salad.jpg',
    },
    {
      name: 'Bruschetta',
      price: '9.99',
      description: 'Toasted bread topped with tomatoes, Parmesan cheese, garlic, and fresh basil.',
      image: 'path/to/bruschetta.jpg',
    },
    {
      name: 'Lemon Dessert',
      price: '7.99',
      description: 'Our famous lemon dessert, made with imported Italian lemons and a secret family recipe.',
      image: 'path/to/lemon-dessert.jpg',
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
