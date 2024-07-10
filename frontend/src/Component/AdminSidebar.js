import React from 'react';
import { NavLink } from 'react-router-dom';

const AdminSidebar = () => {
  return (
    <aside className="w-64 h-screen bg-gray-800 text-white">
      <nav className="p-4">
        <ul className="space-y-2">
          <li>
            <NavLink
              to="/admin/dashboard"
              className="block p-2 hover:bg-gray-700 rounded"
              activeClassName="bg-gray-900"
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/create"
              className="block p-2 hover:bg-gray-700 rounded"
              activeClassName="bg-gray-900"
            >
              Create Post
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/manage"
              className="block p-2 hover:bg-gray-700 rounded"
              activeClassName="bg-gray-900"
            >
              Manage Posts
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default AdminSidebar;
