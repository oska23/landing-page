// src/App.js
import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import UserSection from "./components/UserSection";
import VendorSection from "./components/VendorSection";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <AboutSection />
      <UserSection />
      <VendorSection />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
