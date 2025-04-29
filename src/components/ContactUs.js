// src/components/ContactUs.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoadingSpinner from "./common/LoadingSpinner";
import { contactService } from "../services/apiService";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    subject: "", // Added subject field
    contactPreference: "email",
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
    setLoading(true);

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setError("Name, email, and message are required");
      setLoading(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address");
      setLoading(false);
      return;
    }

    // Phone validation (if provided)
    if (formData.phone) {
      const phoneRegex = /^\+?[0-9]{10,15}$/;
      if (!phoneRegex.test(formData.phone)) {
        setError("Please enter a valid phone number (10-15 digits)");
        setLoading(false);
        return;
      }
    }

    try {
      // Use the contact service to submit the form
      await contactService.submit({
        ...formData,
        subject: formData.subject || "General Inquiry", // Provide default subject if not specified
      });

      setFormSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        subject: "",
        contactPreference: "email",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      if (error.response) {
        setError(
          error.response.data.message ||
            "Failed to send message. Please try again."
        );
      } else if (error.request) {
        setError(
          "No response from server. Please check your connection and try again."
        );
      } else {
        setError("Connection error. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-24 pb-12 px-4 bg-snap-light">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold mb-8 text-center text-snap-dark">
          Contact Us
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6 text-snap-dark">
              Get In Touch
            </h2>
            <p className="text-snap-gray mb-6">
              Have questions about our products or services? We're here to help!
              Choose the contact method that works best for you.
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-snap-red bg-opacity-10 p-3 rounded-full mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-snap-red"
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
                <div>
                  <h3 className="text-lg font-medium text-snap-dark">Email</h3>
                  <a
                    href="mailto:info@iibsy.com"
                    className="text-snap-red hover:underline"
                  >
                    suport@iibsy.com
                  </a>
                  <p className="text-sm text-snap-gray mt-1">
                    We typically respond within 1 business day
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-snap-red bg-opacity-10 p-3 rounded-full mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-snap-red"
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
                <div>
                  <h3 className="text-lg font-medium text-snap-dark">
                    WhatsApp / Phone
                  </h3>
                  <a
                    href="https://wa.me/15551234567"
                    className="text-snap-red hover:underline"
                  >
                    +252 (63) 673-0837
                  </a>
                  <p className="text-sm text-snap-gray mt-1">
                    Available Saturday-Wednesday, 8AM-6PM GMT +3
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-snap-red bg-opacity-10 p-3 rounded-full mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-snap-red"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-snap-dark">
                    Address
                  </h3>
                  <p className="text-snap-gray">
                    Jigjiga Yar Area
                    <br />
                    Hargeisa, Somaliland
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-medium mb-4 text-snap-dark">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-snap-red bg-opacity-10 p-3 rounded-full text-snap-red hover:bg-opacity-20 transition duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-snap-red bg-opacity-10 p-3 rounded-full text-snap-red hover:bg-opacity-20 transition duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.126 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-snap-red bg-opacity-10 p-3 rounded-full text-snap-red hover:bg-opacity-20 transition duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            {formSubmitted ? (
              <div className="text-center">
                <div className="bg-green-100 text-green-700 p-4 rounded-lg mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 mx-auto text-green-500 mb-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                  <p>
                    Thank you for reaching out. We'll get back to you shortly.
                  </p>
                </div>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="bg-snap-red hover:bg-snap-dark text-snap-light font-bold py-2 px-6 rounded-md transition duration-300"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h2 className="text-2xl font-semibold mb-6 text-snap-dark">
                  Send Us a Message
                </h2>

                {error && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                    <p>{error}</p>
                  </div>
                )}

                <div className="mb-4">
                  <label htmlFor="name" className="block text-snap-gray mb-2">
                    Your Name <span className="text-snap-red">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Ahmed Mohd"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-snap-red"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block text-snap-gray mb-2">
                    Email Address <span className="text-snap-red">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="ahmed-mohd@example.com"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-snap-red"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="phone" className="block text-snap-gray mb-2">
                    Phone Number (optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+252 (63) 673-0837"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-snap-red"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="subject"
                    className="block text-snap-gray mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Maxaad jeclaan lahayd inaad na waydiiso?"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-snap-red"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-snap-gray mb-2"
                  >
                    Message <span className="text-snap-red">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Sideen kuu caawina?"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-snap-red"
                  ></textarea>
                </div>

                <div className="mb-6">
                  <p className="block text-snap-gray mb-2">
                    Preferred Contact Method
                  </p>
                  <div className="flex space-x-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="contactPreference"
                        value="email"
                        checked={formData.contactPreference === "email"}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      <span className="text-snap-gray">Email</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="contactPreference"
                        value="phone"
                        checked={formData.contactPreference === "phone"}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      <span className="text-snap-gray">Phone</span>
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-snap-red hover:bg-snap-dark text-snap-light font-bold py-3 px-4 rounded-md transition duration-300 flex justify-center items-center"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <LoadingSpinner size="sm" color="white" />
                      <span className="ml-2">Sending...</span>
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8 text-center text-snap-dark">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2 text-snap-dark">
                How do I track my order?
              </h3>
              <p className="text-snap-gray">
                Once your order is shipped, you'll receive a tracking number via
                email. You can use this number on our website's Order Tracking
                page or directly on the carrier's website.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2 text-snap-dark">
                What payment methods do you accept?
              </h3>
              <p className="text-snap-gray">
                We accept major credit cards, PayPal, Apple Pay, Google Pay, and
                bank transfers. For more information, please visit our Payment
                Methods page.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2 text-snap-dark">
                How can I become a vendor?
              </h3>
              <p className="text-snap-gray">
                To become a vendor on our platform, please register using our
                Vendor Registration form. Our team will review your application
                and get back to you within 2-3 business days.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2 text-snap-dark">
                What is your return policy?
              </h3>
              <p className="text-snap-gray">
                We offer a 30-day return policy for most products. Please visit
                our{" "}
                <Link to="/return-policy" className="text-snap-red">
                  Return Policy
                </Link>{" "}
                page for complete details and instructions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
