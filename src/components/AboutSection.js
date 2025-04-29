// src/components/AboutSection.js
import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 px-4 bg-snap-lightgray">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-snap-dark">
          Ku Saabsan Platformka iibsy
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
              Dhakhso & Fududeyn
            </h3>
            <p className="text-snap-gray">
              Kula xiriir ganacsatada oo hel waxaad u baahan tahay dhowr
              ilbiriqsi gudahood adiga oo adeegsanaya app-keena moobilka.
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
              Bulshada Hoggaaminaysa
            </h3>
            <p className="text-snap-gray">
              Ku biir suuqa bulshada ee horumaraya ee isticmaalayaasha iyo
              ganacsatada deegaanka ee la isku haleyn karo.
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
              Ammaan & La isku Haleyn Karo
            </h3>
            <p className="text-snap-gray">
              Ganacsiga kasta iyo iskuxirnaanta platformkeena waa mid ammaan ah
              oo lagu taageeray dammaanadeenna.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-snap-light p-8 rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8 flex justify-center">
              <div className="bg-snap-red bg-opacity-10 p-8 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-32 w-32 text-snap-red"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4 text-snap-dark">
                Kor u Qaad Khibradaada Tiknoolajiyadda
              </h3>
              <p className="text-snap-gray mb-4">
                Platformkeenu wuxuu kugu xidhaa ganacsatada lagu kalsoonaan karo
                ee bixiya alaabta elektaroonigga iyo adeegyada ugu dambeeyay.
                Laga bilaabo telefoonada casriga ah ilaa laptopyada, qalabka
                maqalka ilaa qalabka guriga ee casriga ah, wax kasta oo
                teknoolajiyad ah ka hel hal meel.
              </p>
              <div className="flex items-center text-snap-red">
                <span>Wax badan ka baro alaabteenna</span>
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
