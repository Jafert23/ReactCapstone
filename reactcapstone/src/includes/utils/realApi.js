/**
 * Generates a seeded random number generator function
 * 
 * @param {number} seed - Seed value for the random number generator
 * @returns {Function} Seeded random number generator that returns values between 0 and 1
 */
export const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

/**
 * Fetches available reservation time slots for a specific date
 * 
 * @param {Date} date - JavaScript Date object for the reservation date
 * @returns {Array} Array of available time slots (e.g. ['17:00', '17:30'])
 */
export const fetchAPI = function(date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push(i + ':00');
        }
        if(random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
};

/**
 * Submits reservation form data to the API
 * 
 * @param {Object} formData - The reservation form data
 * @returns {boolean} Always returns true in this implementation
 */
export const submitAPI = function(formData) {
    return true;
}; 