// src/components/VendorSection.js
import React, { useState } from "react";

const VendorSection = () => {
  const [formData, setFormData] = useState({
    businessName: "",
    contactName: "",
    phone: "",
    businessType: "",
    description: "",
    termsAgreed: false,
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Basic validation
    if (
      !formData.businessName ||
      !formData.contactName ||
      !formData.phone ||
      !formData.businessType
    ) {
      setError("All required fields must be filled out");
      return;
    }

    // Validate phone number format
    const phoneRegex = /^\+?[0-9]{10,15}$/;
    if (!phoneRegex.test(formData.phone)) {
      setError("Please enter a valid phone number (10-15 digits)");
      return;
    }

    // Validate terms agreement
    if (!formData.termsAgreed) {
      setError("You must agree to the Terms of Service");
      return;
    }

    try {
      setLoading(true);
      const response = await fetch("/api/vendors/register", {
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
          businessName: "",
          contactName: "",
          phone: "",
          businessType: "",
          description: "",
          termsAgreed: false,
        });
      } else {
        setError(data.message || "Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setError("Connection error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="vendors" className="py-16 px-4 bg-snap-lightgray">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center text-snap-dark">
          For Vendors
        </h2>
        <p className="text-lg mb-8 text-center text-snap-gray max-w-3xl mx-auto">
          Join the iibsy Platform and connect with thousands of potential
          customers. Expand your business reach and increase your sales with our
          powerful marketplace.
        </p>

        {/* Steps to become a vendor */}
        <div className="flex flex-col md:flex-row gap-6 mb-12">
          <div className="flex-1 bg-snap-light p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-center w-14 h-14 bg-snap-red bg-opacity-10 rounded-full mb-4 mx-auto">
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
            <h3 className="text-xl font-semibold mb-2 text-snap-dark text-center">
              1. Create Account
            </h3>
            <p className="text-snap-gray text-center">
              Register your business and create your vendor profile in just
              minutes.
            </p>
          </div>

          <div className="flex-1 bg-snap-light p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-center w-14 h-14 bg-snap-red bg-opacity-10 rounded-full mb-4 mx-auto">
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
            <h3 className="text-xl font-semibold mb-2 text-snap-dark text-center">
              2. List Products
            </h3>
            <p className="text-snap-gray text-center">
              Add your products with photos, descriptions, and pricing with our
              user-friendly interface.
            </p>
          </div>

          <div className="flex-1 bg-snap-light p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-center w-14 h-14 bg-snap-red bg-opacity-10 rounded-full mb-4 mx-auto">
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
            <h3 className="text-xl font-semibold mb-2 text-snap-dark text-center">
              3. Start Selling
            </h3>
            <p className="text-snap-gray text-center">
              Receive orders instantly via WhatsApp and grow your business with
              our platform.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Column - Benefits and Features */}
          <div className="md:w-1/2 space-y-8">
            {/* Vendor Benefits */}
            <div className="bg-snap-light p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-snap-dark">
                Vendor Benefits
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-snap-red mr-2 flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-snap-gray">
                    Access to thousands of potential customers daily
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-snap-red mr-2 flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-snap-gray">
                    Intuitive dashboard to manage products, orders, and
                    inventory
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-snap-red mr-2 flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-snap-gray">
                    Fast and secure payment processing with low transaction fees
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-snap-red mr-2 flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-snap-gray">
                    Direct communication with customers via WhatsApp and
                    messaging
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-snap-red mr-2 flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-snap-gray">
                    Detailed analytics and customer insights to grow your
                    business
                  </span>
                </li>
              </ul>
            </div>

            {/* Vendor Plans */}
            <div className="bg-snap-light p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-snap-dark">
                Vendor Plans
              </h3>
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium text-snap-dark">Basic Plan</h4>
                    <span className="bg-snap-red bg-opacity-10 text-snap-red px-2 py-1 rounded-full text-xs font-medium">
                      Free
                    </span>
                  </div>
                  <p className="text-snap-gray text-sm mb-2">
                    Perfect for small businesses just getting started
                  </p>
                  <ul className="text-sm text-snap-gray space-y-1">
                    <li>• Up to 10 product listings</li>
                    <li>• 5% transaction fee</li>
                    <li>• Basic analytics</li>
                    <li>• Email support</li>
                  </ul>
                </div>

                <div className="border-b pb-4">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium text-snap-dark">Premium Plan</h4>
                    <span className="bg-snap-red bg-opacity-10 text-snap-red px-2 py-1 rounded-full text-xs font-medium">
                      $29.99/mo
                    </span>
                  </div>
                  <p className="text-snap-gray text-sm mb-2">
                    For growing businesses looking to expand
                  </p>
                  <ul className="text-sm text-snap-gray space-y-1">
                    <li>• Up to 50 product listings</li>
                    <li>• 3% transaction fee</li>
                    <li>• Advanced analytics</li>
                    <li>• Priority email + chat support</li>
                    <li>• 3 featured products</li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium text-snap-dark">Pro Plan</h4>
                    <span className="bg-snap-red bg-opacity-10 text-snap-red px-2 py-1 rounded-full text-xs font-medium">
                      $49.99/mo
                    </span>
                  </div>
                  <p className="text-snap-gray text-sm mb-2">
                    For established businesses with high sales volume
                  </p>
                  <ul className="text-sm text-snap-gray space-y-1">
                    <li>• Unlimited product listings</li>
                    <li>• 1.5% transaction fee</li>
                    <li>• Premium analytics with market insights</li>
                    <li>• Priority 24/7 support</li>
                    <li>• 10 featured products</li>
                    <li>• Custom storefront</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Testimonials */}
            <div className="bg-snap-light p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-snap-dark">
                What Vendors Say
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-snap-red pl-4 py-1">
                  <p className="text-snap-gray text-sm italic mb-2">
                    "Since joining iibsy Platform, our sales have increased by
                    40%. The direct customer communication through WhatsApp has
                    been game-changing for our business."
                  </p>
                  <p className="text-snap-dark font-medium text-sm">
                    - Michael G., TechHub Electronics
                  </p>
                </div>
                <div className="border-l-4 border-snap-red pl-4 py-1">
                  <p className="text-snap-gray text-sm italic mb-2">
                    "The platform is so easy to use. We listed our products in
                    one day and started receiving orders the same week. Customer
                    support is exceptional."
                  </p>
                  <p className="text-snap-dark font-medium text-sm">
                    - Amina L., SoundWave Audio
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Registration Form */}
          <div className="md:w-1/2 bg-snap-light p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-snap-dark">
              Register Your Business
            </h3>
            {formSubmitted ? (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                <p className="font-medium mb-1">
                  Thank you for registering your business!
                </p>
                <p>
                  We'll be in touch with more information about joining the
                  iibsy Platform as a vendor. Watch for a message on your
                  provided WhatsApp number.
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

                <div className="mb-4">
                  <label
                    htmlFor="contactName"
                    className="block text-snap-gray mb-2"
                  >
                    Contact Person <span className="text-snap-red">*</span>
                  </label>
                  <input
                    type="text"
                    id="contactName"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
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
                    We'll use this for order notifications and customer
                    inquiries
                  </p>
                </div>

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

                <div className="mb-4">
                  <label
                    htmlFor="description"
                    className="block text-snap-gray mb-2"
                  >
                    Business Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows="3"
                    placeholder="Tell us about your business and products"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-snap-red"
                  ></textarea>
                </div>

                <div className="mb-6">
                  <label className="flex items-start cursor-pointer">
                    <input
                      type="checkbox"
                      name="termsAgreed"
                      checked={formData.termsAgreed}
                      onChange={handleChange}
                      required
                      className="mt-1 mr-2"
                    />
                    <span className="text-sm text-snap-gray">
                      I agree to the iibsy Platform's{" "}
                      <a href="/terms-of-service" className="text-snap-red">
                        Terms of Service
                      </a>{" "}
                      and understand that my business and contact information
                      will be used for platform communications.
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  className={`w-full bg-snap-red hover:bg-snap-dark text-snap-light font-bold py-3 px-4 rounded-md transition duration-300 flex justify-center items-center ${
                    loading ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    "Submit Application"
                  )}
                </button>

                <p className="text-xs text-center text-snap-gray mt-4">
                  After registration, our team will review your application and
                  reach out within 1-2 business days.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VendorSection;
