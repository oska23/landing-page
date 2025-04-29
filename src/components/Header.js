// src/components/Header.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to handle navigation to home page
  const navigateToHome = () => {
    window.location.pathname = "/";
  };

  return (
    <header className="fixed w-full bg-snap-light shadow-md z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          {/* Clickable logo with onClick handler */}
          <div
            onClick={navigateToHome}
            className="flex items-center cursor-pointer"
          >
            <img src="/logo.png" alt="iibsy logo" className="w-10 h-10 mr-2" />
            <h1 className="text-3xl font-bold text-snap-red">iibsy</h1>
          </div>
        </div>

        {/* Desktop Navigation - updated with correct paths */}
        <nav className="hidden md:flex space-x-6">
          <a
            href="/#about"
            className="text-snap-dark hover:text-snap-red transition duration-300"
          >
            Ku Saabsan
          </a>
          <a
            href="/#main"
            className="text-snap-dark hover:text-snap-red transition duration-300"
          >
            Nagu Soo Biir
          </a>
          <Link
            to="/contact"
            className="text-snap-dark hover:text-snap-red transition duration-300"
          >
            Nala Soo Xiriir
          </Link>
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

      {/* Mobile Menu - updated with correct paths */}
      {isMenuOpen && (
        <div className="md:hidden bg-snap-light py-2">
          <a
            href="/#about"
            className="block text-snap-dark hover:text-snap-red px-4 py-2"
          >
            Ku Saabsan
          </a>
          <a
            href="/#main"
            className="block text-snap-dark hover:text-snap-red px-4 py-2"
          >
            Nagu Soo Biir
          </a>
          <Link
            to="/contact"
            className="block text-snap-dark hover:text-snap-red px-4 py-2"
          >
            Nala Soo Xiriir
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
