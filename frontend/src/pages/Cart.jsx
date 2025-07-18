import React from 'react';
import '../cssPages/Cart.css';

const Cart = () => {
  // Sample cart items data
  const cartItems = [
    { id: 1, name: 'Wireless Mouse', price: 25.99, quantity: 2 },
    { id: 2, name: 'Mechanical Keyboard', price: 79.99, quantity: 1 },
    { id: 3, name: 'USB-C Hub', price: 45.00, quantity: 1 },
  ];

  // Calculate subtotal
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const taxRate = 0.07; // 7% tax
  const taxes = subtotal * taxRate;
  const total = subtotal + taxes;

  return (
    <div className="cart-container">
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <table className="cart-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map(item => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                  <td>
                    <button className="btn btn-remove">Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="cart-summary">
            <p>Subtotal: ${subtotal.toFixed(2)}</p>
            <p>Taxes (7%): ${taxes.toFixed(2)}</p>
            <h3>Total: ${total.toFixed(2)}</h3>
            <button className="btn btn-checkout">Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
