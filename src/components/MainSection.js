// src/components/MainSection.js
import React, { useState } from "react";
import { userService, vendorService } from "../services/apiService";
import LoadingSpinner from "./common/LoadingSpinner";

const MainSection = () => {
  // State for active tab (user or vendor)
  const [activeTab, setActiveTab] = useState("user");

  // User form state
  const [userFormData, setUserFormData] = useState({
    name: "",
    phone: "",
    marketingConsent: true,
    interests: [],
  });

  // Vendor form state
  const [vendorFormData, setVendorFormData] = useState({
    businessName: "",
    contactName: "",
    phone: "",
    businessType: "",
    description: "",
    termsAgreed: false,
  });

  // Shared states for form handling
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle user form input changes
  const handleUserChange = (e) => {
    const { name, value } = e.target;
    setUserFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle vendor form input changes
  const handleVendorChange = (e) => {
    const { name, value, type, checked } = e.target;
    setVendorFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Handle checkbox changes for user form
  const handleUserCheckboxChange = (e) => {
    const { name, value, checked } = e.target;

    // Handle marketing consent checkbox
    if (name === "marketingConsent") {
      setUserFormData((prev) => ({
        ...prev,
        marketingConsent: checked,
      }));
      return;
    }

    // Handle interests checkboxes
    setUserFormData((prev) => {
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

  // Reset form state when switching tabs
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setFormSubmitted(false);
    setError("");
  };

  // Submit user registration form
  const handleUserSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Basic validation
    if (!userFormData.name || !userFormData.phone) {
      setError("Magaca iyo telefoon lambarka waa loo baahan yahay");
      setLoading(false);
      return;
    }

    // Validate phone number format
    const phoneRegex = /^\+?[0-9]{10,15}$/;
    if (!phoneRegex.test(userFormData.phone)) {
      setError("Fadlan geli telefoon lambar sax ah (10-15 digits)");
      setLoading(false);
      return;
    }

    try {
      // Use the API service to register user
      await userService.register(userFormData);
      setFormSubmitted(true);
      setUserFormData({
        name: "",
        phone: "",
        marketingConsent: true,
        interests: [],
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      if (error.response) {
        setError(
          error.response.data.message ||
            "Diiwaan gelinta way fashilantay. Fadlan mar kale isku day."
        );
      } else if (error.request) {
        setError(
          "Ma jiro jawaab ka timid server-ka. Fadlan hubi xiriirkaaga internetka kadibna mar kale isku day."
        );
      } else {
        setError("Khalad xiriir. Fadlan mar dambe isku day.");
      }
    } finally {
      setLoading(false);
    }
  };

  // Submit vendor registration form
  const handleVendorSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Basic validation
    if (
      !vendorFormData.businessName ||
      !vendorFormData.contactName ||
      !vendorFormData.phone ||
      !vendorFormData.businessType
    ) {
      setError("Dhammaan goobaha loo baahan yahay waa in la buuxiyaa");
      setLoading(false);
      return;
    }

    // Validate phone number format
    const phoneRegex = /^\+?[0-9]{10,15}$/;
    if (!phoneRegex.test(vendorFormData.phone)) {
      setError("Fadlan geli telefoon lambar sax ah (10-15 digits)");
      setLoading(false);
      return;
    }

    // Validate terms agreement
    if (!vendorFormData.termsAgreed) {
      setError("Waa inaad aqbashaa Shuruudaha Adeegga");
      setLoading(false);
      return;
    }

    try {
      // Create data to send to API - omit termsAgreed as it's not needed in backend
      const vendorData = {
        businessName: vendorFormData.businessName,
        contactName: vendorFormData.contactName,
        phone: vendorFormData.phone,
        businessType: vendorFormData.businessType,
        description: vendorFormData.description,
      };

      // Use the API service to register vendor
      await vendorService.register(vendorData);
      setFormSubmitted(true);
      setVendorFormData({
        businessName: "",
        contactName: "",
        phone: "",
        businessType: "",
        description: "",
        termsAgreed: false,
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      if (error.response) {
        setError(
          error.response.data.message ||
            "Diiwaan gelinta way fashilantay. Fadlan mar kale isku day."
        );
      } else if (error.request) {
        setError(
          "Ma jiro jawaab ka timid server-ka. Fadlan hubi xiriirkaaga internetka kadibna mar kale isku day."
        );
      } else {
        setError("Khalad xiriir. Fadlan mar dambe isku day.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="main" className="py-16 px-4 bg-snap-light">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center text-snap-dark">
          Ku soo biir Platformka iibsy
        </h2>
        <p className="text-lg mb-8 text-center text-snap-gray max-w-3xl mx-auto">
          Ku soo biir bulshadeena kordheysa oo noqo qayb ka mid ah mustaqbalka
          wax iibsiga teknolojiyadda. Iska diiwaan geli maanta si aad u hesho
          wararkii ugu dambeeyay iyo helitaan hore.
        </p>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              type="button"
              className={`px-6 py-3 text-sm font-medium rounded-l-lg ${
                activeTab === "user"
                  ? "bg-snap-red text-white"
                  : "bg-white text-snap-dark hover:bg-gray-100"
              }`}
              onClick={() => handleTabChange("user")}
            >
              Waxaan ahay Isticmaale
            </button>
            <button
              type="button"
              className={`px-6 py-3 text-sm font-medium rounded-r-lg ${
                activeTab === "vendor"
                  ? "bg-snap-red text-white"
                  : "bg-white text-snap-dark hover:bg-gray-100"
              }`}
              onClick={() => handleTabChange("vendor")}
            >
              Waxaan ahay Ganacsade
            </button>
          </div>
        </div>

        {/* User Registration Form */}
        {activeTab === "user" && (
          <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-snap-dark">
              Diiwaan gelinta Isticmaalaha
            </h3>
            {formSubmitted ? (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                <p className="font-medium mb-1">
                  Waad ku mahadsan tahay diiwaan gelinta!
                </p>
                <p>
                  Waxaan kuu soo sheegi doonnaa marka Platformka iibsy la
                  bilaabo. Fiiri wixii cusub telefoonkaaga WhatsApp ka.
                </p>
              </div>
            ) : (
              <form onSubmit={handleUserSubmit}>
                {error && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                    <p>{error}</p>
                  </div>
                )}

                <div className="mb-4">
                  <label htmlFor="name" className="block text-snap-gray mb-2">
                    Magaca Oo Dhan <span className="text-snap-red">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={userFormData.name}
                    onChange={handleUserChange}
                    required
                    placeholder="Geli magacaaga oo dhan"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-snap-red"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="phone" className="block text-snap-gray mb-2">
                    WhatsApp / Telefoon Lambar{" "}
                    <span className="text-snap-red">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={userFormData.phone}
                    onChange={handleUserChange}
                    required
                    placeholder="+252 123 456 789"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-snap-red"
                  />
                  <p className="text-xs text-snap-gray mt-1">
                    Waxaan kugu soo wargelin doonnaa bilowga adiga oo
                    adeegsanaya WhatsApp
                  </p>
                </div>

                <div className="mb-4">
                  <p className="block text-snap-gray mb-2">
                    Waxaan xiiseynayaa (dooro dhammaan kuwa ku habboon):
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="interests"
                        value="smartphones"
                        checked={userFormData.interests.includes("smartphones")}
                        onChange={handleUserCheckboxChange}
                        className="mr-2"
                      />
                      <span className="text-snap-gray">
                        Telefoonada casriga ah
                      </span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="interests"
                        value="laptops"
                        checked={userFormData.interests.includes("laptops")}
                        onChange={handleUserCheckboxChange}
                        className="mr-2"
                      />
                      <span className="text-snap-gray">
                        Kombiyuutarada gacanta
                      </span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="interests"
                        value="audio"
                        checked={userFormData.interests.includes("audio")}
                        onChange={handleUserCheckboxChange}
                        className="mr-2"
                      />
                      <span className="text-snap-gray">Qalabka Codka</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="interests"
                        value="gaming"
                        checked={userFormData.interests.includes("gaming")}
                        onChange={handleUserCheckboxChange}
                        className="mr-2"
                      />
                      <span className="text-snap-gray">Ciyaaraha</span>
                    </label>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="flex items-start cursor-pointer">
                    <input
                      type="checkbox"
                      name="marketingConsent"
                      checked={userFormData.marketingConsent}
                      onChange={handleUserCheckboxChange}
                      className="mt-1 mr-2"
                    />
                    <span className="text-sm text-snap-gray">
                      Waxaan oggolahay inaan ka helo wararkii ugu dambeeyay,
                      tarwiijinta, iyo dalacsiimaha iibsy Platform iyada oo loo
                      marayo WhatsApp ama SMS.
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-snap-red hover:bg-snap-dark text-snap-light font-bold py-3 px-4 rounded-md transition duration-300 flex justify-center items-center"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <LoadingSpinner size="sm" color="white" />
                      <span className="ml-2">Waa la socodsiinayaa...</span>
                    </>
                  ) : (
                    "Ku biir Liiska Sugitaanka"
                  )}
                </button>
              </form>
            )}
          </div>
        )}

        {/* Vendor Registration Form */}
        {activeTab === "vendor" && (
          <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-snap-dark">
              Diiwaan gelinta Ganacsadaha
            </h3>
            {formSubmitted ? (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                <p className="font-medium mb-1">
                  Waad ku mahadsan tahay diiwaan gelinta ganacsigaaga!
                </p>
                <p>
                  Waxaan kula soo xiriiri doonnaa macluumaad dheeraad ah oo ku
                  saabsan ku biirista Platformka iibsy sida ganacsade. Fiiri
                  fariinta telefoon lambarkaaga WhatsApp.
                </p>
              </div>
            ) : (
              <form onSubmit={handleVendorSubmit}>
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
                    Magaca Ganacsiga <span className="text-snap-red">*</span>
                  </label>
                  <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    value={vendorFormData.businessName}
                    onChange={handleVendorChange}
                    required
                    placeholder="Magaca ganacsigaaga"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-snap-red"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="contactName"
                    className="block text-snap-gray mb-2"
                  >
                    Qofka Xiriirka <span className="text-snap-red">*</span>
                  </label>
                  <input
                    type="text"
                    id="contactName"
                    name="contactName"
                    value={vendorFormData.contactName}
                    onChange={handleVendorChange}
                    required
                    placeholder="Magacaaga oo dhan"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-snap-red"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="phone" className="block text-snap-gray mb-2">
                    WhatsApp / Telefoon Lambar{" "}
                    <span className="text-snap-red">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={vendorFormData.phone}
                    onChange={handleVendorChange}
                    required
                    placeholder="+252 123 456 789"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-snap-red"
                  />
                  <p className="text-xs text-snap-gray mt-1">
                    Waxaan u isticmaali doonnaa dalabka ogeysiiska iyo su'aalaha
                    macaamiisha
                  </p>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="businessType"
                    className="block text-snap-gray mb-2"
                  >
                    Nooca Ganacsiga <span className="text-snap-red">*</span>
                  </label>
                  <select
                    id="businessType"
                    name="businessType"
                    value={vendorFormData.businessType}
                    onChange={handleVendorChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-snap-red"
                  >
                    <option value="">Dooro nooca ganacsiga</option>
                    <option value="electronics">
                      Dukaanka Qalabka/Teknolojiyada
                    </option>
                    <option value="computers">
                      Dukaanka Kombiyuutar/Laptop
                    </option>
                    <option value="mobile">Dukaanka Mobile/Smartphone</option>
                    <option value="audio">Qalabka Codka/Dhagaysiga</option>
                    <option value="accessories">
                      Qalabka Dheeraadka Teknolojiyada
                    </option>
                    <option value="repairs">Adeegyada Dayactirka</option>
                    <option value="other">Qalabka Kale</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="description"
                    className="block text-snap-gray mb-2"
                  >
                    Sharaxaada Ganacsiga
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={vendorFormData.description}
                    onChange={handleVendorChange}
                    rows="3"
                    placeholder="Noo sheeg wax ku saabsan ganacsigaaga iyo alaabta"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-snap-red"
                  ></textarea>
                </div>

                <div className="mb-6">
                  <label className="flex items-start cursor-pointer">
                    <input
                      type="checkbox"
                      name="termsAgreed"
                      checked={vendorFormData.termsAgreed}
                      onChange={handleVendorChange}
                      required
                      className="mt-1 mr-2"
                    />
                    <span className="text-sm text-snap-gray">
                      Waxaan oggolahay{" "}
                      <a href="/terms-of-service" className="text-snap-red">
                        Shuruudaha Adeegga
                      </a>{" "}
                      ee Platformka iibsy
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-snap-red hover:bg-snap-dark text-snap-light font-bold py-3 px-4 rounded-md transition duration-300 flex justify-center items-center"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <LoadingSpinner size="sm" color="white" />
                      <span className="ml-2">Waa la socodsiinayaa...</span>
                    </>
                  ) : (
                    "Soo gudbi Codsiga"
                  )}
                </button>
              </form>
            )}
          </div>
        )}

        {/* Features section that's visible regardless of tab */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-snap-dark">
            Astaamaha Platformka
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-snap-red bg-opacity-10 flex items-center justify-center rounded-lg mb-4">
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
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h4 className="text-lg font-semibold mb-2 text-snap-dark">
                Mobilka Koowaad
              </h4>
              <p className="text-snap-gray">
                Platformkeenna waxaa loo habeeyay qalabyada mobilka, taas oo ka
                dhigeysa wax iibsiga iyo iibinta mid fudud oo habboon.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-snap-red bg-opacity-10 flex items-center justify-center rounded-lg mb-4">
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
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                  />
                </svg>
              </div>
              <h4 className="text-lg font-semibold mb-2 text-snap-dark">
                Xiriir Toos ah
              </h4>
              <p className="text-snap-gray">
                Si toos ah ula xiriir ganacsatada ama macaamiisha iyada oo la
                adeegsanayo nidaamkeena farriinta ee WhatsApp.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-snap-red bg-opacity-10 flex items-center justify-center rounded-lg mb-4">
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
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h4 className="text-lg font-semibold mb-2 text-snap-dark">
                Macaamillada Ammaan ah
              </h4>
              <p className="text-snap-gray">
                Macaamillad kasta waxaa ilaaliya nidaamkeena lacag bixinta oo
                ammaan ah oo leh raad raac fudud iyo kormeerid.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
