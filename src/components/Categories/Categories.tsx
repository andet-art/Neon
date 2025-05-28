import React from 'react';
import './Categories.css';
import Footer from '../Footer/Footer';
import { FaRocket, FaCogs, FaLightbulb } from 'react-icons/fa';

const categories = [
  {
    id: 1,
    name: 'Innovation',
    description: 'Explore the latest in groundbreaking technologies and forward-thinking ideas.',
    imageUrl: '../public/inovation.jpg',
    icon: <FaLightbulb />,
    extraInfo: 'Dive deeper into how innovation shapes our future through AI, robotics, and more.',
  },
  {
    id: 2,
    name: 'Engineering',
    description: 'Discover the power of building and creating with precision and design.',
    imageUrl: '../public/inovation.jpg',
    icon: <FaCogs />,
    extraInfo: 'Explore engineering marvels from structural design to mechanical systems.',
  },
  {
    id: 3,
    name: 'Technology',
    description: 'Stay updated with the latest trends in software, hardware, and digital tools.',
    imageUrl: '../public/inovation.jpg',
    icon: <FaRocket />,
    extraInfo: 'Technology fuels our progress—see how it transforms industries and lives.',
  },
];

const Categories: React.FC = () => {
  return (
    <div className="categories-container">
      <h1 className="categories-title">Explore Our Categories</h1>
      <p className="categories-subtitle">
        Each category offers insights into a world of possibilities.
      </p>
      <div className="categories-grid">
        {categories.map((category) => (
          <div key={category.id} className="category-card">
            <div className="category-image-wrapper">
              <img
                src={category.imageUrl}
                alt={category.name}
                className="category-image"
              />
            </div>
            <div className="category-card-content">
              <div className="category-icon">{category.icon}</div>
              <h2 className="category-name">{category.name}</h2>
              <p className="category-description">{category.description}</p>
            </div>
            <div className="category-extra-info">
              <p>{category.extraInfo}</p>
              <button>Learn More</button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Categories;