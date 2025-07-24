import React from 'react';

const ManageAddress = () => {
  return (
    <div className="min-h-screen p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Manage Address</h1>
      <p className="mb-4">Here you can add, edit, or remove your shipping addresses.</p>
      {/* Address form and list would go here */}
      <div className="border border-gray-300 rounded p-4">
        <p className="text-gray-600">No addresses added yet.</p>
      </div>
    </div>
  );
};

export default ManageAddress;
