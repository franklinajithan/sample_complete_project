import { render, screen } from '@testing-library/react';
import Button from './Button';

test('renders the button with text', () => {
  render(<Button />);
  const buttonElement = screen.getByText(/Click Me/i);
  expect(buttonElement).toBeInTheDocument();
});