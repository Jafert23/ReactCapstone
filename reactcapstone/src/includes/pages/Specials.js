import React from 'react';
import SpecialCard from './specialCard';    

const Specials = ({ specials }) => {
  return (
    <section className="specials-section">
      <h2>This Week’s Specials</h2>

      <div className="specials-cards">
        {specials.map((dish, index) => (
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
