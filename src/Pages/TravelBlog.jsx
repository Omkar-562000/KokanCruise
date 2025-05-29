// File: src/pages/TravelBlog.jsx
import React from "react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "A Day in Alibaug: Beaches, Forts, and Coastal Charm",
    excerpt: "Discover the breathtaking beauty of Alibaug beaches, explore historic forts, and savor local delights. A perfect day trip from Mumbai that promises relaxation and adventure.",
    image: "/images/blog-alibaug.jpg",
    date: "May 20, 2025",
    author: "KokanCruise Team",
    link: "/blog/a-day-in-alibaug"
  },
  {
    id: 2,
    title: "Exploring the Mystical Caves of Elephanta Island",
    excerpt: "Dive into the ancient history and intricate sculptures of the UNESCO World Heritage site, Elephanta Caves. A fascinating journey through art and spirituality.",
    image: "/images/blog-elephanta.jpg",
    date: "April 15, 2025",
    author: "Guest Blogger",
    link: "/blog/exploring-elephanta"
  },
  {
    id: 3,
    title: "Culinary Journey Through Konkan: A Foodie's Guide",
    excerpt: "Savor the authentic flavors of Konkan's coastal cuisine. From fresh seafood curries to traditional sweets, this guide will tantalize your taste buds.",
    image: "/images/blog-food.jpg",
    date: "March 10, 2025",
    author: "Local Expert",
    link: "/blog/konkan-food-guide"
  },
  {
    id: 4,
    title: "Hidden Gems of Ratnagiri: Beyond the Beaches",
    excerpt: "Explore the lesser-known treasures of Ratnagiri, from historical landmarks to serene viewpoints and vibrant local markets.",
    image: "/images/ratnagiri.jpg", // Reusing image, ideally unique
    date: "February 28, 2025",
    author: "Travel Enthusiast",
    link: "/blog/hidden-gems-ratnagiri"
  },
];

const TravelBlog = () => {
  return (
    <section className="py-16 px-10 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-blue-800 mb-12">Our Travel Blog & Stories</h2>
        <p className="text-center text-lg sm:text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
          Read our latest articles, travel tips, and captivating stories about the mesmerizing Konkan region and our unique cruise experiences.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={post.id}
              className="bg-white rounded-xl shadow-xl overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out group animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }} // Staggered animation
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover object-center group-hover:brightness-90 transition duration-300"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-blue-800 mb-2 group-hover:text-blue-700 transition duration-300 leading-snug">{post.title}</h3>
                <p className="text-gray-600 text-sm mb-3">By <span className="font-semibold">{post.author}</span> on {post.date}</p>
                <p className="text-gray-700 text-base mb-4 line-clamp-3">{post.excerpt}</p> {/* Use line-clamp for consistent excerpt length */}
                <Link
                  to={post.link}
                  className="inline-block bg-blue-900 text-white py-2 px-5 rounded-lg text-sm font-semibold
                             hover:bg-blue-800 transition duration-300 ease-in-out"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelBlog;