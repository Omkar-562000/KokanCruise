// File: src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Booking from "./Pages/Booking";
import Contact from "./Pages/Contact";
import Gallery from "./Pages/Gallery";
import TravelBlog from "./Pages/TravelBlog";
import Map from "./Pages/Map";
import Destinations from "./Pages/Destinations";
import "./App.css"; // For any component-specific or utility classes not directly in Tailwind classes

// Simple 404 Not Found Page Component
const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-160px)] text-center p-10 bg-gray-50">
      <h2 className="text-6xl font-extrabold text-blue-800 mb-4 animate-bounce-slow">404</h2>
      <p className="text-3xl text-gray-700 mb-6 font-semibold">Page Not Found</p>
      <p className="text-lg text-gray-600 mb-8">Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="bg-blue-900 text-white py-3 px-8 rounded-full text-lg font-semibold
                     hover:bg-blue-800 transition duration-300 shadow-md hover:shadow-lg">
        Go to Home
      </Link>
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen"> {/* Ensures footer sticks to bottom */}
        <Navbar />
        <main className="flex-grow"> {/* This will make the main content area fill available space */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/blog" element={<TravelBlog />} />
            <Route path="/map" element={<Map />} />
            <Route path="/destinations" element={<Destinations />} />
            {/* Fallback for unmatched routes */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;