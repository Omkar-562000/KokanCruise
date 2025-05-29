// File: src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom"; // Import Link for internal navigation

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white py-10 px-4 shadow-inner"> {/* Darker blue, added shadow-inner */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 text-center md:text-left">
        {/* Company Info */}
        <div className="space-y-4">
          <h3 className="text-2xl font-extrabold text-blue-200 mb-3">KokanCruise</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Discover the untouched beauty and rich cultural heritage of Maharashtra's Konkan coastline with our expertly guided tours and unforgettable cruise experiences.
          </p>
          <div className="flex justify-center md:justify-start space-x-5 mt-4">
            {/* Social Media Icons (Font Awesome classes assumed) */}
            <a href="#" aria-label="Facebook" className="text-gray-300 hover:text-blue-400 transform hover:scale-110 transition duration-300">
              <i className="fab fa-facebook-f text-xl"></i>
            </a>
            <a href="#" aria-label="Instagram" className="text-gray-300 hover:text-blue-400 transform hover:scale-110 transition duration-300">
              <i className="fab fa-instagram text-xl"></i>
            </a>
            <a href="#" aria-label="Twitter" className="text-gray-300 hover:text-blue-400 transform hover:scale-110 transition duration-300">
              <i className="fab fa-twitter text-xl"></i>
            </a>
            <a href="#" aria-label="LinkedIn" className="text-gray-300 hover:text-blue-400 transform hover:scale-110 transition duration-300">
              <i className="fab fa-linkedin-in text-xl"></i>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold text-blue-200 mb-3">Quick Links</h3>
          <ul className="space-y-3 text-base">
            <li><Link to="/" className="text-gray-300 hover:text-blue-400 transition duration-300">Home</Link></li>
            <li><Link to="/about" className="text-gray-300 hover:text-blue-400 transition duration-300">About Us</Link></li>
            <li><Link to="/destinations" className="text-gray-300 hover:text-blue-400 transition duration-300">Destinations</Link></li>
            <li><Link to="/booking" className="text-gray-300 hover:text-blue-400 transition duration-300">Booking</Link></li>
            <li><Link to="/gallery" className="text-gray-300 hover:text-blue-400 transition duration-300">Gallery</Link></li>
            <li><Link to="/blog" className="text-gray-300 hover:text-blue-400 transition duration-300">Travel Blog</Link></li>
            <li><Link to="/contact" className="text-gray-300 hover:text-blue-400 transition duration-300">Contact</Link></li>
            <li><Link to="/map" className="text-gray-300 hover:text-blue-400 transition duration-300">Our Location</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold text-blue-200 mb-3">Get in Touch</h3>
          <ul className="space-y-3 text-base text-gray-300">
            <li><i className="fas fa-map-marker-alt mr-3 text-blue-400"></i> KokanCruise HQ, Mumbai, MH, India</li>
            <li><a href="tel:+919876543210" className="hover:text-blue-400 transition duration-300"><i className="fas fa-phone-alt mr-3 text-blue-400"></i> +91 98765 43210</a></li>
            <li><a href="mailto:info@kokancruise.com" className="hover:text-blue-400 transition duration-300"><i className="fas fa-envelope mr-3 text-blue-400"></i> info@kokancruise.com</a></li>
            <li><i className="fas fa-clock mr-3 text-blue-400"></i> Mon - Sat: 9:00 AM - 6:00 PM</li>
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div className="col-span-1 md:col-span-3 lg:col-span-1"> {/* Adjust span if needed */}
          <h3 className="text-xl font-bold text-blue-200 mb-3">Newsletter</h3>
          <p className="text-gray-300 text-sm mb-4">Subscribe to our newsletter for exclusive offers and travel updates!</p>
          <form className="flex">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full p-2 rounded-l-md bg-blue-800 border border-blue-700 text-white placeholder-blue-300 focus:outline-none focus:ring-1 focus:ring-blue-400"
              aria-label="Email for newsletter"
            />
            <button
              type="submit"
              className="bg-blue-700 hover:bg-blue-600 text-white px-5 rounded-r-md transition duration-300"
              aria-label="Subscribe to newsletter"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-blue-800 mt-10 pt-6 text-center text-gray-400 text-sm">
        <p>© {new Date().getFullYear()} KokanCruise. All rights reserved.</p> {/* Dynamic year */}
        <p className="mt-2 text-gray-500">Crafted with passion in the heart of Konkan.</p>
      </div>
    </footer>
  );
};

export default Footer;