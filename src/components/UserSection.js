// src/components/UserSection.js
import React, { useState } from "react";

const UserSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    marketingConsent: true,
    interests: [],
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
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
      const response = await fetch("/api/users/register", {
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
          marketingConsent: true,
          interests: [],
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
    <section id="users" className="py-16 px-4 bg-snap-light">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center text-snap-dark">
          For Users
        </h2>
        <p className="text-lg mb-8 text-center text-snap-gray max-w-3xl mx-auto">
          iibsy connects you with local vendors for all your tech needs. Find
          products, services, and more with just a few taps.
        </p>

        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <div className="mb-8 bg-snap-lightgray p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-snap-red flex items-center justify-center rounded-lg text-white mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
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
                <div>
                  <h3 className="text-xl font-semibold text-snap-dark">
                    Discover New Products
                  </h3>
                  <p className="text-snap-gray text-sm">
                    Find the latest tech from trusted vendors
                  </p>
                </div>
              </div>
              <div className="pl-16">
                <p className="text-snap-gray">
                  Browse through thousands of products across multiple
                  categories. Our curated marketplace ensures you only see
                  quality items from verified vendors.
                </p>
              </div>
            </div>

            <div className="mb-8 bg-snap-lightgray p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-snap-red flex items-center justify-center rounded-lg text-white mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
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
                <div>
                  <h3 className="text-xl font-semibold text-snap-dark">
                    Direct Communication
                  </h3>
                  <p className="text-snap-gray text-sm">
                    Chat with vendors via WhatsApp
                  </p>
                </div>
              </div>
              <div className="pl-16">
                <p className="text-snap-gray">
                  Have questions about a product? Need customization? Talk
                  directly with vendors through our integrated WhatsApp
                  messaging system for seamless communication.
                </p>
              </div>
            </div>

            <div className="bg-snap-lightgray p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-snap-red flex items-center justify-center rounded-lg text-white mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
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
                <div>
                  <h3 className="text-xl font-semibold text-snap-dark">
                    Secure Transactions
                  </h3>
                  <p className="text-snap-gray text-sm">
                    Safe payment and delivery tracking
                  </p>
                </div>
              </div>
              <div className="pl-16">
                <p className="text-snap-gray">
                  Every purchase is protected by our secure payment system.
                  Track your orders in real-time and enjoy our money-back
                  guarantee if anything doesn't meet your expectations.
                </p>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 bg-snap-light p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-semibold mb-4 text-snap-dark">
              Get Early Access
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

                <div className="mb-4">
                  <label htmlFor="name" className="block text-snap-gray mb-2">
                    Full Name <span className="text-snap-red">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-snap-red"
                  />
                </div>

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
                    We'll notify you about our launch via WhatsApp
                  </p>
                </div>

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
                        value="gaming"
                        checked={formData.interests.includes("gaming")}
                        onChange={handleCheckboxChange}
                        className="mr-2"
                      />
                      <span className="text-snap-gray">Gaming</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="interests"
                        value="smarthome"
                        checked={formData.interests.includes("smarthome")}
                        onChange={handleCheckboxChange}
                        className="mr-2"
                      />
                      <span className="text-snap-gray">Smart Home</span>
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
                      I agree to receive updates, promotions, and offers from
                      iibsy Platform via WhatsApp or SMS. We'll never share your
                      contact information with third parties without your
                      permission.
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-snap-red hover:bg-snap-dark text-snap-light font-bold py-3 px-4 rounded-md transition duration-300"
                >
                  Join the Waitlist
                </button>

                <p className="text-xs text-center text-snap-gray mt-4">
                  Be among the first to experience iibsy when we launch!
                </p>
              </form>
            )}

            {/* Add testimonials from beta users */}
            {formSubmitted && (
              <div className="mt-8">
                <h4 className="text-lg font-medium text-snap-dark mb-4">
                  What Early Users Are Saying
                </h4>
                <div className="space-y-4">
                  <div className="bg-snap-lightgray p-4 rounded">
                    <p className="text-snap-gray text-sm italic">
                      "I've been using the beta version of iibsy for a month
                      now. It's changed how I shop for tech - so much easier
                      than visiting multiple stores!"
                    </p>
                    <p className="text-snap-dark font-medium text-sm mt-2">
                      - Sarah K.
                    </p>
                  </div>
                  <div className="bg-snap-lightgray p-4 rounded">
                    <p className="text-snap-gray text-sm italic">
                      "The direct WhatsApp communication with vendors is a
                      game-changer. Got answers to all my questions before
                      buying my new laptop."
                    </p>
                    <p className="text-snap-dark font-medium text-sm mt-2">
                      - James T.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Featured products section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-snap-dark">
            Popular Products Coming Soon
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="relative mb-3">
                <img
                  src="https://api.lorem.space/image/watch?w=150&h=150"
                  alt="Product preview"
                  className="w-full h-40 object-contain"
                />
                <span className="absolute top-2 right-2 bg-snap-red text-white text-xs font-bold px-2 py-1 rounded">
                  NEW
                </span>
              </div>
              <h4 className="font-medium text-snap-dark truncate">
                Ultra Smart Watch Pro
              </h4>
              <div className="flex justify-between items-center mt-2">
                <p className="text-snap-red font-bold">$199.99</p>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-xs text-snap-gray ml-1">4.9</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="relative mb-3">
                <img
                  src="https://api.lorem.space/image/phone?w=150&h=150"
                  alt="Product preview"
                  className="w-full h-40 object-contain"
                />
                <span className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                  SALE
                </span>
              </div>
              <h4 className="font-medium text-snap-dark truncate">
                Premium Smartphone X12
              </h4>
              <div className="flex justify-between items-center mt-2">
                <div>
                  <p className="text-snap-red font-bold">$799.99</p>
                  <p className="text-xs text-snap-gray line-through">$899.99</p>
                </div>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-xs text-snap-gray ml-1">4.7</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="relative mb-3">
                <img
                  src="https://api.lorem.space/image/fashion?w=150&h=150"
                  alt="Product preview"
                  className="w-full h-40 object-contain"
                />
              </div>
              <h4 className="font-medium text-snap-dark truncate">
                Wireless Pro Earbuds
              </h4>
              <div className="flex justify-between items-center mt-2">
                <p className="text-snap-red font-bold">$129.99</p>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-xs text-snap-gray ml-1">4.8</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="relative mb-3">
                <img
                  src="https://api.lorem.space/image/furniture?w=150&h=150"
                  alt="Product preview"
                  className="w-full h-40 object-contain"
                />
              </div>
              <h4 className="font-medium text-snap-dark truncate">
                Smart Home Hub
              </h4>
              <div className="flex justify-between items-center mt-2">
                <p className="text-snap-red font-bold">$149.99</p>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-xs text-snap-gray ml-1">4.6</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <button className="bg-snap-red hover:bg-snap-dark text-snap-light font-bold py-2 px-6 rounded-md transition duration-300 inline-flex items-center">
              <span>View All Categories</span>
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
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserSection;
