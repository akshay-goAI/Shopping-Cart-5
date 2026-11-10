import React, { useState } from 'react';

function App() {
  const [cart, setCart] = useState([]);

  const addItemToCart = (item) => {
    setCart([...cart, item]);
    alert(`${item} added to cart!`);
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <button onClick={() => addItemToCart('Sample Item')}>Add to Cart</button>
      <h2>Cart Items:</h2>
      <ul>
        {cart.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  );
}

export default App;