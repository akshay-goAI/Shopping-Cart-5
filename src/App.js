import React, { useState } from 'react';

function App() {
  const [cart, setCart] = useState([]);

  const addItemToCart = (item) => {
    setCart([...cart, item]);
    alert(`${item} added to cart!`);
  };

  const removeItemFromCart = (item) => {
    setCart(cart.filter(cartItem => cartItem !== item));
    alert(`${item} removed from cart!`);
  };

  const viewCart = () => {
    alert(`Items in cart: ${cart.join(', ')}`);
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <button onClick={() => addItemToCart('Sample Item')}>Add to Cart</button>
      <button onClick={() => removeItemFromCart('Sample Item')}>Remove from Cart</button>
      <button onClick={viewCart}>View Cart</button>
      <h2>Cart Items:</h2>
      <ul>
        {cart.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  );
}

export default App;
