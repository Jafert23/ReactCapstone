import { initializeTimeSync, updateTimesSync, bookTimeSlot, initializeTimes, updateTimes } from '../utils/timeUtils';
import * as api from '../utils/api';

// Mock the API functions
jest.mock('../utils/api', () => ({
  fetchAvailableTimes: jest.fn(),
  submitBooking: jest.fn()
}));

describe('Time Utility Functions', () => {
  describe('initializeTimeSync function', () => {
    test('returns a non-empty array of time slots', () => {
      const date = '2023-09-20'; // Use a fixed date to avoid test flakiness
      const result = initializeTimeSync(date);
      
      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBeGreaterThan(0);
    });
    
    test('returns time slots with correct properties', () => {
      const date = '2023-09-20'; // Use a fixed date
      const result = initializeTimeSync(date);
      
      result.forEach(slot => {
        expect(slot).toHaveProperty('time');
        expect(slot).toHaveProperty('available');
        expect(typeof slot.time).toBe('string');
        expect(typeof slot.available).toBe('boolean');
      });
    });
    
    test('returns different availability for weekends vs weekdays', () => {
      // Wednesday (weekday)
      const weekday = '2023-09-20'; // This is a Wednesday
      const weekdayResult = initializeTimeSync(weekday);
      
      // Saturday (weekend)
      const weekend = '2023-09-16'; // This is a Saturday
      const weekendResult = initializeTimeSync(weekend);
      
      // Check specific time slots that should be different
      const weekday18 = weekdayResult.find(slot => slot.time === '18:00');
      const weekend18 = weekendResult.find(slot => slot.time === '18:00');
      
      // 18:00 should be available on weekday but not on weekend
      expect(weekday18.available).toBe(true);
      expect(weekend18.available).toBe(false);
      
      // Also check 19:00 slot
      const weekday19 = weekdayResult.find(slot => slot.time === '19:00');
      const weekend19 = weekendResult.find(slot => slot.time === '19:00');
      
      expect(weekday19.available).toBe(true);
      expect(weekend19.available).toBe(false);
    });
  });
  
  describe('updateTimesSync function', () => {
    test('returns the same value as initializeTimeSync', () => {
      const date = '2023-09-20';
      
      const initialResult = initializeTimeSync(date);
      const updatedResult = updateTimesSync(date);
      
      expect(updatedResult).toEqual(initialResult);
    });
    
    test('returns different results for different dates', () => {
      const date1 = '2023-09-16'; // Saturday
      const date2 = '2023-09-20'; // Wednesday
      
      const result1 = updateTimesSync(date1);
      const result2 = updateTimesSync(date2);
      
      // Check specific time slot that should be different (18:00)
      const slot1 = result1.find(s => s.time === '18:00');
      const slot2 = result2.find(s => s.time === '18:00');
      
      expect(slot1.available).not.toEqual(slot2.available);
    });
  });
  
  describe('bookTimeSlot function', () => {
    test('marks a specific time slot as unavailable', () => {
      const slots = [
        { time: '17:00', available: true },
        { time: '18:00', available: true },
        { time: '19:00', available: true }
      ];
      
      const timeToBook = '18:00';
      const result = bookTimeSlot(slots, timeToBook);
      
      const bookedSlot = result.find(slot => slot.time === timeToBook);
      expect(bookedSlot.available).toBe(false);
    });
    
    test('does not modify other time slots', () => {
      const slots = [
        { time: '17:00', available: true },
        { time: '18:00', available: true },
        { time: '19:00', available: true }
      ];
      
      const timeToBook = '18:00';
      const result = bookTimeSlot(slots, timeToBook);
      
      const otherSlots = result.filter(slot => slot.time !== timeToBook);
      otherSlots.forEach(slot => {
        expect(slot.available).toBe(true);
      });
    });
    
    test('returns a new array and does not mutate the original', () => {
      const originalSlots = [
        { time: '17:00', available: true },
        { time: '18:00', available: true }
      ];
      
      const result = bookTimeSlot(originalSlots, '17:00');
      
      expect(result).not.toBe(originalSlots); // Check it's a new array
      expect(originalSlots[0].available).toBe(true); // Original unchanged
    });
  });

  describe('initializeTimes async function', () => {
    beforeEach(() => {
      // Mock the API response
      api.fetchAvailableTimes.mockResolvedValue(['17:00', '18:00', '19:00']);
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    test('fetches times from API and formats them as time slots', async () => {
      const date = '2023-09-20';
      const result = await initializeTimes(date);
      
      // Check if API was called with correct date
      expect(api.fetchAvailableTimes).toHaveBeenCalledWith(date);
      
      // Check result format
      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBe(3); // Based on our mock
      
      result.forEach(slot => {
        expect(slot).toHaveProperty('time');
        expect(slot).toHaveProperty('available');
        expect(typeof slot.time).toBe('string');
        expect(typeof slot.available).toBe('boolean');
        expect(slot.available).toBe(true);
      });
    });

    test('handles API errors gracefully', async () => {
      // Set up the API to reject
      api.fetchAvailableTimes.mockRejectedValueOnce(new Error('API error'));
      
      const date = '2023-09-20';
      const result = await initializeTimes(date);
      
      // Should return empty array on error
      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBe(0);
    });
  });
  
  describe('updateTimes async function', () => {
    beforeEach(() => {
      // Mock the API response
      api.fetchAvailableTimes.mockResolvedValue(['17:00', '18:00', '19:00']);
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    test('calls initializeTimes with the provided date', async () => {
      const date = '2023-09-20';
      const result = await updateTimes(date);
      
      // Check if API was called with correct date
      expect(api.fetchAvailableTimes).toHaveBeenCalledWith(date);
      
      // Check result format (should match initializeTimes output)
      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBe(3); // Based on our mock
    });
  });
}); 