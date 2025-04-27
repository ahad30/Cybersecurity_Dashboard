import React from 'react';
import { Link } from 'react-router-dom'; // If you're using react-router

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">
        Welcome to the Cybersecurity Dashboard
      </h1>
      <p className="text-lg text-gray-700 mb-8 text-center max-w-xl">
        Monitor, protect, and manage your cybersecurity operations in one place. 
        Stay ahead with real-time insights and powerful tools.
        
      </p>
      <Link
        to="/login"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg text-lg hover:bg-blue-700 transition"
      >
        Go to Login
      </Link>
    </div>
  );
};

export default Home;
