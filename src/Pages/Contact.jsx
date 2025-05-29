// File: src/pages/Contact.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom"; // Assuming you might link to map page

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmissionStatus(null);
    if (!name.trim() || !email.trim() || !message.trim()) {
      setSubmissionStatus('error');
      return;
    }
    console.log("Contact data:", { name, email, message });

    // Simulate API call
    setTimeout(() => {
      setSubmissionStatus('success');
      alert("Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
    }, 1000);
  };

  return (
    <section className="py-16 px-10 bg-gradient-to-tr from-gray-50 to-white">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Contact Form */}
        <div className="bg-white p-8 sm:p-10 rounded-lg shadow-xl w-full animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-blue-800 mb-8">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="contactName" className="block text-gray-700 text-sm font-semibold mb-2">Your Name</label>
              <input
                type="text"
                id="contactName"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                aria-label="Your Name"
              />
            </div>
            <div>
              <label htmlFor="contactEmail" className="block text-gray-700 text-sm font-semibold mb-2">Your Email</label>
              <input
                type="email"
                id="contactEmail"
                placeholder="john.doe@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-label="Your Email"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 text-sm font-semibold mb-2">Your Message</label>
              <textarea
                id="message"
                placeholder="Type your message here..."
                rows="6"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="resize-y"
                aria-label="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-900 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 ease-in-out"
            >
              Send Message
            </button>
            {submissionStatus === 'success' && (
              <p className="text-green-600 text-center font-medium mt-4">Your message has been sent successfully!</p>
            )}
            {submissionStatus === 'error' && (
              <p className="text-red-600 text-center font-medium mt-4">Please ensure all fields are filled correctly.</p>
            )}
          </form>
        </div>

        {/* Contact Information & Map Link */}
        <div className="bg-white p-8 sm:p-10 rounded-lg shadow-xl w-full animate-fade-in-up delay-200">
          <h3 className="text-3xl font-extrabold text-blue-800 mb-6">Reach Out to Us</h3>
          <div className="space-y-6 text-gray-700 text-lg">
            <p className="flex items-center">
              <i className="fas fa-map-marker-alt text-blue-700 text-2xl mr-4"></i>
              KokanCruise Main Office, <br/> 123 Sea View Road, Coastal City, <br/> Maharashtra, India - 400001
            </p>
            <p className="flex items-center">
              <i className="fas fa-phone-alt text-blue-700 text-2xl mr-4"></i>
              <a href="tel:+919876543210" className="hover:text-blue-900 transition duration-300">+91 98765 43210</a>
            </p>
            <p className="flex items-center">
              <i className="fas fa-envelope text-blue-700 text-2xl mr-4"></i>
              <a href="mailto:info@kokancruise.com" className="hover:text-blue-900 transition duration-300">info@kokancruise.com</a>
            </p>
            <p className="flex items-center">
              <i className="fas fa-clock text-blue-700 text-2xl mr-4"></i>
              Mon - Sat: 9:00 AM - 6:00 PM (IST)
            </p>
          </div>
          <div className="mt-8 text-center lg:text-left">
            <Link
              to="/map"
              className="inline-block bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg
                         hover:bg-blue-600 transition duration-300 shadow-md hover:shadow-lg"
            >
              View on Map <i className="fas fa-arrow-right ml-2"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;