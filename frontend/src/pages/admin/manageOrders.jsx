import React from 'react';

const ManageOrders = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Manage Orders</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Order ID</th>
              <th className="border p-2">User</th>
              <th className="border p-2">Status</th>
              <th className="border p-2">Total</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">#12345</td>
              <td className="border p-2">John Doe</td>
              <td className="border p-2">Pending</td>
              <td className="border p-2">$129.99</td>
              <td className="border p-2">
                <button className="text-green-500 mr-2">Mark as Shipped</button>
                <button className="text-red-500">Cancel</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageOrders;
