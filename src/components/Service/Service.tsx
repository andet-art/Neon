import React from "react";

const services = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Building responsive and modern websites tailored to your business needs.",
  },
  {
    id: 2,
    title: "Mobile App Development",
    description:
      "Creating user-friendly mobile applications for both Android and iOS platforms.",
  },
  {
    id: 3,
    title: "UI/UX Design",
    description:
      "Designing intuitive interfaces and engaging user experiences for your products.",
  },
  {
    id: 4,
    title: "Cloud Solutions",
    description:
      "Offering scalable and secure cloud infrastructure to boost your operations.",
  },
];

const Service = () => {
  return (
    <div className="max-w-5xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-purple-700 mb-8 text-center">Our Services</h1>
      <div className="grid gap-8 sm:grid-cols-2">
        {services.map(({ id, title, description }) => (
          <div
            key={id}
            className="p-6 border border-purple-300 rounded-lg shadow-sm hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-semibold text-purple-800 mb-2">{title}</h2>
            <p className="text-gray-700">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
