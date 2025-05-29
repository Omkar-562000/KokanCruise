// File: src/pages/Map.jsx

const Map = () => {
  return (
    <section className="py-16 px-10 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-blue-800 mb-12">Find Our Location</h2>
        <p className="text-center text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
          Our main office is conveniently located to serve you. Visit us or use the map below to plan your trip.
        </p>
        <div className="relative w-full h-[500px] rounded-xl shadow-xl overflow-hidden border-2 border-blue-200">
          {/* Replace this iframe src with a valid Google Maps embed URL */}
          <iframe
            className="w-full h-full border-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15082.784400267746!2d72.82527265!3d19.075989949999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1716806505707!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="KokanCruise Office Location"
          ></iframe>
        </div>
        <div className="text-center mt-8 text-gray-700 text-base">
          <p className="font-semibold mb-2">KokanCruise Main Office</p>
          <p>123 Sea View Road, Coastal City</p>
          <p>Maharashtra, India - 400001</p>
          <p className="mt-4">Need directions? <Link to="/contact" className="text-blue-700 hover:text-blue-900 font-semibold transition duration-300">Contact Us</Link></p>
        </div>
      </div>
    </section>
  );
};

export default Map;