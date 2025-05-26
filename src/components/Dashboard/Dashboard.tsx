import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import { images } from '../../assets/images';

const Dashboard: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    { src: images.slides.slide1, alt: 'Slide 1' },
    { src: images.slides.slide2, alt: 'Slide 2' },
    { src: images.slides.slide3, alt: 'Slide 3' }
  ];

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    console.log('Image failed to load:', e.currentTarget.src);
    e.currentTarget.src = '/vite.svg'; // Fallback to vite logo if image fails to load
  };

  const handlePrevClick = () => {
    setCurrentIndex(prev => 
      prev > 0 ? prev - 1 : slides.length - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex(prev => 
      prev < slides.length - 1 ? prev + 1 : 0
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextClick();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="slider-container">
        <div className="slider-wrapper">
          <div 
            className="slider"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="slide">
                <img 
                  src={slide.src} 
                  alt={slide.alt} 
                  onError={handleImageError}
                  onLoad={() => console.log('Image loaded:', slide.src)}
                />
              </div>
            ))}
          </div>
        </div>
        <button 
          className="slider-btn prev-btn" 
          onClick={handlePrevClick}
          aria-label="Previous slide"
        >
          {'<'}
        </button>
        <button 
          className="slider-btn next-btn" 
          onClick={handleNextClick}
          aria-label="Next slide"
        >
          {'>'}
        </button>
      </div>

      <section className="hero">
        Portfolio
      </section>

      <section className="portfolio-images">
        {slides.map((slide, index) => (
          <img 
            key={`portfolio-${index}`}
            src={slide.src} 
            alt={`Project ${index + 1}`}
            onError={handleImageError}
            onLoad={() => console.log('Portfolio image loaded:', slide.src)}
          />
        ))}
      </section>
    </div>
  );
};

export default Dashboard;
