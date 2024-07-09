import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

const AdminSidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <aside
      className={`fixed md:relative top-0 left-0 w-64 h-full bg-gray-800 text-white p-4 space-y-4 z-50 transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0 transition-transform duration-300 ease-in-out`}
    >
      <div className="flex justify-between items-center md:hidden">
        <h2 className="text-2xl font-bold">Admin Panel</h2>
        <button onClick={toggleSidebar} aria-label="Close Sidebar">
          <FaTimes size={24} />
        </button>
      </div>
      <nav>
        <ul className="space-y-2">
          <li>
            <NavLink
              to="/admin/dashboard"
              activeClassName="bg-gray-700"
              className="block px-4 py-2 rounded hover:bg-gray-700"
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/create"
              activeClassName="bg-gray-700"
              className="block px-4 py-2 rounded hover:bg-gray-700"
            >
              Create Post
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/manage"
              activeClassName="bg-gray-700"
              className="block px-4 py-2 rounded hover:bg-gray-700"
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
