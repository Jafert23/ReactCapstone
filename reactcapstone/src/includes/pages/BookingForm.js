import React, { useState } from 'react';
import '../styles/BookingForm.css';

const BookingForm = ({ onSubmit, availableTimes }) => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: 1,
    occasion: 'Birthday'
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
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
          <select 
            id="time" 
            name="time" 
            value={formData.time} 
            onChange={handleChange}
            required
            aria-label="Reservation time"
          >
            <option value="">Select a time</option>
            {availableTimes?.map(time => (
              <option key={time} value={time}>{time}</option>
            )) || (
              <>
                <option value="17:00">5:00 PM</option>
                <option value="18:00">6:00 PM</option>
                <option value="19:00">7:00 PM</option>
                <option value="20:00">8:00 PM</option>
                <option value="21:00">9:00 PM</option>
              </>
            )}
          </select>
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

        <button type="submit" className="submit-button">Reserve Table</button>
      </form>
    </div>
  );
};

export default BookingForm; 