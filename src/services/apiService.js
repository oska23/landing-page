import axios from "axios";

// Get the API URL from environment variables or use the default
const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3001";

// Create axios instance with default config
const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// User-related API calls
export const userService = {
  // Register a new user
  register: async (userData) => {
    try {
      const response = await api.post("/api/users/register", userData);
      return response.data;
    } catch (error) {
      console.error("Error registering user:", error);
      throw error;
    }
  },
};

// Vendor-related API calls
export const vendorService = {
  // Register a new vendor
  register: async (vendorData) => {
    try {
      const response = await api.post("/api/vendors/register", vendorData);
      return response.data;
    } catch (error) {
      console.error("Error registering vendor:", error);
      throw error;
    }
  },
};

// Contact form submission
export const contactService = {
  // Submit contact form
  submit: async (contactData) => {
    try {
      const response = await api.post("/api/contact", contactData);
      return response.data;
    } catch (error) {
      console.error("Error submitting contact form:", error);
      throw error;
    }
  },
};

const apiServices = {
  userService,
  vendorService,
  contactService,
};

export default apiServices;
