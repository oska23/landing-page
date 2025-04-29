// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Component imports
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import MainSection from "./components/MainSection";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";

// Policy page imports
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfUse from "./components/TermsOfUse";
import ReturnPolicy from "./components/ReturnPolicy";
import DeliveryPolicy from "./components/DeliveryPolicy";

// Main home page component that combines multiple sections
const Home = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <MainSection />
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          {/* Main home page route */}
          <Route path="/" element={<Home />} />

          {/* Contact page */}
          <Route path="/contact" element={<ContactUs />} />

          {/* Policy pages */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfUse />} />
          <Route path="/return-policy" element={<ReturnPolicy />} />
          <Route path="/shipping-policy" element={<DeliveryPolicy />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
