import React from 'react';

const SpecialCard = ({ image, name, price, description }) => {
  return (
    <div className="special-card">
      {/* Food Image */}
      <img src={image} alt={name} className="special-img" />

      {/* Dish Name and Price */}
      <div className="special-header">
        <h3>{name}</h3>
        <span className="price">${price}</span>
      </div>

      {/* Description */}
      <p className="special-description">{description}</p>

      {/* Order Button */}
      <button className="order-btn">Order</button>
    </div>
  );
};

export default SpecialCard;
