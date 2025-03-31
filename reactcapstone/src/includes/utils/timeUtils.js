import { fetchAvailableTimes } from './api';

/**
 * Initialize available times for a given date using the API.
 * 
 * @param {string} date - Date in YYYY-MM-DD format
 * @returns {Array} Array of time slot objects
 */
export const initializeTimes = async (date) => {
  try {
    // Fetch available times from the API
    const availableTimes = await fetchAvailableTimes(date);
    
    // Convert string times to time slot objects
    return availableTimes.map(time => ({
      time,
      available: true
    }));
  } catch (error) {
    console.error('Error initializing times:', error);
    return [];
  }
};

/**
 * Synchronous version for compatibility with existing code
 * Will be used until components are updated to handle async
 */
export const initializeTimeSync = (date) => {
  // Default slots for synchronous calls
  const baseSlots = [
    { time: '17:00', available: true },
    { time: '17:30', available: true },
    { time: '18:00', available: true },
    { time: '18:30', available: true },
    { time: '19:00', available: true },
    { time: '19:30', available: true },
    { time: '20:00', available: true },
    { time: '20:30', available: true },
    { time: '21:00', available: true },
    { time: '21:30', available: true }
  ];

  // If no date provided, return all slots
  if (!date) return baseSlots;
  
  // For demo purposes, make weekends busier with fewer available times
  const selectedDate = new Date(date);
  const dayOfWeek = selectedDate.getDay(); // 0 = Sunday, 6 = Saturday
  
  if (dayOfWeek === 0 || dayOfWeek === 5 || dayOfWeek === 6) {
    // Weekend - make some slots unavailable
    return baseSlots.map(slot => {
      // For weekends, make specific time slots busy
      if (slot.time === '18:00' || slot.time === '19:00' || slot.time === '20:00') {
        return { ...slot, available: false };
      }
      return slot;
    });
  }
  
  return baseSlots;
};

/**
 * Update times based on a date change.
 * 
 * @param {string} date - Date in YYYY-MM-DD format
 * @returns {Promise<Array>} Updated array of time slot objects
 */
export const updateTimes = async (date) => {
  return initializeTimes(date);
};

/**
 * Synchronous version for compatibility with existing code
 */
export const updateTimesSync = (date) => {
  return initializeTimeSync(date);
};

/**
 * Mark a specific time slot as booked for a given date.
 * 
 * @param {Array} slots - Current time slots
 * @param {string} time - Time to mark as booked
 * @returns {Array} Updated array of time slot objects
 */
export const bookTimeSlot = (slots, time) => {
  return slots.map(slot => 
    slot.time === time 
      ? { ...slot, available: false } 
      : slot
  );
}; 