// src/pages/Categories.tsx
import React from "react";

type Category = {
  name: string;
  description: string;
};

const categories: Category[] = [
  { name: "Electronics", description: "Phones, laptops, gadgets & more." },
  { name: "Clothing", description: "Fashionable wear for all seasons." },
  { name: "Home & Kitchen", description: "Essentials for your living space." },
  { name: "Books", description: "Explore fiction, non-fiction, and more." },
  { name: "Sports", description: "Gear and equipment for every sport." },
  { name: "Toys", description: "Fun and learning for all ages." },
];

const Categories: React.FC = () => {
  return (
    <div className="p-8 ml-56">
      <h1 className="text-3xl font-bold mb-6">Categories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="bg-white border rounded-2xl shadow p-5 hover:shadow-lg transition duration-300"
          >
            <div className="text-2xl font-semibold mb-2">{cat.name}</div>
            <p className="text-gray-600">{cat.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
