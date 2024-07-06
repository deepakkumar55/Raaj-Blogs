import React from 'react';

const AdminDashboard = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 border rounded">
          <h2 className="text-2xl font-bold mb-2">Blog Management</h2>
          {/* Blog management details */}
        </div>
        <div className="p-4 border rounded">
          <h2 className="text-2xl font-bold mb-2">User Management</h2>
          {/* User management details */}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
