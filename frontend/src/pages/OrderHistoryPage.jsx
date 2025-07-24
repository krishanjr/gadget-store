import React from 'react';

const OrderHistoryPage = () => {
  return (
    <div className="min-h-screen p-8 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Order History</h1>
      <p className="mb-4">Review your past orders and their statuses.</p>
      {/* Order history list would go here */}
      <div className="border border-gray-300 rounded p-4">
        <p className="text-gray-600">You have no past orders.</p>
      </div>
    </div>
  );
};

export default OrderHistoryPage;
