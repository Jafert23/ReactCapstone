import React from 'react';
import '../styles/BookingSlot.css';

const BookingSlot = ({ time, isAvailable, onSelect, isSelected }) => {
  const handleClick = () => {
    if (isAvailable) {
      onSelect(time);
    }
  };

  const slotClass = `booking-slot ${!isAvailable ? 'booked' : ''} ${isSelected ? 'selected' : ''}`;

  return (
    <div 
      className={slotClass}
      onClick={handleClick}
      role="button"
      tabIndex={isAvailable ? 0 : -1}
      aria-disabled={!isAvailable}
      aria-label={`${time} ${isAvailable ? 'available' : 'booked'}`}
    >
      <span className="slot-time">{time}</span>
      <span className="slot-status">{isAvailable ? 'Available' : 'Booked'}</span>
    </div>
  );
};

export default BookingSlot; 