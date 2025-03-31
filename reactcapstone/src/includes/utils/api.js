// This file wraps the external API functions for fetching available times and submitting booking data
import { fetchAPI, submitAPI } from './realApi';

/**
 * Fetches available booking times from the API for a given date
 * 
 * @param {string} date - Date in YYYY-MM-DD format
 * @returns {Array} Array of available booking times
 */
export const fetchAvailableTimes = async (date) => {
  try {
    // Convert the YYYY-MM-DD string to a Date object
    const dateObj = new Date(date);
    
    // Call the real API function
    return fetchAPI(dateObj);
  } catch (error) {
    console.error('Error fetching available times:', error);
    return [];
  }
};

/**
 * Submits booking form data to the API
 * 
 * @param {Object} formData - Form data containing booking details
 * @returns {boolean} True if submission was successful
 */
export const submitBooking = async (formData) => {
  try {
    // Call the real API function
    return submitAPI(formData);
  } catch (error) {
    console.error('Error submitting booking:', error);
    return false;
  }
}; 