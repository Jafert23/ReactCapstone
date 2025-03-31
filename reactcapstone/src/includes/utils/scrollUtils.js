/**
 * Smoothly scrolls to the specified element ID
 * @param {string} elementId - The ID of the element to scroll to
 */
export const scrollToElement = (elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

/**
 * Creates a click handler for smooth scrolling to an element
 * @param {string} elementId - The ID of the element to scroll to
 * @returns {Function} - Click event handler that prevents default behavior
 */
export const createScrollHandler = (elementId) => (event) => {
  if (event) event.preventDefault();
  scrollToElement(elementId);
}; 