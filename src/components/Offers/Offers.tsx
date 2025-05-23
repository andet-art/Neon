import React from "react";

const offers = [
  {
    id: 1,
    title: "Spring Sale - 20% Off",
    description: "Get 20% off on all spring collection items. Limited time only!",
    validTill: "2025-06-30",
  },
  {
    id: 2,
    title: "Buy One Get One Free",
    description: "Special BOGO offer on selected electronics.",
    validTill: "2025-07-15",
  },
  {
    id: 3,
    title: "Free Shipping",
    description: "Enjoy free shipping on orders over $50.",
    validTill: "2025-12-31",
  },
];

const Offers = () => {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-purple-700 mb-8 text-center">Special Offers</h1>
      <ul className="space-y-6">
        {offers.map(({ id, title, description, validTill }) => (
          <li
            key={id}
            className="border border-purple-300 rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-semibold text-purple-800 mb-2">{title}</h2>
            <p className="text-gray-700 mb-2">{description}</p>
            <p className="text-sm text-gray-500">Valid till: {new Date(validTill).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Offers;
