// This file wraps the external API functions for fetching available times and submitting booking data

/**
 * Fetches available booking times from the API for a given date
 * 
 * @param {string} date - Date in YYYY-MM-DD format
 * @returns {Array} Array of available booking times
 */
export const fetchAvailableTimes = async (date) => {
  try {
    // In a real app, this would be an actual API call
    // For now, we'll use a simulated API response
    
    // The actual API call would look like:
    // const times = await window.fetchAPI(date);
    // return times;
    
    // Simulated API response (since the referenced API isn't actually loaded)
    return simulateFetchAPI(date);
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
    // In a real app, this would be an actual API call
    // For now, we'll simulate a successful submission
    
    // The actual API call would look like:
    // const success = await window.submitAPI(formData);
    // return success;
    
    // Simulate successful submission (with a slight delay to mimic a network request)
    return simulateSubmitAPI(formData);
  } catch (error) {
    console.error('Error submitting booking:', error);
    return false;
  }
};

/**
 * Simulates the fetchAPI function from the external API
 * Remove this in production when the actual API is available
 */
const simulateFetchAPI = (date) => {
  // Convert string date to Date object
  const selectedDate = new Date(date);
  const dayOfWeek = selectedDate.getDay(); // 0 = Sunday, 6 = Saturday
  
  // Base available times
  const baseAvailableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00'];
  
  // Weekend days (Friday, Saturday, Sunday) have fewer available slots
  if (dayOfWeek === 0 || dayOfWeek === 5 || dayOfWeek === 6) {
    // Weekend - fewer slots available
    return baseAvailableTimes.filter((_, index) => index % 2 === 0);
  }
  
  // Weekdays have more available slots
  return baseAvailableTimes;
};

/**
 * Simulates the submitAPI function from the external API
 * Remove this in production when the actual API is available
 */
const simulateSubmitAPI = (formData) => {
  // Simulate a small delay like a real API call would have
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Booking submitted:', formData);
      // Always return success for the demo
      resolve(true);
    }, 500);
  });
}; 