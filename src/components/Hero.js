// src/components/Hero.js
import React from "react";

const Hero = () => {
  return (
    <section className="pt-24 pb-12 px-4 bg-snap-light">
      <div className="container mx-auto text-center py-16">
        <div className="flex justify-center mb-6">
          {/* Logo from public folder */}
          <img src="/logo.png" alt="iibsy logo" className="w-24 h-24" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-snap-dark">
          Platformka iibsy
        </h1>
        <h2 className="text-2xl md:text-3xl mb-8 text-snap-red">
          Dhowaan la Bilaabayaa
        </h2>

        <div className="max-w-2xl mx-auto mb-8 bg-snap-red rounded-md overflow-hidden">
          <div className="flex items-center p-2">
            <input
              type="text"
              placeholder="Maxaad raadinaysaa?"
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
          Ku xidhidda isticmaalayaasha iyo ganacsatada si fudud oo suuqa ah.
          Noqo kuwa ugu horreeya ee ogaada marka aan bilowno!
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#main"
            className="bg-snap-red hover:bg-snap-dark text-snap-light font-bold py-3 px-6 rounded-md transition duration-300"
          >
            Nagu Soo Biir
          </a>
        </div>

        {/* Simplified featured products */}
      </div>
    </section>
  );
};

export default Hero;
