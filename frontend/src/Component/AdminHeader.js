import React from 'react';
import { Link } from 'react-router-dom';

const AdminHeader = () => {
  return (
    <header className="bg-gray-800 p-4 text-white flex justify-between items-center">
      <h1 className="text-2xl font-bold">Admin Panel</h1>
      <nav className="space-x-4">
        <Link to="/admin/dashboard" className="text-white">Dashboard</Link>
        <Link to="/admin/create" className="text-white">Create Post</Link>
        <Link to="/admin/manage" className="text-white">Manage Posts</Link>
      </nav>
    </header>
  );
};

export default AdminHeader;
