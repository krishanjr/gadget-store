import React, { useState, useEffect } from 'react';
import axios from "axios";
import BASE_URL from '../../utils/api';

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);
  const [editingOrderId, setEditingOrderId] = useState(null);
  const [editedOrder, setEditedOrder] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/orders/`);
      setOrders(res.data);
    } catch (err) {
      setError("Failed to fetch Orders.");
      console.error(err);
    }
  };

  const startEdit = (order) => {
    setEditingOrderId(order.id);
    setEditedOrder({ ...order });
  };

  const cancelEdit = () => {
    setEditingOrderId(null);
    setEditedOrder({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedOrder({ ...editedOrder, [name]: value });
  };

  const saveEdit = async () => {
    try {
      const res = await axios.put(`${BASE_URL}/orders/${editingOrderId}`, editedOrder);
      console.log("Updated:", res.data);
      setEditingOrderId(null);
      setEditedOrder({});
      fetchOrders(); // Refresh orders list
    } catch (err) {
      console.error("Failed to update order:", err);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Manage Orders</h2>
      {error && <p className="text-red-500">{error}</p>}
      <div className="overflow-x-auto">
        <table className="min-w-full border text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Order ID</th>
              <th className="border p-2">User</th>
              <th className="border p-2">Status</th>
              <th className="border p-2">Payment</th>
              <th className="border p-2">Shipping Address</th>
              <th className="border p-2">Total</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className={editingOrderId === order.id ? "bg-yellow-50" : ""}>
                <td className="border p-2">{order.id}</td>
                <td className="border p-2">{order.userId}</td>
                <td className="border p-2">
                  {editingOrderId === order.id ? (
                    <select
                      name="orderStatus"
                      value={editedOrder.orderStatus}
                      onChange={handleChange}
                      className="border p-1"
                    >
                      {["pending", "confirmed", "processing", "shipped", "delivered", "cancelled"].map((status) => (
                        <option key={status} value={status}>{status}</option>
                      ))}
                    </select>
                  ) : (
                    order.orderStatus
                  )}
                </td>
                <td className="border p-2">
                  {editingOrderId === order.id ? (
                    <div className="space-y-1">
                      <input
                        type="text"
                        name="paymentMethod"
                        value={editedOrder.paymentMethod}
                        onChange={handleChange}
                        className="border p-1 w-full"
                        placeholder="Payment Method"
                      />
                      <select
                        name="paymentStatus"
                        value={editedOrder.paymentStatus}
                        onChange={handleChange}
                        className="border p-1 w-full"
                      >
                        {["pending", "paid", "failed", "refunded"].map((ps) => (
                          <option key={ps} value={ps}>{ps}</option>
                        ))}
                      </select>
                    </div>
                  ) : (
                    <>
                      {order.paymentMethod} ({order.paymentStatus})
                    </>
                  )}
                </td>
                <td className="border p-2">
                  {editingOrderId === order.id ? (
                    <textarea
                      name="shippingAddress"
                      value={JSON.stringify(editedOrder.shippingAddress)}
                      onChange={(e) =>
                        setEditedOrder({
                          ...editedOrder,
                          shippingAddress: e.target.value,
                        })
                      }
                      className="border p-1 w-full"
                      rows={2}
                    />
                  ) : (
                    <pre className="whitespace-pre-wrap text-xs">
                      {JSON.stringify(order.shippingAddress)}
                    </pre>
                  )}
                </td>
                <td className="border p-2">Rs. {order.totalAmount}</td>
                <td className="border p-2 space-x-2">
                  {editingOrderId === order.id ? (
                    <>
                      <button onClick={saveEdit} className="text-green-600 font-semibold">Save</button>
                      <button onClick={cancelEdit} className="text-gray-600">Cancel</button>
                    </>
                  ) : (
                    <button
                      onClick={() => startEdit(order)}
                      className="text-blue-600"
                    >
                      Edit
                    </button>
                  )}
                </td>
              </tr>
            ))}
            {orders.length === 0 && (
              <tr>
                <td colSpan="7" className="text-center p-4 text-gray-500">No orders found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageOrders;
