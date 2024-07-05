import React, { useState } from 'react';
import { FiPhone } from 'react-icons/fi'; // Import the phone icon from react-icons

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-6 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md overflow-hidden sm:rounded-lg sm:overflow-hidden">
        <div className="px-6 py-8 sm:px-10">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-2 text-center">Contact Us</h2>
          <p className="text-sm text-gray-600 mb-6 text-center">We'd love to hear from you!</p>
          
          {/* Contact Information Section */}
          <div className="mb-6">
            <h3 className="text-lg font-bold text-gray-900">Contact Information</h3>
            <ul className="mt-2 text-sm text-gray-600">
              <li><span className="font-medium">Email:</span> dk119819@gmail.com</li>
              <li>
                <span className="font-medium">Phone:</span> 
                <span className="flex items-center">
                  <FiPhone className="mr-1 h-4 w-4 text-gray-500" /> 
                  +91-7870260954
                </span>
              </li>
              <li className="mt-2">
                <span className="font-medium">Social Media:</span> 
                <a href="https://x.com/dk_raajaryan" className="ml-2 text-indigo-600 hover:text-indigo-700">Twitter</a>
                <a href="https://linkedin.com/in/raajaryan" className="ml-2 text-indigo-600 hover:text-indigo-700">LinkedIn</a>
                <a href="https://github.com/deepakkumar55" className="ml-2 text-indigo-600 hover:text-indigo-700">GitHub</a>
              </li>
            </ul>
          </div>
          
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-300 ease-in-out transform hover:scale-105"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-300 ease-in-out transform hover:scale-105"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-300 ease-in-out transform hover:scale-105"
                placeholder="Your Message"
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="inline-flex justify-center py-3 px-6 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 ease-in-out transform hover:scale-105"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
