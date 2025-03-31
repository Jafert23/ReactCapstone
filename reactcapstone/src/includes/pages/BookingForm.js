import React, { useState, useEffect } from 'react';
import '../styles/BookingForm.css';

const BookingForm = ({ onSubmit, selectedDate, selectedTime, onTimeChange }) => {
  const [formData, setFormData] = useState({
    date: selectedDate || '',
    time: selectedTime || '',
    guests: 1,
    occasion: 'Birthday'
  });

  const [formErrors, setFormErrors] = useState({});
  
  // Update form when selected date or time changes externally
  useEffect(() => {
    setFormData(prevData => ({
      ...prevData,
      date: selectedDate || prevData.date,
      time: selectedTime || prevData.time
    }));
  }, [selectedDate, selectedTime]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // If time is changed, notify parent component
    if (name === 'time' && onTimeChange) {
      onTimeChange(value);
    }
    
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    const errors = {};
    
    if (!formData.date) {
      errors.date = 'Please select a date';
    }
    
    if (!formData.time) {
      errors.time = 'Please select a time';
    }
    
    if (formData.guests < 1) {
      errors.guests = 'Number of guests must be at least 1';
    } else if (formData.guests > 10) {
      errors.guests = 'For parties larger than 10, please call us directly';
    }
    
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    setFormErrors({});
    onSubmit(formData);
  };

  return (
    <div className="booking-form-container">
      <h2>Reserve a Table</h2>
      <form className="booking-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input 
            type="date" 
            id="date" 
            name="date" 
            value={formData.date} 
            onChange={handleChange}
            min={new Date().toISOString().split('T')[0]}
            required
            aria-label="Reservation date"
          />
          {formErrors.date && <span className="error-message">{formErrors.date}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="time">Time</label>
          <input 
            type="hidden" 
            name="time" 
            value={formData.time} 
          />
          <div className="selected-time-display">
            {formData.time ? (
              <span>Selected time: <strong>{formData.time}</strong></span>
            ) : (
              <span className="error-message">Please select a time from the available slots</span>
            )}
          </div>
          {formErrors.time && <span className="error-message">{formErrors.time}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="guests">Number of guests</label>
          <input 
            type="number" 
            id="guests" 
            name="guests" 
            min="1" 
            max="10" 
            value={formData.guests} 
            onChange={handleChange}
            required
            aria-label="Number of guests"
          />
          {formErrors.guests && <span className="error-message">{formErrors.guests}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="occasion">Occasion</label>
          <select 
            id="occasion" 
            name="occasion" 
            value={formData.occasion} 
            onChange={handleChange}
            aria-label="Occasion"
          >
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
            <option value="Business">Business</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <button 
          type="submit" 
          className="submit-button"
          disabled={!formData.time}
        >
          Reserve Table
        </button>
      </form>
    </div>
  );
};

export default BookingForm; 