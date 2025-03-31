import React, { useState, useEffect } from 'react';
import '../styles/Reservations.css';
import BookingForm from './BookingForm';
import BookingSlotList from './BookingSlotList';
import { initializeTimes, updateTimes, bookTimeSlot } from '../utils/timeUtils';
import { submitBooking } from '../utils/api';

const Reservations = () => {
  // Store current date in YYYY-MM-DD format
  const today = new Date().toISOString().split('T')[0];
  
  const [selectedDate, setSelectedDate] = useState(today);
  const [selectedTime, setSelectedTime] = useState('');
  const [reservationConfirmed, setReservationConfirmed] = useState(false);
  const [reservationDetails, setReservationDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Get slots for the selected date
  const [currentSlots, setCurrentSlots] = useState([]);
  
  // Slots by date, initialized with today's date
  const [slotsByDate, setSlotsByDate] = useState({});
  
  // Initial load of today's available times
  useEffect(() => {
    const fetchInitialTimes = async () => {
      try {
        setLoading(true);
        const initialSlots = await initializeTimes(today);
        setCurrentSlots(initialSlots);
        setSlotsByDate(prev => ({
          ...prev,
          [today]: initialSlots
        }));
        setLoading(false);
      } catch (err) {
        console.error('Error loading initial times:', err);
        setError('Could not load available times. Please try again later.');
        setLoading(false);
      }
    };

    fetchInitialTimes();
  }, []);
  
  // Update slots when date changes
  useEffect(() => {
    const fetchTimesByDate = async () => {
      try {
        setLoading(true);
        
        // If we already have slots for this date, use those
        if (slotsByDate[selectedDate]) {
          setCurrentSlots(slotsByDate[selectedDate]);
          setLoading(false);
          return;
        }
        
        // Otherwise fetch new slots for the selected date
        const updatedSlots = await updateTimes(selectedDate);
        
        setSlotsByDate(prev => ({
          ...prev,
          [selectedDate]: updatedSlots
        }));
        
        setCurrentSlots(updatedSlots);
        setLoading(false);
        
        // Clear selected time when date changes
        setSelectedTime('');
      } catch (err) {
        console.error('Error updating times:', err);
        setError('Could not load available times. Please try again later.');
        setLoading(false);
      }
    };

    fetchTimesByDate();
  }, [selectedDate, slotsByDate]);
  
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  
  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };
  
  const handleFormSubmit = async (formData) => {
    try {
      setLoading(true);
      
      // Submit booking to API
      const success = await submitBooking(formData);
      
      if (success) {
        // Mark the selected time slot as booked
        const updatedSlots = bookTimeSlot(currentSlots, selectedTime);
        
        // Update slots for this date
        setSlotsByDate(prev => ({
          ...prev,
          [selectedDate]: updatedSlots
        }));
        
        // Update current slots
        setCurrentSlots(updatedSlots);
        
        // Store reservation details
        setReservationDetails(formData);
        setReservationConfirmed(true);
      } else {
        setError('Failed to submit booking. Please try again.');
      }
      
      setLoading(false);
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('Could not submit your reservation. Please try again later.');
      setLoading(false);
    }
  };
  
  const handleNewReservation = () => {
    setReservationConfirmed(false);
    setSelectedTime('');
    setError(null);
  };

  return (
    <section className="reservations-section">
      <div className="reservations-container">
        <div className="reservations-header">
          <h1>Reserve a Table</h1>
          <p>We look forward to serving you at Little Lemon. Please select a date and time for your reservation.</p>
        </div>

        {loading && (
          <div className="loading-indicator">
            <p>Loading available times...</p>
          </div>
        )}

        {error && (
          <div className="error-message">
            <p>{error}</p>
            <button onClick={() => setError(null)}>Try Again</button>
          </div>
        )}

        {!loading && !error && !reservationConfirmed ? (
          <div className="booking-process">
            <div className="date-picker-container">
              <label htmlFor="datePicker">Select a Date:</label>
              <input 
                type="date" 
                id="datePicker"
                value={selectedDate}
                onChange={(e) => handleDateChange(e.target.value)}
                min={today}
                className="date-picker"
                data-testid="date-picker"
              />
            </div>
            
            <BookingSlotList 
              slots={currentSlots} 
              selectedTime={selectedTime}
              onSelectTime={handleTimeSelect}
            />
            
            <BookingForm 
              onSubmit={handleFormSubmit}
              selectedDate={selectedDate}
              selectedTime={selectedTime}
              onTimeChange={handleTimeSelect}
            />
          </div>
        ) : null}

        {reservationConfirmed && (
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
              onClick={handleNewReservation}
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