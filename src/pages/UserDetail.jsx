import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import users from '../data/userData'; // 🧠 Reused from one source

export default function UserDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const user = users.find((u) => u.id === parseInt(id));

  if (!user) return <p className="text-center text-red-400">User not found.</p>;

  return (
    <div className="bg-gray-800 p-10 rounded-lg shadow-xl max-w-xl mx-auto mt-10 animate__animated animate__fadeInUp">
      <h2 className="text-4xl font-bold mb-6 text-green-400 animate__animated animate__fadeInDown">
        {user.name}
      </h2>
      <p className="text-lg text-gray-300 mb-4 animate__animated animate__fadeInUp animate__delay-1s">
        <strong>Email:</strong> {user.email}
      </p>

      <button
        onClick={() => navigate(-1)}
        className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded transition-transform transform hover:scale-105 animate__animated animate__fadeInUp animate__delay-2s"
      >
        ← Go Back
      </button>
    </div>
  );
}
