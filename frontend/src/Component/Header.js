import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaUser, FaCode } from 'react-icons/fa';
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

const Header = () => {
  const location = useLocation();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const navItems = [
    { path: '/', name: 'Home', icon: <FaHome /> },
    { path: '/project', name: 'Project', icon: <FaCode /> },
    { path: '/admin', name: 'Admin', icon: <FaUser /> },
  ];

  return (
    <>
      <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto flex justify-between items-center p-5">
          <Link to="/" className="text-3xl font-extrabold text-gray-800 tracking-wide">
            <span className="text-red-500">Raaj</span>Blog's
          </Link>
          <div className="flex items-center space-x-4">
            <nav className="hidden md:flex space-x-4">
              {navItems.map((item) => (
                <NavLink key={item.path} to={item.path} isActive={location.pathname === item.path}>
                  {item.icon} <span className="ml-2 hidden md:inline">{item.name}</span>
                </NavLink>
              ))}
            </nav>
            {user && (
              <img
                src={user.photoURL}
                alt="User profile"
                className="w-8 h-8 rounded-full"
              />
            )}
          </div>
        </div>
      </header>
      <main className="bg-white pt-0 pb-0">
        {/* Your main content goes here */}
      </main>
      <MobileMenu navItems={navItems} location={location} />
    </>
  );
};

const NavLink = ({ to, isActive, children }) => (
  <Link
    to={to}
    className={`flex items-center text-gray-600 hover:text-gray-800 hover:bg-yellow-200 rounded-full px-3 py-2 transition duration-300 ${
      isActive ? 'text-blue-500 bg-yellow-200' : ''
    }`}
  >
    {children}
  </Link>
);

const MobileMenu = ({ navItems, location }) => (
  <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-gray-200 pl-4 pb-4 flex justify-around shadow-md z-50">
    {navItems.map((item) => (
      <Link
        key={item.path}
        to={item.path}
        className={`flex flex-col text-2xl items-center space-y-1 p-4 rounded-full hover:bg-yellow-500 transition duration-300 ${
          location.pathname === item.path ? 'bg-yellow-500 text-white' : 'text-gray-800'
        }`}
      >
        {item.icon}
        {/* Hide the text on mobile screens */}
        <span className="text-xs hidden md:inline">{item.name}</span>
        {location.pathname === item.path && (
          <div className="w-8 h-1 bg-blue-500 rounded-full absolute bottom-0 transform translate-y-2"></div>
        )}
      </Link>
    ))}
  </nav>
);

export default Header;
