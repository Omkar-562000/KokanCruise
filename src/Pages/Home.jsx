import React from "react";
import { Link } from "react-router-dom"; // Import Link for CTA button

const Home = () => {
  return (
    <section className="relative bg-cover bg-center h-[calc(100vh-68px)] flex items-center justify-center text-white"
             style={{ backgroundImage: "url('/Images/Home.avif')" }}> {/* Using 01.jpg as the background image */}
      <div className="absolute inset-0 bg-white opacity-0"></div> {/* Dark overlay for readability */}
      <div className="container mx-auto text-auto relative z-10 p-4">
        <p className="text-2xl sm:text-2xl md:text-2xl font-extrabold leading-tight mb-6 animate-fade-in-up">
          Discover the Undiscovered Konkan Coast with KokanCruise
        </p>
        <p className="text-lg sm:text-xl md:text-2xl mb-10 opacity-90 animate-fade-in-up delay-200">
          Your journey into Maharashtra's coastal paradise begins here.
        </p>
        <Link
          to="/destinations"
          className="bg-green-700 hover:bg-green-600 text-white font-bold py-3 px-8 sm:py-4 sm:px-10 rounded-full text-lg sm:text-xl shadow-lg
                     transform hover:scale-105 transition duration-300 ease-in-out animate-fade-in-up delay-400"
        >
          Explore Destinations
        </Link>
      </div>
    </section>
  );
};

export default Home;