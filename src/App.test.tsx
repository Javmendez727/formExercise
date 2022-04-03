import { render, screen } from '@testing-library/react';
import App from './App';

test('renders title from App component', () => {
  render(<App />);
  const linkElement = screen.getByText(/Form Add Users/i);
  expect(linkElement).toBeInTheDocument();
});
