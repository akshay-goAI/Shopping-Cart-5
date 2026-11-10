import { render, screen } from '@testing-library/react';
import App from './App';

beforeEach(() => {
  window.alert = jest.fn();
});

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

test('removes item from cart', () => {
  render(<App />);
  const addButton = screen.getByText(/Add to Cart/i);
  addButton.click();
  const removeButton = screen.getByText(/Remove from Cart/i);
  removeButton.click();
  expect(window.alert).toHaveBeenCalledWith('Sample Item removed from cart!');
  expect(screen.queryByText(/Sample Item/i)).toBeNull();
});

test('views cart', () => {
  render(<App />);
  const addButton = screen.getByText(/Add to Cart/i);
  addButton.click();
  const viewButton = screen.getByText(/View Cart/i);
  viewButton.click();
  expect(window.alert).toHaveBeenCalledWith('Items in cart: Sample Item');
});

test('validates view cart functionality', () => {
  render(<App />);
  const addButton = screen.getByText(/Add to Cart/i);
  addButton.click();
  const viewButton = screen.getByText(/View Cart/i);
  viewButton.click();
  expect(window.alert).toHaveBeenCalledWith('Items in cart: Sample Item');
  expect(window.alert).toHaveBeenCalledTimes(2);
});

test('proceeds to checkout', () => {
  render(<App />);
  const checkoutButton = screen.getByText(/Checkout/i);
  checkoutButton.click();
  expect(window.alert).toHaveBeenCalledWith('Your cart is empty!');
  const addButton = screen.getByText(/Add to Cart/i);
  addButton.click();
  checkoutButton.click();
  expect(window.alert).toHaveBeenCalledWith('Proceeding to checkout...');
});
