import { render, screen } from '@testing-library/react';
import BookingForm from '../pages/BookingForm';

describe('BookingForm Component', () => {
  test('Renders the BookingForm heading', async () => {
    render(<BookingForm />);
    const headingElement = await screen.findByRole('heading', { 
      name: "Reserve a Table",
      level: 2
    });
    expect(headingElement).toBeInTheDocument();
  });
  
  test('Renders all form labels', async () => {
    render(<BookingForm />);
    
    const dateLabel = await screen.findByText("Date");
    const timeLabel = await screen.findByText("Time");
    const guestsLabel = await screen.findByText("Number of guests");
    const occasionLabel = await screen.findByText("Occasion");
    
    expect(dateLabel).toBeInTheDocument();
    expect(timeLabel).toBeInTheDocument();
    expect(guestsLabel).toBeInTheDocument();
    expect(occasionLabel).toBeInTheDocument();
  });
  
  test('Submit button is disabled when no time is selected', async () => {
    render(<BookingForm selectedDate="2023-09-20" selectedTime="" />);
    
    const submitButton = await screen.findByRole('button', { name: "Reserve Table" });
    expect(submitButton).toBeDisabled();
  });
  
  test('Submit button is enabled when time is selected', async () => {
    render(<BookingForm selectedDate="2023-09-20" selectedTime="18:00" />);
    
    const submitButton = await screen.findByRole('button', { name: "Reserve Table" });
    expect(submitButton).not.toBeDisabled();
  });
}); 