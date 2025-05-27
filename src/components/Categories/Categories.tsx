import React from 'react';
import './Categories.css';
import Footer from '../Footer/Footer';

const categories = [
  {
    id: 1,
    name: 'Category 1',
    description: 'Description for category 1',
    imageUrl: '/assets/images/slide1.webp',
  },
  {
    id: 2,
    name: 'Category 2',
    description: 'Description for category 2',
    imageUrl: '/assets/images/slide2.jpg',
  },
  {
    id: 3,
    name: 'Category 3',
    description: 'Description for category 3',
    imageUrl: '/assets/images/slide3.png',
  },
];

const Categories: React.FC = () => {
  return (
    <div className="categories-container">
      <h1 className="categories-title">Categories</h1>
      <div className="categories-list">
        {categories.map((category) => (
          <div key={category.id} className="category-card">
            <div className="category-image-wrapper">
              <img
                src={category.imageUrl}
                alt={category.name}
                className="category-image"
              />
            </div>
            <div className="category-info">
              <h2 className="category-name">{category.name}</h2>
              <p className="category-description">{category.description}</p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Categories;
