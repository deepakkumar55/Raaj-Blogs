import React from 'react';
import { Link } from 'react-router-dom';

const AdminSidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white">
      <div className="p-4 border-b border-gray-700">
        <h2 className="text-2xl font-bold">Admin Panel</h2>
      </div>
      <ul className="py-4">
        <li className="mb-2">
          <Link to="/admin/dashboard" className="block py-2 px-4 rounded-lg hover:bg-gray-700">Dashboard</Link>
        </li>
        <li className="mb-2">
          <Link to="/admin/create" className="block py-2 px-4 rounded-lg hover:bg-gray-700">Create Post</Link>
        </li>
        <li className="mb-2">
          <Link to="/admin/manage" className="block py-2 px-4 rounded-lg hover:bg-gray-700">Manage Posts</Link>
        </li>
        {/* Add more navigation links as needed */}
      </ul>
    </div>
  );
};

export default AdminSidebar;
