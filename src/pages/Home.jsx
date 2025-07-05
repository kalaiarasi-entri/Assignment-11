import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="text-white bg-gray-900 min-h-screen">
      {/* HERO SECTION */}
      <section className="px-6 py-20 text-center flex flex-col items-center animate__animated animate__fadeIn">
        <h1 className="text-5xl md:text-5xl font-extrabold mb-6 animate__animated animate__fadeInDown">
          Empower Your Workforce Management
        </h1>

        <p className="text-lg md:text-xl max-w-3xl mb-8 leading-relaxed animate__animated animate__fadeInUp animate__delay-1s">
          Discover a modern and efficient way to handle employee records, roles, and user management.
          Built with React, Tailwind CSS, and React Router, this portal ensures a seamless experience.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 animate__animated animate__zoomIn animate__delay-2s">
          <Link
            to="/about"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-transform transform hover:scale-105"
          >
            Learn About the App
          </Link>
          <Link
            to="/users"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-transform transform hover:scale-105"
          >
            View Users
          </Link>
        </div>

        <div className="mt-16 animate__animated animate__pulse animate__infinite">
          <p className="text-sm text-gray-400">Scroll down to explore features ↓</p>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="px-6 py-16 bg-gray-800 animate__animated animate__fadeInUp animate__delay-2s">
        <h2 className="text-4xl font-bold text-center mb-12">Key Features</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Feature 1 */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-2 text-blue-400">User List & Search</h3>
            <p className="text-gray-300">
              Browse all users in a clean layout. Use built-in navigation to explore individual user details.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-2 text-green-400">Smooth Routing</h3>
            <p className="text-gray-300">
              Navigate across pages with lightning-fast routing powered by <strong>React Router DOM</strong>.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-2 text-yellow-400"> Dark Mode UI</h3>
            <p className="text-gray-300">
              Enjoy a clean, accessible dark theme UI built entirely with Tailwind CSS and responsive design.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
