// File: src/pages/Destinations.jsx
import { Link } from "react-router-dom";

const destinations = [
  {
    name: "Alibaug",
    description: "Known for its beautiful beaches like Alibaug Beach, Mandwa Beach, and Kihim Beach, and the historic Kolaba Fort.",
    image: "/Images/101.jpg",
    details: "Alibaug offers a perfect blend of relaxation and adventure, ideal for a weekend getaway. Enjoy watersports, explore ancient forts, and indulge in fresh seafood.",
    link: "https://en.wikipedia.org/wiki/Alibaug" 
  },
  {
    name: "Ganpatipule",
    description: "Famous for its pristine beach and the Swayambhu Ganesh Temple, a unique natural idol of Lord Ganesha nestled by the sea.",
    image: "/Images/102.jpg",
    details: "A spiritual and scenic retreat, Ganpatipule is perfect for those seeking tranquility. The temple and the clean beach make it a popular pilgrimage and tourist spot.",
    link: "https://en.wikipedia.org/wiki/Ganpatipule" 
  },
  {
    name: "Ratnagiri",
    description: "A historic port city with scenic beaches, including Mandvi Beach and Bhatye Beach, and the majestic Ratnadurg Fort.",
    image: "/Images/103.jpg",
    details: "Rich in history and natural beauty, Ratnagiri is known for its Alphonso mangoes, historical sites, and tranquil beaches. Explore the birthplace of Lokmanya Tilak.",
    link: "https://en.wikipedia.org/wiki/Ratnagiri"
  },
  {
    name: "Sindhudurg",
    description: "Home to the formidable Sindhudurg Fort, built by Chhatrapati Shivaji Maharaj, and serene Tarkarli Beach, famous for its clear waters and watersports.",
    image: "/Images/104.jpg",
    details: "Experience adventure and history in Sindhudurg. The majestic fort offers a glimpse into Maratha history, while Tarkarli provides opportunities for snorkeling and scuba diving.",
    link: "https://en.wikipedia.org/wiki/Sindhudurg"
  },
  {
    name: "Murud-Janjira",
    description: "Explore the impenetrable Janjira Fort, an island fortress accessible by boat, and the beautiful Murud beach.",
    image: "/Images/105.jpg",
    details: "A historical marvel, Janjira Fort stands unconquered in the Arabian Sea. The nearby Murud beach offers a peaceful escape with panoramic views.",
    link: "https://en.wikipedia.org/wiki/Murud-Janjira"
  },
  {
    name: "Kashid Beach",
    description: "A popular white sand beach known for its clear blue waters, lush green surroundings, and water sports activities.",
    image: "/Images/106.jpg",
    details: "Kashid Beach is an ideal spot for beach lovers seeking thrill and relaxation. Enjoy parasailing, jet-skiing, or simply soak up the sun.",
    link: "https://en.wikipedia.org/wiki/Kashid_Beach"
  },
];

const Destinations = () => {
  return (
    // 1. Outer wrapper for the background image
    <section className="relative min-h-screen py-16 px-10 overflow-hidden">
      {/* 2. Background Image Element */}
      <div
        className="absolute inset-0 bg-cover bg-fitter bg-no-repeat z-0"
        style={{ backgroundImage: "url('/Images/destination.jpg')" }} // <--- CHANGE THIS IMAGE PATH
      >
        {/* Optional: Add an overlay to make text more readable */}
        <div className="absolute inset-0 bg-black opacity-0"></div> {/* Adjust opacity as needed */}
      </div>

      {/* 3. Main content, relative and higher z-index to appear on top */}
      <div className="container mx-auto relative z-10 text-white"> {/* Text color set to white for contrast */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-12">
          Popular Destinations
        </h2>
        <p className="text-center text-lg sm:text-xl mb-12 max-w-3xl mx-auto">
          Embark on an unforgettable journey through the breathtaking coastal gems of Konkan. Each destination offers a unique blend of history, culture, and natural beauty, promising a memorable experience.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {destinations.map((destination, index) => (
            <div
              key={index}
              // Card background is now translucent to show image, or solid dark for contrast
              className="bg-blue-950 bg-opacity-70 rounded-xl shadow-xl overflow-hidden
                         transform hover:scale-105 transition duration-300 ease-in-out group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }} // Staggered animation
            >
              <img
                src={destination.image}
                alt={destination.name}
                className="w-full h-56 object-cover object-center group-hover:brightness-90 transition duration-300"
                loading="lazy"
              />
              <div className="p-6">
                {/* Changed text colors to white or lighter blue for contrast against dark card background */}
                <h3 className="text-2xl font-bold text-blue-200 mb-3 group-hover:text-blue-100 transition duration-300">{destination.name}</h3>
                <p className="text-blue-50 mb-4 text-base line-clamp-3">{destination.description}</p>
                <Link
                  to={destination.link}
                  className="inline-block bg-blue-700 text-white py-2 px-5 rounded-lg text-sm font-semibold
                             hover:bg-blue-600 transition duration-300 ease-in-out"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;