import React from 'react';
import '../styles/BookingSlotList.css';
import BookingSlot from './BookingSlot';

const BookingSlotList = ({ slots, selectedTime, onSelectTime }) => {
  return (
    <div className="booking-slot-container">
      <h3>Available Times</h3>
      <div className="booking-slot-legend">
        <div className="legend-item">
          <span className="legend-color available"></span>
          <span>Available</span>
        </div>
        <div className="legend-item">
          <span className="legend-color booked"></span>
          <span>Booked</span>
        </div>
        <div className="legend-item">
          <span className="legend-color selected"></span>
          <span>Selected</span>
        </div>
      </div>
      <div className="booking-slot-list">
        {slots.map((slot) => (
          <BookingSlot
            key={slot.time}
            time={slot.time}
            isAvailable={slot.available}
            isSelected={selectedTime === slot.time}
            onSelect={onSelectTime}
          />
        ))}
      </div>
    </div>
  );
};

export default BookingSlotList; 