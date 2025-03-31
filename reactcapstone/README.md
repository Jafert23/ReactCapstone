# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# Little Lemon Restaurant Website

This is a React-based website for the Little Lemon restaurant, featuring a reservation system with interactive booking functionality.

## Features

- Responsive design
- Interactive booking system
- Table reservation with date, time, and guest information
- Visual time slot selection
- Confirmation system

## Testing

The application includes comprehensive unit tests for various components and utility functions. The tests verify:

1. Basic rendering of components
2. Form validation
3. Booking workflow
4. Date and time logic

### Running Tests

To run the tests, use the following command:

```bash
npm test
```

This will run Jest in watch mode, which will automatically run tests when files change.

To run a specific test file:

```bash
npm test -- BookingForm.test.js
```

To run with coverage report:

```bash
npm test -- --coverage
```

### Test Structure

- `BookingForm.test.js`: Tests for the booking form component to ensure correct rendering of form fields and validation
- `timeUtils.test.js`: Tests for the utility functions that handle available times
- `Reservations.test.js`: Integration tests for the Reservations component which combines all booking functionality

## Component Structure

- `Reservations`: Main component managing the booking state
- `BookingForm`: Form for collecting customer booking information
- `BookingSlotList`: Displays available time slots
- `BookingSlot`: Individual time slot component

## State Management

The application uses React state and props to share data between components:

- Date selection updates available times
- Time slot selection is reflected in the booking form
- Booking submission updates slot availability

## Utility Functions

- `initializeTimes`: Initializes time slots for a given date
- `updateTimes`: Updates time slots when date changes
- `bookTimeSlot`: Marks a time slot as booked
