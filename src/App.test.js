import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Shopping Cart title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Shopping Cart/i);
  expect(linkElement).toBeInTheDocument();
});

test('adds item to cart', () => {
  render(<App />);
  const buttonElement = screen.getByText(/Add to Cart/i);
  buttonElement.click();
  const itemElement = screen.getByText(/Sample Item/i);
  expect(itemElement).toBeInTheDocument();
});

test('views cart', () => {
  render(<App />);
  const addButton = screen.getByText(/Add to Cart/i);
  addButton.click();
  const viewButton = screen.getByText(/View Cart/i);
  viewButton.click();
  expect(window.alert).toHaveBeenCalledWith('Items in cart: Sample Item');
});
