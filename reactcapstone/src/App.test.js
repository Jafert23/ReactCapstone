import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

test('renders Little Lemon title', async () => {
  render(<App />);
  
  // Use findByRole instead of findByText since there are multiple elements with "Little Lemon" text
  const titleElement = await screen.findByRole('heading', { 
    name: /Little Lemon/i,
    level: 1 
  });
  expect(titleElement).toBeInTheDocument();
});
