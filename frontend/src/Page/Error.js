import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation

const Error = ({ message }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-md shadow-md text-center max-w-sm">
        <svg className="w-10 h-10 mx-auto mb-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
        <p className="text-sm font-semibold mb-2">Error!</p>
        <p className="text-sm mb-4">{message}</p>
        <Link to="/" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition-colors duration-300">
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
