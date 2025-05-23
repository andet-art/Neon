// src/pages/DashboardHome.tsx
import React from 'react';

const DashboardHome: React.FC = () => {
  return (
    <div className="p-6 ml-56">
      <h1 className="text-3xl font-bold mb-4">Welcome to Your Dashboard</h1>
      <p className="text-lg text-gray-700 mb-6">
        Here you can view your recent activity, manage your profile, and access other tools.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white shadow-md rounded-xl p-5 border">
          <h2 className="text-xl font-semibold mb-2">Orders</h2>
          <p>View and manage recent orders.</p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-5 border">
          <h2 className="text-xl font-semibold mb-2">Messages</h2>
          <p>Check unread messages and notifications.</p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-5 border">
          <h2 className="text-xl font-semibold mb-2">Account Settings</h2>
          <p>Update your account and security settings.</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
