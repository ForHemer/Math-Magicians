import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

it('should render components', () => {
  render(<App />);
  const link = screen.getByText(/Home/i);
  expect(link).toBeInTheDocument();
});

it('should render components', () => {
  render(<App />);
  const quote = screen.getByText(/Quote/i);
  expect(quote).toBeInTheDocument();
});

it('should render components', () => {
  render(<App />);
  const calc = screen.getByText(/Calculator/i);
  expect(calc).toBeInTheDocument();
});
