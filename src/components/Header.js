// src/components/Header.js
import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-snap-light shadow-md z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          {/* iibsy Logo */}
          <div className="mr-2 w-10 h-10">
            <svg
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <path
                d="M98.5,48c-5.4-6.1-48-48-48-48S19.7,14.9,2,36.3s7.3,52.8,7.3,52.8s28.2,9.6,45.8-7.6S98.5,48,98.5,48z"
                fill="#FF5C4D"
              />
              <circle cx="30" cy="78" r="16" fill="#FF5C4D" />
              <circle cx="80" cy="78" r="16" fill="#FF5C4D" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-snap-red">iibsy</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a
            href="#about"
            className="text-snap-dark hover:text-snap-red transition duration-300"
          >
            About
          </a>
          <a
            href="#users"
            className="text-snap-dark hover:text-snap-red transition duration-300"
          >
            For Users
          </a>
          <a
            href="#vendors"
            className="text-snap-dark hover:text-snap-red transition duration-300"
          >
            For Vendors
          </a>
          <a
            href="#contact"
            className="text-snap-dark hover:text-snap-red transition duration-300"
          >
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-snap-dark"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-snap-light py-2">
          <a
            href="#about"
            className="block text-snap-dark hover:text-snap-red px-4 py-2"
          >
            About
          </a>
          <a
            href="#users"
            className="block text-snap-dark hover:text-snap-red px-4 py-2"
          >
            For Users
          </a>
          <a
            href="#vendors"
            className="block text-snap-dark hover:text-snap-red px-4 py-2"
          >
            For Vendors
          </a>
          <a
            href="#contact"
            className="block text-snap-dark hover:text-snap-red px-4 py-2"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
