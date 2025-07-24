import React from 'react';

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-white shadow rounded">Total Users: 120</div>
        <div className="p-4 bg-white shadow rounded">Total Products: 45</div>
        <div className="p-4 bg-white shadow rounded">Pending Orders: 8</div>
      </div>
    </div>
  );
};

export default Dashboard;
