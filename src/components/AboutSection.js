// src/components/AboutSection.js
import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 px-4 bg-snap-lightgray">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-snap-dark">
          About e-shop Platform
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-snap-light p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <div className="bg-snap-red bg-opacity-10 p-3 rounded-full mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-snap-red"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-snap-dark">
              Fast & Seamless
            </h3>
            <p className="text-snap-gray">
              Connect with vendors and find what you need in seconds with our
              intuitive mobile app.
            </p>
          </div>

          <div className="bg-snap-light p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <div className="bg-snap-red bg-opacity-10 p-3 rounded-full mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-snap-red"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-snap-dark">
              Community Driven
            </h3>
            <p className="text-snap-gray">
              Join a thriving marketplace community of users and trusted local
              vendors.
            </p>
          </div>

          <div className="bg-snap-light p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <div className="bg-snap-red bg-opacity-10 p-3 rounded-full mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-snap-red"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-snap-dark">
              Secure & Reliable
            </h3>
            <p className="text-snap-gray">
              Every transaction and interaction on our platform is secure and
              backed by our guarantee.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-snap-light p-8 rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
              <img
                src="/api/placeholder/500/300"
                alt="Electronic devices"
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4 text-snap-dark">
                Elevate Your Tech Experience
              </h3>
              <p className="text-snap-gray mb-4">
                Our platform connects you with trusted vendors offering the
                latest electronic products and services. From smartphones to
                laptops, audio devices to smart home solutions, find everything
                tech under one roof.
              </p>
              <div className="flex items-center text-snap-red">
                <span>Learn more about our products</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
