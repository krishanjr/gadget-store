import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import axios from 'axios';
import BASE_URL from '../../utils/api';
import { useAuth } from "../../context/AuthContext";

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);
  const { user } = useAuth();

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const taxRate = 0.07;
  const taxes = subtotal * taxRate;
  const total = subtotal + taxes;

  const handleCheckout = async () => {
    try {
      const orderData = {
        orderNumber: `ORD-${Date.now()}`, 
        userId: user.id,
        items: cartItems.map((item) => ({
          productId: item.id,
          quantity: item.quantity,
          price: item.price,
        })),
        totalAmount: total,
        shippingAddress: {
          line1: '123 Default St',
          city: 'Kathmandu',
          zip: '44600',
        },
        billingAddress: {
          line1: '123 Default St',
          city: 'Kathmandu',
          zip: '44600',
        },
        paymentMethod: 'cod', // or dynamic selection
        shippingCost: 0,
        taxAmount: taxes,
        discountAmount: 0,
      };

      const response = await axios.post(BASE_URL + "/orders/", orderData); // Ensure baseURL is set or use full URL

      if (response.status === 201) {
        alert('Order placed successfully!');
      }
    } catch (error) {
      console.error('Checkout failed:', error);
      alert('Failed to place order. Please try again.');
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 pt-20 pb-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          <div className="overflow-x-auto shadow rounded-lg mb-8">
            <table className="min-w-full text-sm text-gray-700">
              <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
                <tr>
                  <th className="py-3 px-6 text-left">Product</th>
                  <th className="py-3 px-6 text-center">Qty</th>
                  <th className="py-3 px-6 text-right">Price</th>
                  <th className="py-3 px-6 text-right">Total</th>
                  <th className="py-3 px-6 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map(item => (
                  <tr key={item.id} className="border-b hover:bg-gray-50">
                    <td className="py-4 px-6">{item.name}</td>
                    <td className="py-4 px-6 text-center">{item.quantity}</td>
                    <td className="py-4 px-6 text-right">${Number.parseFloat(item.price).toFixed(2)}</td>
                    <td className="py-4 px-6 text-right">
                      ${(item.price * item.quantity).toFixed(2)}
                    </td>
                    <td className="py-4 px-6 text-center">
                      <button className="text-red-500 hover:underline" onClick={() => removeFromCart(item.id)}>Remove</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-col items-end space-y-2 text-gray-700">
            <p>Subtotal: <span className="font-medium">${subtotal.toFixed(2)}</span></p>
            <p>Tax (7%): <span className="font-medium">${taxes.toFixed(2)}</span></p>
            <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
            <button
              onClick={handleCheckout}
              className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded shadow transition"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
