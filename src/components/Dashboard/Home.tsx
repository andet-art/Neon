import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import './home.css'; // make sure the path is correct

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const images = [
  '/public/slide1.webp',
  '/public/slide2.jpg',
  '/public/slide3.png',
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
    <main className="home-container min-h-screen bg-[#fbfcff] text-[#1a1a2e] font-sans overflow-x-hidden">
      {/* === Image Slider === */}
      <Slider {...sliderSettings}>
        {images.map((src, index) => (
          <div key={index}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-[70vh] object-cover rounded-b-2xl shadow-xl"
              loading="lazy"
            />
          </div>
        ))}
      </Slider>

      {/* === Hero Section === */}
      <section className="text-center py-20 px-6">
        <motion.h1
          className="text-5xl md:text-6xl font-black uppercase tracking-wider text-[#1a1a2e] mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Empower Your Digital Presence with <span className="text-highlight">Neon</span>
        </motion.h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-[#4a4a6a] font-medium mb-8">
          From analytics to automation, Neon gives you the tools to grow and lead in the digital age.
        </p>
        <Link to="/dashboard/contact">
          <button className="bg-[#8a88f8] hover:bg-[#6f6df3] text-white px-8 py-4 rounded-full font-bold text-lg transition">
            Get Started Now
          </button>
        </Link>
      </section>

      {/* === Features Grid === */}
      <section className="features-grid max-w-6xl mx-auto px-6 grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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
            <h3 className="feature-title text-2xl font-bold mb-2 text-[#4a4a6a]">{feature.title}</h3>
            <p className="text-lg text-[#616166] font-medium">{feature.description}</p>
          </motion.article>
        ))}
      </section>

      {/* === Animated Stats Section === */}
      <section className="my-24 px-6 text-center">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-black text-[#8a88f8]"
            >
              {stat.value}
              <p className="text-base text-[#4a4a6a] mt-2 font-bold">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* === Testimonials === */}
      <section className="testimonials-section my-20">
        <h2 className="text-3xl font-black mb-10 text-[#4a4a6a] uppercase">What our clients say</h2>
        <div className="testimonials-list flex flex-col md:flex-row gap-6 justify-center">
          {testimonials.map((t, idx) => (
            <div key={idx} className="testimonial">
              <p className="italic">"{t.text}"</p>
              <footer>— {t.author}</footer>
            </div>
          ))}
        </div>
      </section>

      {/* === FAQ Accordion === */}
      <section className="max-w-4xl mx-auto my-20 px-4">
        <h2 className="text-3xl font-black text-center text-[#4a4a6a] mb-10 uppercase">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <details key={idx} className="bg-[#f4f5ff] p-5 rounded-md shadow-md">
              <summary className="cursor-pointer font-bold text-[#1a1a2e] text-lg">{faq.question}</summary>
              <p className="mt-3 text-[#4a4a6a]">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      {/* === Call to Action Footer === */}
      <footer className="cta-footer text-center mt-32 px-6 mb-20">
        <h2 className="text-4xl font-extrabold mb-6 text-[#4a4a6a]">Start your journey with Neon today</h2>
        <Link to="/dashboard/shop">
          <button className="bg-[#8a88f8] text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-[#6f6df3] transition">
            Explore the Shop
          </button>
        </Link>
      </footer>
    </main>
  );
};

export default Home;
