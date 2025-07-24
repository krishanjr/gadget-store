import React from 'react';

const ManageProducts = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Manage Products</h2>
      <button className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Add New Product</button>
      <div className="overflow-x-auto">
        <table className="min-w-full border">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Name</th>
              <th className="border p-2">Price</th>
              <th className="border p-2">Stock</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">Wireless Mouse</td>
              <td className="border p-2">$25.99</td>
              <td className="border p-2">30</td>
              <td className="border p-2">
                <button className="text-blue-500 mr-2">Edit</button>
                <button className="text-red-500">Delete</button>
              </td>
            </tr>
            {/* Repeat for more products */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProducts;
