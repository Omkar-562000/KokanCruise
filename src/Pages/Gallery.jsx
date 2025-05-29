// File: src/pages/Gallery.jsx
import React from "react";

const Gallery = () => {
  const images = [
    { src: "/Images/201.jpg", alt: "Stunning view of a Konkan beach at sunset" },
    { src: "/Images/202.avif", alt: "Traditional Konkan fishing boat on calm waters" },
    { src: "/Images/203.jpg", alt: "Historic fort ruins overlooking the Arabian Sea" },
    { src: "/Images/204.jpeg", alt: "Lush green scenery and palm trees of Konkan" },
    { src: "/Images/205.jpg", alt: "Golden hour over the pristine Konkan coastline" },
    { src: "/Images/206.webp", alt: "Delicious Konkan seafood thali ready to be served" },
    { src: "/Images/207.webp", alt: "Local village life along the Konkan coast" },
    { src: "/Images/208.jpg", alt: "Clear blue waters perfect for swimming" },
    { src: "/Images/209.jpg", alt: "Ancient temple architecture in Konkan" },
    { src: "/Images/210.jpg", alt: "Serene backwaters and mangroves" },
    { src: "/Images/211.jpg", alt: "Group enjoying a cruise with scenic views" },
    { src: "/Images/212.jpg", alt: "Birds flying over the Konkan landscape" },
  ];

  return (
    <section className="py-16 px-10 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-blue-800 mb-12">Our Beautiful Gallery</h2>
        <p className="text-center text-lg sm:text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
          Immerse yourself in the captivating beauty of the Konkan region through our stunning collection of photographs.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }} // Staggered animation
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-56 object-cover object-center group-hover:brightness-90 transition duration-300"
                loading="lazy" // Add lazy loading for images
              />
              <div className="p-4">
                <p className="text-gray-700 text-sm font-medium leading-snug">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;