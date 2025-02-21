import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, ClipboardList, Database, Calendar } from 'lucide-react';

function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Welcome to Food Waste Management
        </h1>
        <p className="text-xl text-gray-600 mb-12">
          Track, manage, and reduce food waste efficiently
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <Link
          to="/initial-entry"
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <Scale className="h-12 w-12 text-blue-600 mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Initial Entry</h2>
          <p className="text-gray-600">Record initial weight and details of food items</p>
        </Link>

        <Link
          to="/remaining-entry"
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <ClipboardList className="h-12 w-12 text-green-600 mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Remaining Entry</h2>
          <p className="text-gray-600">Update remaining weights and track wastage</p>
        </Link>

        <Link
          to="/data"
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <Database className="h-12 w-12 text-purple-600 mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Data View</h2>
          <p className="text-gray-600">Analyze food waste data and trends</p>
        </Link>

        <Link
          to="/bookings"
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <Calendar className="h-12 w-12 text-red-600 mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Bookings</h2>
          <p className="text-gray-600">Manage trust bookings for remaining food</p>
        </Link>
      </div>

      <div className="mt-16 bg-blue-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Use Our System?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Efficient Tracking</h3>
            <p className="text-gray-600">Monitor food waste with precise weight measurements and detailed records</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Waste Reduction</h3>
            <p className="text-gray-600">Identify patterns and optimize food preparation to minimize waste</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Social Impact</h3>
            <p className="text-gray-600">Connect with local trusts to redistribute surplus food to those in need</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;