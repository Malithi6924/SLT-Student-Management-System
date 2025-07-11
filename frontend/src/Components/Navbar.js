import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-700 via-cyan-600 to-teal-500 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <span className="text-2xl font-extrabold tracking-wide">Student Management System</span>
        </div>

        {/* Navigation Links */}
        <div className="space-x-6 text-sm md:text-base font-medium">
          <Link to="/" className="hover:text-gray-100 hover:underline transition duration-150">
            Home
          </Link>
          <Link to="/add" className="hover:text-gray-100 hover:underline transition duration-150">
            Add Student
          </Link>
          <Link to="/students" className="hover:text-gray-100 hover:underline transition duration-150">
            View Students
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
