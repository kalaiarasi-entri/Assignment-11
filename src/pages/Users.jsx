import React from 'react';
import { Link } from 'react-router-dom';
import users from '../data/userData'; // 👥 External user data

export default function Users() {
  return (
    <div className="animate__animated animate__fadeIn px-4 py-10">
      <h2 className="text-4xl font-extrabold mb-10 text-center animate__animated animate__fadeInDown">
        Users List
      </h2>

      <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {users.map((user) => (
          <li
            key={user.id}
            className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 animate__animated animate__fadeInUp"
          >
            <h3 className="text-2xl font-semibold mb-2 text-emerald-400">{user.name}</h3>
            <p className="text-gray-300 mb-4">{user.email}</p>

            <Link
              to={`/users/${user.id}`}
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-transform transform hover:scale-105"
            >
              View Details →
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
