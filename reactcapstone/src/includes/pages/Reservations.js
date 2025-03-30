import React, { useState } from 'react';
import '../styles/Reservations.css';
import BookingForm from './BookingForm';

const Reservations = () => {
  const [availableTimes, setAvailableTimes] = useState([
    '17:00', '18:00', '19:00', '20:00', '21:00'
  ]);

  const [reservationConfirmed, setReservationConfirmed] = useState(false);
  const [reservationDetails, setReservationDetails] = useState(null);

  const handleFormSubmit = (formData) => {
    console.log('Form submitted:', formData);
    // In a real application, this would send the data to an API
    setReservationDetails(formData);
    setReservationConfirmed(true);
  };

  return (
    <section className="reservations-section">
      <div className="reservations-container">
        <div className="reservations-header">
          <h1>Reserve a Table</h1>
          <p>We look forward to serving you at Little Lemon. Please fill out the form below to make a reservation.</p>
        </div>

        {!reservationConfirmed ? (
          <BookingForm 
            onSubmit={handleFormSubmit} 
            availableTimes={availableTimes} 
          />
        ) : (
          <div className="confirmation-message">
            <h2>Reservation Confirmed!</h2>
            <p>Thank you for your reservation at Little Lemon.</p>
            <div className="reservation-details">
              <p><strong>Date:</strong> {reservationDetails.date}</p>
              <p><strong>Time:</strong> {reservationDetails.time}</p>
              <p><strong>Number of Guests:</strong> {reservationDetails.guests}</p>
              <p><strong>Occasion:</strong> {reservationDetails.occasion}</p>
            </div>
            <p>We've sent a confirmation to your email. If you need to make any changes, please call us at (123) 456-7890.</p>
            <button 
              className="new-reservation-btn"
              onClick={() => setReservationConfirmed(false)}
            >
              Make Another Reservation
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Reservations; 