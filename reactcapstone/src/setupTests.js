// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// This will silence the act() warnings
// Testing Library already wraps fireEvent in act()
// See https://github.com/testing-library/react-testing-library/issues/281
jest.mock('react', () => {
  const originalReact = jest.requireActual('react');
  return {
    ...originalReact,
    // Mock the act function to handle async operations properly
    act: (callback) => {
      if (callback.then) {
        // If it's a promise, return it directly
        return callback;
      }
      // Otherwise, execute the callback
      return callback();
    },
  };
});

// Set up a longer timeout for async tests
jest.setTimeout(10000);
