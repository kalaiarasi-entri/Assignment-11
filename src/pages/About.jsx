import React from 'react';
import { Link } from 'react-router-dom';
import { FaReact, FaUserTie, FaRoute } from 'react-icons/fa';

export default function About() {
  return (
    <div className="bg-gray-900 text-white px-6 py-16 animate__animated animate__fadeIn">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-5xl font-extrabold mb-4 animate__animated animate__fadeInDown">
          About This Application
        </h2>
        <p className="text-lg max-w-2xl mx-auto text-gray-300 animate__animated animate__fadeInUp animate__delay-1s">
          Built with modern web technologies, this React application is designed to help manage employee data efficiently
          using dynamic routing, reusable components, and a clean UI.
        </p>
      </div>

      {/* Features */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto animate__animated animate__fadeInUp animate__delay-2s">
        {/* Feature 1 */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 text-center">
          <FaReact className="text-5xl text-cyan-400 mx-auto mb-4 animate__animated animate__bounceIn" />
          <h3 className="text-2xl font-bold mb-2">React-Based</h3>
          <p className="text-gray-400">
            Developed using functional components, hooks, and the powerful features of the React ecosystem.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 text-center">
          <FaUserTie className="text-5xl text-yellow-300 mx-auto mb-4 animate__animated animate__bounceIn animate__delay-1s" />
          <h3 className="text-2xl font-bold mb-2">Employee Focused</h3>
          <p className="text-gray-400">
            Manage employee records, view detailed profiles, and ensure your organization stays organized and connected.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 text-center">
          <FaRoute className="text-5xl text-pink-400 mx-auto mb-4 animate__animated animate__bounceIn animate__delay-2s" />
          <h3 className="text-2xl font-bold mb-2">Dynamic Routing</h3>
          <p className="text-gray-400">
            Navigate between pages and user details smoothly using parameterized routes with React Router DOM.
          </p>
        </div>
      </div>

      {/* Additional Content Section */}
      <div className="max-w-4xl mx-auto mt-16 text-center animate__animated animate__fadeInUp animate__delay-3s">
        <h3 className="text-3xl font-semibold mb-4 text-teal-300">Why Choose This App?</h3>
        <p className="text-gray-300 mb-4">
          This project is not just a demonstration — it's a foundation. It uses clean folder structure, responsive layouts, and animated transitions
          that make it easy to extend into real-world use.
        </p>
        <p className="text-gray-400">
          Whether you're building internal tools, learning routing concepts, or showcasing your frontend skills,
          this application serves as an excellent starting point.
        </p>
      </div>

      {/* Call-to-Action */}
      <div className="text-center mt-16 animate__animated animate__fadeInUp animate__delay-4s">
        <Link
          to="/"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
