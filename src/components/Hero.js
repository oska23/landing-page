// src/components/Hero.js
import React from "react";

const Hero = () => {
  return (
    <section className="pt-24 pb-12 px-4 bg-snap-light">
      <div className="container mx-auto text-center py-16">
        <div className="flex justify-center mb-6">
          {/* Larger iibsy Logo */}
          <div className="w-24 h-24">
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
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-snap-dark">
          The iibsy Platform
        </h1>
        <h2 className="text-2xl md:text-3xl mb-8 text-snap-red">
          Launching Soon
        </h2>

        <div className="max-w-2xl mx-auto mb-8 bg-snap-red rounded-md overflow-hidden">
          <div className="flex items-center p-2">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="w-full px-4 py-2 focus:outline-none text-snap-dark"
            />
            <button className="bg-snap-dark text-snap-light px-4 py-2 rounded-r">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>

        <p className="text-xl md:w-2/3 mx-auto mb-8 text-snap-gray">
          Connecting users and vendors in a seamless marketplace experience. Be
          the first to know when we launch!
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#users"
            className="bg-snap-red hover:bg-snap-dark text-snap-light font-bold py-3 px-6 rounded-md transition duration-300"
          >
            I'm a User
          </a>
          <a
            href="#vendors"
            className="bg-snap-dark hover:bg-snap-red text-snap-light font-bold py-3 px-6 rounded-md transition duration-300"
          >
            I'm a Vendor
          </a>
        </div>

        {/* Product Preview Section with API-loaded images */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-8 text-snap-dark">
            Featured Products Coming Soon
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* These image URLs will be replaced with actual API calls */}
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <img
                src="https://api.lorem.space/image/watch?w=200&h=200"
                alt="Product preview"
                className="w-full h-40 object-contain mb-2"
              />
              <p className="text-snap-dark font-medium truncate">Smart Watch</p>
              <p className="text-snap-red font-bold">$199.99</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <img
                src="https://api.lorem.space/image/phone?w=200&h=200"
                alt="Product preview"
                className="w-full h-40 object-contain mb-2"
              />
              <p className="text-snap-dark font-medium truncate">
                Smartphone Pro
              </p>
              <p className="text-snap-red font-bold">$899.99</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <img
                src="https://api.lorem.space/image/furniture?w=200&h=200"
                alt="Product preview"
                className="w-full h-40 object-contain mb-2"
              />
              <p className="text-snap-dark font-medium truncate">
                Ergonomic Chair
              </p>
              <p className="text-snap-red font-bold">$249.99</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <img
                src="https://api.lorem.space/image/shoes?w=200&h=200"
                alt="Product preview"
                className="w-full h-40 object-contain mb-2"
              />
              <p className="text-snap-dark font-medium truncate">
                Running Shoes
              </p>
              <p className="text-snap-red font-bold">$129.99</p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center items-center mt-12 space-x-8">
          <img
            src="https://api.lorem.space/image/fashion?w=80&h=40"
            alt="Partner logo"
            className="h-8 object-contain"
          />
          <img
            src="https://api.lorem.space/image/game?w=80&h=40"
            alt="Partner logo"
            className="h-8 object-contain"
          />
          <img
            src="https://api.lorem.space/image/movie?w=80&h=40"
            alt="Partner logo"
            className="h-8 object-contain"
          />
          <img
            src="https://api.lorem.space/image/album?w=80&h=40"
            alt="Partner logo"
            className="h-8 object-contain"
          />
          <img
            src="https://api.lorem.space/image/book?w=80&h=40"
            alt="Partner logo"
            className="h-8 object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
