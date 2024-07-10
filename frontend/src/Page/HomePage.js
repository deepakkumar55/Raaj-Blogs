import React from "react";
import { Link } from "react-router-dom";
import coverImage from "../assets/images/cover-image.jpg"; // Import your cover image
import SubscribeButton from "../Component/SubscribeButton";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-200 to-gray-300">
      {/* Hero Section with Cover Image */}
      <section
        className="flex items-center justify-center h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${coverImage})` }}
      >
        <div className="bg-white bg-opacity-90 p-8 rounded-lg">
          <div className="text-center">
            <h1 className="text-6xl md:text-8xl font-bold text-gray-800 mb-4">
              Welcome to Raaj Aryan's Blog
            </h1>
            <p className="text-lg md:text-2xl text-gray-600 mb-6">
              Empowering Your Journey through Technology and Creativity
            </p>
            <Link
              to="#featured"
              className="bg-red-500 hover:bg-red-600 text-white py-3 px-6 rounded-lg text-lg font-medium transition duration-300"
            >
              Explore Featured Articles
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Content Section */}
      <section id="featured" className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 text-center">
            Featured Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Example featured article cards */}
            <div className="bg-white shadow-lg rounded-lg p-4">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Getting Started with React Hooks
              </h3>
              <p className="text-gray-600 mb-4">
                Learn how to effectively use React hooks to simplify your components.
              </p>
              <Link
                to="/blog/getting-started-with-react-hooks"
                className="text-red-500 hover:text-red-600 font-medium"
              >
                Read More
              </Link>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-4">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Mastering CSS Grid Layouts
              </h3>
              <p className="text-gray-600 mb-4">
                Dive deep into CSS grid layouts and create responsive designs effortlessly.
              </p>
              <Link
                to="/blog/mastering-css-grid-layouts"
                className="text-red-500 hover:text-red-600 font-medium"
              >
                Read More
              </Link>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-4">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Introduction to TypeScript
              </h3>
              <p className="text-gray-600 mb-4">
                Explore the basics of TypeScript and how it enhances JavaScript development.
              </p>
              <Link
                to="/blog/introduction-to-typescript"
                className="text-red-500 hover:text-red-600 font-medium"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 bg-gray-800 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Join Our Community</h2>
          <p className="text-lg mb-6">
            Stay updated with the latest articles, tips, and community insights.
          </p>
          <SubscribeButton/>
        </div>
      </section>
    </div>
  );
};

export default Home;
