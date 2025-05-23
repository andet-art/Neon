import React from "react";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 99.99,
    description: "High-quality wireless headphones with noise cancellation.",
    image: "/p1.jpg",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 149.99,
    description: "Track your fitness and notifications with this sleek smart watch.",
    image: "/p2.jpg",
  },
  {
    id: 3,
    name: "Gaming Keyboard",
    price: 79.99,
    description: "Mechanical keyboard with RGB backlighting and programmable keys.",
    image: "/p3.jpg",
  },
];

const Shop = () => {
  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-purple-700 mb-8 text-center">Shop Products</h1>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {products.map(({ id, name, price, description, image }) => (
          <div
            key={id}
            className="border border-purple-300 rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow"
          >
            <img src={image} alt={name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-purple-800 mb-2">{name}</h2>
              <p className="text-gray-700 mb-3">{description}</p>
              <p className="text-lg font-bold text-purple-700">${price.toFixed(2)}</p>
              <button className="mt-4 w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition font-semibold">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
