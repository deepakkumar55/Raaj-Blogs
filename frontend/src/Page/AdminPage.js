import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import AdminSidebar from '../Component/AdminSidebar';
import { FaBars } from 'react-icons/fa';

const AdminPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Mobile Navigation Button */}
      <button
        className="md:hidden p-4"
        onClick={toggleSidebar}
        aria-label="Toggle Sidebar"
      >
        <FaBars size={24} />
      </button>

      {/* Admin Sidebar */}
      <AdminSidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-y-auto">
        <main className="flex-1 p-4">
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
