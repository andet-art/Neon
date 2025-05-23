import React from "react";

const Home = () => {
  return (
    <div className="max-w-5xl mx-auto p-8">
      <h1 className="text-5xl font-extrabold text-purple-700 mb-6 text-center">
        Welcome to Our Website!
      </h1>
      <p className="text-lg text-gray-700 leading-relaxed mb-4">
        Discover a world of amazing products and services designed to help you
        live better and smarter. Explore our categories, shop the latest items,
        and enjoy a seamless experience tailored just for you.
      </p>
      <p className="text-lg text-gray-700 leading-relaxed mb-8">
        Whether you're looking for electronics, fashion, home goods, or
        something special, we have everything you need all in one place.
      </p>
      <div className="text-center">
        <button className="bg-purple-600 text-white px-6 py-3 rounded hover:bg-purple-700 transition font-semibold">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;
