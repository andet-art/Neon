import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const images = [
  '/assets/slider1.jpg',
  '/assets/slider2.jpg',
  '/assets/slider3.jpg',
];

const features = [
  {
    title: 'Real-Time Analytics',
    description: 'Monitor live data with intuitive charts and dashboards.',
    img: '/assets/analytics.jpg',
  },
  {
    title: 'Smart Integrations',
    description: 'Seamless API integrations with your existing tools.',
    img: '/assets/integration.jpg',
  },
  {
    title: '24/7 Support',
    description: 'Our team is always ready to assist you.',
    img: '/assets/support.jpg',
  },
];

const Home: React.FC = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 700,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <main className="home-container min-h-screen bg-[#fbfcff] text-[#1a1a2e] font-sans">
      {/* === Image Slider === */}
      <Slider {...sliderSettings}>
        {images.map((src, index) => (
          <div key={index}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-[60vh] object-cover rounded-b-2xl shadow-lg"
              loading="lazy"
            />
          </div>
        ))}
      </Slider>

      {/* === Navigation Buttons === */}
      <nav
        className="nav-buttons flex flex-wrap justify-center gap-4 my-10 px-6"
        aria-label="Primary navigation"
      >
        {['about', 'categories', 'service', 'contact', 'shop', 'neotel'].map((page) => (
          <Link to={`/dashboard/${page}`} key={page}>
            <button
              aria-label={`Go to ${page} page`}
              className="bg-[#1a1a2e] text-[#e0e0f8] px-6 py-3 rounded-xl font-bold text-lg shadow-md hover:bg-[#8a88f8] hover:text-white transition-all"
            >
              {page.charAt(0).toUpperCase() + page.slice(1)}
            </button>
          </Link>
        ))}
      </nav>

      {/* === Features Section === */}
      <section
        className="features-grid max-w-6xl mx-auto px-4 grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        aria-label="Features"
      >
        {features.map((feature, idx) => (
          <motion.article
            key={idx}
            className="feature-card bg-[#f4f5ff] p-6 rounded-xl shadow-xl hover:shadow-2xl transition duration-300 text-center"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={feature.img}
              alt={feature.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
              loading="lazy"
            />
            <h3 className="feature-title text-2xl font-bold mb-2 text-[#4a4a6a]">
              {feature.title}
            </h3>
            <p className="text-lg text-[#616166] font-medium">{feature.description}</p>
          </motion.article>
        ))}
      </section>

      {/* === Footer CTA === */}
      <footer className="cta-footer text-center my-20 px-6" aria-label="Call to action">
        <h2 className="text-3xl font-extrabold mb-4 text-[#4a4a6a]">Ready to explore more?</h2>
        <Link to="/dashboard/shop">
          <button className="bg-[#8a88f8] text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-[#6f6df3] transition-all">
            Visit the Shop
          </button>
        </Link>
      </footer>
    </main>
  );
};

export default Home;
