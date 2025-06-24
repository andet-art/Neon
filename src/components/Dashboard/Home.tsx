import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './home.css'; // updated
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow right" onClick={onClick}>
      <FaArrowRight />
    </div>
  );
};

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow left" onClick={onClick}>
      <FaArrowLeft />
    </div>
  );
};

const images = [
  '/slide1.webp',
  '/slide2.jpg',
  '/slide3.png',
];

const features = [
  {
    title: 'Real-Time Analytics',
    description: 'Monitor live data with intuitive charts and dashboards.',
    img: '/analytics.png',
  },
  {
    title: 'Smart Integrations',
    description: 'Seamless API integrations with your existing tools.',
    img: '/integration.webp',
  },
  {
    title: '24/7 Support',
    description: 'Our team is always ready to assist you.',
    img: '/support.png',
  },
];

const stats = [
  { value: '100+', label: 'Happy Clients' },
  { value: '1200+', label: 'Projects Completed' },
  { value: '99.9%', label: 'Uptime Guarantee' },
];

const testimonials = [
  {
    text: 'Neon completely transformed our workflow with seamless integrations.',
    author: 'Elira B.',
  },
  {
    text: 'The support team is incredibly responsive and helpful!',
    author: 'James R.',
  },
  {
    text: 'Our data insights have never been clearer or more actionable.',
    author: 'Sophia K.',
  },
];

const faqs = [
  {
    question: 'Is Neon suitable for small businesses?',
    answer: 'Absolutely! Our platform scales from startups to enterprises.',
  },
  {
    question: 'What support options do you offer?',
    answer: 'We offer 24/7 live chat, email support, and dedicated account managers.',
  },
  {
    question: 'How do I get started?',
    answer: 'Just click the Get Started button below and you’ll be guided through onboarding!',
  },
];

const Home: React.FC = () => {
  const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
};

  return (
    <main className="home-container">
      {/* === Image Slider === */}
      <Slider {...sliderSettings}>
        {images.map((src, index) => (
          <div key={index} className="slide-wrapper">
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="slide-image"
              loading="lazy"
            />
          </div>
        ))}
      </Slider>

      {/* === Hero Section === */}
      <section className="hero-section">
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Empower Your Digital Presence with <span className="text-highlight">Neon</span>
        </motion.h1>
        <p className="hero-subtext">
          From analytics to automation, Neon gives you the tools to grow and lead in the digital age.
        </p>
        <Link to="/dashboard/contact">
          <button className="hero-button">Get Started Now</button>
        </Link>
      </section>

      {/* === Features Grid === */}
      <section className="features-grid">
        {features.map((feature, idx) => (
          <motion.article
            key={idx}
            className="feature-card"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={feature.img}
              alt={feature.title}
              className="feature-image"
              loading="lazy"
            />
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </motion.article>
        ))}
      </section>

      {/* === Animated Stats Section === */}
      <section className="stats-section">
        <div className="stats-grid">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="stat-item"
            >
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* === Testimonials === */}
      <section className="testimonials-section">
        <h2 className="testimonials-title">What our clients say</h2>
        <div className="testimonials-list">
          {testimonials.map((t, idx) => (
            <div key={idx} className="testimonial">
              <p className="testimonial-text">"{t.text}"</p>
              <footer className="testimonial-author">— {t.author}</footer>
            </div>
          ))}
        </div>
      </section>

      {/* === FAQ Accordion === */}
      <section className="faq-section">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((faq, idx) => (
            <details key={idx} className="faq-item">
              <summary className="faq-question">{faq.question}</summary>
              <p className="faq-answer">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      {/* === Call to Action Footer === */}
      <footer className="cta-footer">
        <h2 className="cta-title">Start your journey with Neon today</h2>
        <Link to="/dashboard/shop">
          <button className="cta-button">Explore the Shop</button>
        </Link>
      </footer>
    </main>
  );
};

export default Home;
