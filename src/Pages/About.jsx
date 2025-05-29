// File: src/pages/About.jsx
import React from "react";

const About = () => {
  return (
    <section className="py-16 px-10 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-relative">
        <div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-blue-800 mb-8 leading-tight">About KokanCruise : Your Gateway to Coastal Wonders</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            At KokanCruise, we are passionate about showcasing the untouched beauty and rich cultural heritage of Maharashtra's Konkan coastline. Founded in {new Date().getFullYear() - 1}, our mission is to offer unparalleled cruise and guided tour experiences that blend adventure, relaxation, and authentic local encounters.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            From the historic forts of Sindhudurg to the serene beaches of Ganpatipule, we craft journeys that leave lasting memories. Our expert guides, comfortable vessels, and commitment to sustainable tourism ensure an unforgettable and responsible travel experience for every guest.
          </p>
          <ul className="list-disc list-inside text-gray-600 mt-6 space-y-3 text-base">
            <li><span className="font-semibold text-blue-700">Experienced Local Guides:</span> Deep insights into Konkan's history and culture.</li>
            <li><span className="font-semibold text-blue-700">Comfortable & Safe Vessels:</span> Modern amenities for a smooth journey.</li>
            <li><span className="font-semibold text-blue-700">Cultural Immersion:</span> Engage with local traditions and savor authentic cuisine.</li>
            <li><span className="font-semibold text-blue-700">Sustainable Tourism:</span> Committed to preserving Konkan's natural beauty.</li>
          </ul>
        </div>
        <div className="flex justify-center lg:justify-end">
          <img
            src="/Images/Home.avif" // Add an image relevant to Konkan or cruising
            alt="Scenic Konkan Coastline"
            className="rounded-xl shadow-2xl w-full max-w-lg object-cover h-auto transition-transform duration-500 ease-in-out hover:scale-102"
          />
        </div>
      </div>
    </section>
  );
};

export default About;