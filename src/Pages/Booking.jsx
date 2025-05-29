// File: src/pages/Booking.jsx
import { useState } from "react";

const Booking = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [submissionStatus, setSubmissionStatus] = useState(null); // 'success', 'error', or null

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmissionStatus(null); // Reset status on new submission
    // Basic validation
    if (!name.trim() || !email.trim() || !date.trim()) {
      setSubmissionStatus('error');
      // For more robust validation, you'd check email format, date validity etc.
      return;
    }
    // In a real app, you'd send this data to a backend server (e.g., using fetch or Axios)
    console.log("Booking data:", { name, email, date });

    // Simulate API call
    setTimeout(() => {
      setSubmissionStatus('success');
      alert("Booking request sent! We'll contact you soon.");
      // Clear form
      setName("");
      setEmail("");
      setDate("");
    }, 1000); // Simulate network delay
  };

  return (
    <section className="p-10 bg-blue-50 min-h-[calc(100vh-160px)] flex items-center justify-center"> {/* Added min-h and flex for centering */}
      <div className="bg-white p-8 sm:p-10 rounded-lg shadow-xl max-w-md w-full animate-fade-in">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-blue-800 mb-8">Book Your Dream Cruise</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 text-sm font-semibold mb-2">Full Name</label>
            <input
              type="text"
              id="name"
              placeholder="Your Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              aria-label="Full Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="your@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-label="Email Address"
            />
          </div>
          <div>
            <label htmlFor="date" className="block text-gray-700 text-sm font-semibold mb-2">Preferred Cruise Date</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
              aria-label="Preferred Cruise Date"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-900 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 ease-in-out"
          >
            Book Now
          </button>
          {submissionStatus === 'success' && (
            <p className="text-green-600 text-center font-medium mt-4">Thank you for your booking! We'll be in touch.</p>
          )}
          {submissionStatus === 'error' && (
            <p className="text-red-600 text-center font-medium mt-4">Please fill in all fields correctly.</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Booking;