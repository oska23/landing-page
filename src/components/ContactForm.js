// src/components/MainSection.js
import React, { useState } from "react";

const MainSection = () => {
  const [activeTab, setActiveTab] = useState("user");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    userType: "user",
    interests: [],
    businessName: "",
    businessType: "",
    marketingConsent: true,
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target;

    // Handle marketing consent checkbox
    if (name === "marketingConsent") {
      setFormData((prev) => ({
        ...prev,
        marketingConsent: checked,
      }));
      return;
    }

    // Handle interests checkboxes
    setFormData((prev) => {
      if (checked) {
        return { ...prev, interests: [...prev.interests, value] };
      } else {
        return {
          ...prev,
          interests: prev.interests.filter((interest) => interest !== value),
        };
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Basic validation
    if (!formData.name || !formData.phone) {
      setError("Name and phone number are required");
      return;
    }

    // Validate phone number format
    const phoneRegex = /^\+?[0-9]{10,15}$/;
    if (!phoneRegex.test(formData.phone)) {
      setError("Please enter a valid phone number (10-15 digits)");
      return;
    }

    try {
      // Different endpoints based on user type
      const endpoint =
        formData.userType === "user"
          ? "/api/users/register"
          : "/api/vendors/register";

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setFormSubmitted(true);
        setFormData({
          name: "",
          phone: "",
          userType: "user",
          interests: [],
          businessName: "",
          businessType: "",
          marketingConsent: true,
        });
      } else {
        setError(data.message || "Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setError("Connection error. Please try again later.");
    }
  };

  return (
    <section id="main" className="py-16 px-4 bg-snap-lightgray">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center text-snap-dark">
          Join the iibsy Platform
        </h2>

        {/* Tab Selector */}
        <div className="flex justify-center mb-10">
          <div className="bg-white rounded-lg shadow-md inline-flex p-1">
            <button
              onClick={() => setActiveTab("user")}
              className={`px-6 py-2 rounded-md ${
                activeTab === "user"
                  ? "bg-snap-red text-white"
                  : "bg-white text-snap-dark"
              }`}
            >
              I'm a User
            </button>
            <button
              onClick={() => setActiveTab("vendor")}
              className={`px-6 py-2 rounded-md ${
                activeTab === "vendor"
                  ? "bg-snap-red text-white"
                  : "bg-white text-snap-dark"
              }`}
            >
              I'm a Vendor
            </button>
          </div>
        </div>

        {/* Features Section */}
        {activeTab === "user" ? (
          <div className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-6">
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
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-snap-dark">
                Discover New Products
              </h3>
              <p className="text-snap-gray">
                Browse through thousands of products across multiple categories
                from verified vendors.
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
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-snap-dark">
                Direct Communication
              </h3>
              <p className="text-snap-gray">
                Chat with vendors via WhatsApp for inquiries and customization.
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
                Secure Transactions
              </h3>
              <p className="text-snap-gray">
                Protected payments, real-time order tracking, and money-back
                guarantee.
              </p>
            </div>
          </div>
        ) : (
          <div className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-snap-light p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="flex items-center justify-center w-14 h-14 bg-snap-red bg-opacity-10 rounded-full mb-4">
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
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-snap-dark">
                1. Create Account
              </h3>
              <p className="text-snap-gray">
                Register your business and create a vendor profile in minutes.
              </p>
            </div>

            <div className="bg-snap-light p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="flex items-center justify-center w-14 h-14 bg-snap-red bg-opacity-10 rounded-full mb-4">
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
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-snap-dark">
                2. List Products
              </h3>
              <p className="text-snap-gray">
                Add products with photos, descriptions, and pricing easily.
              </p>
            </div>

            <div className="bg-snap-light p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="flex items-center justify-center w-14 h-14 bg-snap-red bg-opacity-10 rounded-full mb-4">
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
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-snap-dark">
                3. Start Selling
              </h3>
              <p className="text-snap-gray">
                Receive orders via WhatsApp and grow your business with us.
              </p>
            </div>
          </div>
        )}

        {/* Registration Form */}
        <div className="max-w-xl mx-auto bg-snap-light p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4 text-snap-dark">
            {activeTab === "user"
              ? "Get Early Access"
              : "Register Your Business"}
          </h3>

          {formSubmitted ? (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
              <p className="font-medium mb-1">Thank you for registering!</p>
              <p>
                We'll notify you when the iibsy Platform launches. Watch for
                updates on your WhatsApp number.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                  <p>{error}</p>
                </div>
              )}

              <input
                type="hidden"
                name="userType"
                value={activeTab}
                onChange={handleChange}
              />

              <div className="mb-4">
                <label htmlFor="name" className="block text-snap-gray mb-2">
                  {activeTab === "vendor" ? "Contact Person" : "Full Name"}{" "}
                  <span className="text-snap-red">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder={
                    activeTab === "vendor"
                      ? "Your full name"
                      : "Enter your full name"
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-snap-red"
                />
              </div>

              {activeTab === "vendor" && (
                <div className="mb-4">
                  <label
                    htmlFor="businessName"
                    className="block text-snap-gray mb-2"
                  >
                    Business Name <span className="text-snap-red">*</span>
                  </label>
                  <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    required
                    placeholder="Your business name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-snap-red"
                  />
                </div>
              )}

              <div className="mb-4">
                <label htmlFor="phone" className="block text-snap-gray mb-2">
                  WhatsApp / Phone Number{" "}
                  <span className="text-snap-red">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+1 123 456 7890"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-snap-red"
                />
                <p className="text-xs text-snap-gray mt-1">
                  We'll use this to notify you about our launch
                </p>
              </div>

              {activeTab === "vendor" && (
                <div className="mb-4">
                  <label
                    htmlFor="businessType"
                    className="block text-snap-gray mb-2"
                  >
                    Business Type <span className="text-snap-red">*</span>
                  </label>
                  <select
                    id="businessType"
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-snap-red"
                  >
                    <option value="">Select a business type</option>
                    <option value="electronics">Electronics/Tech Store</option>
                    <option value="computers">Computer/Laptop Shop</option>
                    <option value="mobile">Mobile/Smartphone Store</option>
                    <option value="audio">Audio/Headphones</option>
                    <option value="accessories">Tech Accessories</option>
                    <option value="repairs">Repair Services</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              )}

              {activeTab === "user" && (
                <div className="mb-4">
                  <p className="block text-snap-gray mb-2">
                    I'm interested in (select all that apply):
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="interests"
                        value="smartphones"
                        checked={formData.interests.includes("smartphones")}
                        onChange={handleCheckboxChange}
                        className="mr-2"
                      />
                      <span className="text-snap-gray">Smartphones</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="interests"
                        value="laptops"
                        checked={formData.interests.includes("laptops")}
                        onChange={handleCheckboxChange}
                        className="mr-2"
                      />
                      <span className="text-snap-gray">Laptops</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="interests"
                        value="audio"
                        checked={formData.interests.includes("audio")}
                        onChange={handleCheckboxChange}
                        className="mr-2"
                      />
                      <span className="text-snap-gray">Audio Devices</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="interests"
                        value="accessories"
                        checked={formData.interests.includes("accessories")}
                        onChange={handleCheckboxChange}
                        className="mr-2"
                      />
                      <span className="text-snap-gray">Accessories</span>
                    </label>
                  </div>
                </div>
              )}

              <div className="mb-6">
                <label className="flex items-start cursor-pointer">
                  <input
                    type="checkbox"
                    name="marketingConsent"
                    checked={formData.marketingConsent}
                    onChange={handleCheckboxChange}
                    className="mt-1 mr-2"
                  />
                  <span className="text-sm text-snap-gray">
                    I agree to receive updates from iibsy Platform via WhatsApp
                    or SMS. We'll never share your information with third
                    parties.
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-snap-red hover:bg-snap-dark text-snap-light font-bold py-3 px-4 rounded-md transition duration-300"
              >
                {activeTab === "user"
                  ? "Join the Waitlist"
                  : "Submit Application"}
              </button>

              <p className="text-xs text-center text-snap-gray mt-4">
                Be among the first to experience iibsy when we launch!
              </p>
            </form>
          )}

          {/* Only show testimonials after form submission */}
          {formSubmitted && (
            <div className="mt-6">
              <h4 className="text-lg font-medium text-snap-dark mb-3">
                What Others Are Saying
              </h4>
              <div className="bg-snap-lightgray p-4 rounded">
                <p className="text-snap-gray text-sm italic">
                  "I've been using the beta version of iibsy for a month now.
                  It's changed how I shop for tech - so much easier than
                  visiting multiple stores!"
                </p>
                <p className="text-snap-dark font-medium text-sm mt-2">
                  - Sarah K.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Contact section with WhatsApp and Email */}
        <div id="contact" className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-4 text-snap-dark">
            Questions? Get in Touch
          </h3>
          <p className="mb-6 text-snap-gray">
            Contact us directly via WhatsApp or email
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 items-center mb-8">
            <div className="flex items-center">
              <div className="bg-snap-red p-3 rounded-full mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <a
                href="https://wa.me/15551234567"
                className="text-snap-dark hover:text-snap-red"
              >
                <span className="font-medium">WhatsApp:</span> +1 (555) 123-4567
              </a>
            </div>

            <div className="flex items-center">
              <div className="bg-snap-red p-3 rounded-full mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <a
                href="mailto:info@iibsy.com"
                className="text-snap-dark hover:text-snap-red"
              >
                <span className="font-medium">Email:</span> info@iibsy.com
              </a>
            </div>
          </div>

          <div className="flex justify-center space-x-4">
            <a
              href="https://wa.me/15551234567"
              className="bg-snap-red hover:bg-snap-dark text-snap-light font-bold py-2 px-6 rounded-md transition duration-300 inline-flex items-center"
            >
              <span>Message on WhatsApp</span>
            </a>
            <a
              href="mailto:info@iibsy.com"
              className="bg-snap-dark hover:bg-snap-red text-snap-light font-bold py-2 px-6 rounded-md transition duration-300 inline-flex items-center"
            >
              <span>Send Email</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
