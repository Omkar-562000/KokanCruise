// File: src/components/Navbar.jsx
import { useState } from "react";
import { Link, NavLink } from "react-router-dom"; // Use NavLink for active link styling

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu visibility

  // Function to close the mobile menu on link click
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-green-700 text-white p-4 shadow-lg sticky top-0 z-50"> {/* Added sticky, top-0, z-50 for fixed navbar */}
      <div className="container mx-auto flex justify-between items-center relative"> {/* Added relative for mobile menu positioning */}
        {/* Brand/Logo */}
        <Link to="/" className="text-3xl font-extrabold tracking-wide hover:text-yellow-300 transition duration-300 ease-in-out">
          KokanCruise
        </Link>

        {/* Mobile menu button (Hamburger icon) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white focus:outline-none focus:ring-2 focus:ring-yellow-300 rounded-md p-2"
          aria-label="Toggle navigation"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
          </svg>
        </button>

        {/* Desktop navigation links */}
        <ul className="hidden lg:flex gap-8 text-lg font-medium"> {/* Increased gap and font size */}
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `hover:text-green-300 transition duration-300 ease-in-out ${isActive ? "text-yellow-200 font-semibold border-b-2 border-blue-300 pb-1" : ""}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `hover:text-green-300 transition duration-300 ease-in-out ${isActive ? "text-yellow-200 font-semibold border-b-2 border-blue-300 pb-1" : ""}`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/destinations"
              className={({ isActive }) =>
                `hover:text-green-300 transition duration-300 ease-in-out ${isActive ? "text-yellow-200 font-semibold border-b-2 border-blue-300 pb-1" : ""}`
              }
            >
              Destinations
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/booking"
              className={({ isActive }) =>
                `hover:text-green-300 transition duration-300 ease-in-out ${isActive ? "text-yellow-200 font-semibold border-b-2 border-blue-300 pb-1" : ""}`
              }
            >
              Booking
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                `hover:text-green-300 transition duration-300 ease-in-out ${isActive ? "text-yellow-200 font-semibold border-b-2 border-blue-300 pb-1" : ""}`
              }
            >
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `hover:text-green-300 transition duration-300 ease-in-out ${isActive ? "text-yellow-200 font-semibold border-b-2 border-blue-300 pb-1" : ""}`
              }
            >
              Travel Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `hover:text-green-300 transition duration-300 ease-in-out ${isActive ? "text-yellow-200 font-semibold border-b-2 border-blue-300 pb-1" : ""}`
              }
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/map"
              className={({ isActive }) =>
                `hover:text-green-300 transition duration-300 ease-in-out ${isActive ? "text-yellow-200 font-semibold border-b-2 border-blue-300 pb-1" : ""}`
              }
            >
              Map
            </NavLink>
          </li>
        </ul>

        {/* Mobile menu dropdown */}
        <div
          className={`lg:hidden absolute top-full left-0 w-full bg-green-800 transition-all duration-300 ease-in-out origin-top ${
            isOpen ? "scale-y-100 opacity-100 shadow-xl" : "scale-y-0 opacity-0 overflow-hidden"
          }`}
        >
          <ul className="flex flex-col items-center py-4 gap-3 text-lg font-medium">
            <li><NavLink onClick={closeMenu} to="/" className={({ isActive }) => `block py-2 ${isActive ? "text-blue-300 font-semibold" : "hover:text-blue-200 transition duration-300"}`}>Home</NavLink></li>
            <li><NavLink onClick={closeMenu} to="/about" className={({ isActive }) => `block py-2 ${isActive ? "text-blue-300 font-semibold" : "hover:text-blue-200 transition duration-300"}`}>About</NavLink></li>
            <li><NavLink onClick={closeMenu} to="/destinations" className={({ isActive }) => `block py-2 ${isActive ? "text-blue-300 font-semibold" : "hover:text-blue-200 transition duration-300"}`}>Destinations</NavLink></li>
            <li><NavLink onClick={closeMenu} to="/booking" className={({ isActive }) => `block py-2 ${isActive ? "text-blue-300 font-semibold" : "hover:text-blue-200 transition duration-300"}`}>Booking</NavLink></li>
            <li><NavLink onClick={closeMenu} to="/gallery" className={({ isActive }) => `block py-2 ${isActive ? "text-blue-300 font-semibold" : "hover:text-blue-200 transition duration-300"}`}>Gallery</NavLink></li>
            <li><NavLink onClick={closeMenu} to="/blog" className={({ isActive }) => `block py-2 ${isActive ? "text-blue-300 font-semibold" : "hover:text-blue-200 transition duration-300"}`}>Travel Blog</NavLink></li>
            <li><NavLink onClick={closeMenu} to="/contact" className={({ isActive }) => `block py-2 ${isActive ? "text-blue-300 font-semibold" : "hover:text-blue-200 transition duration-300"}`}>Contact</NavLink></li>
            <li><NavLink onClick={closeMenu} to="/map" className={({ isActive }) => `block py-2 ${isActive ? "text-blue-300 font-semibold" : "hover:text-blue-200 transition duration-300"}`}>Map</NavLink></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;