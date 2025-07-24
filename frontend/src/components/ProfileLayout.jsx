import React from 'react';

const ProfileLayout = ({ children }) => {
  if (!children) {
    return null;
  }
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold mb-6">User Profile</h1>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default ProfileLayout;
