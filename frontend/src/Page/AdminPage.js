import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminSidebar from '../components/AdminSidebar';

const AdminPage = () => {
  return (
    <div className="flex h-screen">
      {/* Admin Sidebar */}
      <AdminSidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col bg-gray-100">
        {/* Top Bar */}
        <header className="bg-gray-800 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            {/* Logo or Site Name */}
            <h1 className="text-xl font-bold">Admin Dashboard</h1>
            {/* Menu Options (if needed) */}
            <div className="hidden md:flex space-x-4">
              <a href="#" className="hover:text-gray-300">Option 1</a>
              <a href="#" className="hover:text-gray-300">Option 2</a>
              <a href="#" className="hover:text-gray-300">Option 3</a>
            </div>
            {/* Mobile Menu Icon (for responsive design) */}
            <div className="md:hidden">
              {/* Insert your mobile menu icon component here */}
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 overflow-y-auto">
          <div className="container mx-auto">
            {/* Nested Routes Content */}
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminPage;
