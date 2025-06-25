// src/components/Service/WebPages.tsx
import React from "react";
import "./WebPages.css";

const WebPages: React.FC = () => {
  return (
    <section className="webpages-section">
      <div className="webpages-hero">
        <h1>Shine Online with Neon – Websites That Work and Wow</h1>
        <p>
          At <strong>Neon</strong>, we don’t just build websites — we craft immersive, user-first
          digital experiences that stand out, drive results, and evolve with your brand.
        </p>
      </div>

      <div className="webpages-intro">
        <p>
          Whether you're launching a startup, scaling your business, or reimagining your online
          identity, our team of expert designers and developers are ready to build something
          exceptional. We specialize in custom, high-performance websites that are fast, stunning,
          and built with your success in mind.
        </p>
        <p>
          Every website we deliver is:
          <ul>
            <li>🧩 Strategically tailored to your business goals and audience</li>
            <li>🖥️ Fully responsive and mobile-first for every screen size</li>
            <li>⚙️ Built using modern frameworks like <strong>React</strong>, <strong>Next.js</strong>, or <strong>WordPress</strong></li>
            <li>💾 Easy to maintain with clean, scalable code and CMS integrations</li>
            <li>📈 Optimized for SEO, speed, accessibility, and conversions</li>
          </ul>
        </p>
      </div>

      <div className="webpages-features">
        <h2>💡 Why Go with Neon?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>✨ Custom Designs</h3>
            <p>We never use cookie-cutter templates. Your site is built to reflect your unique brand, voice, and goals.</p>
          </div>
          <div className="feature-card">
            <h3>⚡ Blazing Speed</h3>
            <p>From first byte to fully loaded, we optimize for performance so users stay engaged and Google rewards you.</p>
          </div>
          <div className="feature-card">
            <h3>📱 Mobile First</h3>
            <p>Over 60% of users browse on mobile. We make sure your site looks flawless and loads instantly on any device.</p>
          </div>
          <div className="feature-card">
            <h3>🔍 SEO-Optimized</h3>
            <p>We bake in technical SEO, fast load times, schema, and best practices from day one.</p>
          </div>
          <div className="feature-card">
            <h3>🛠️ Easy to Manage</h3>
            <p>We integrate CMS solutions that let you edit content without coding skills — stay in control with no hassle.</p>
          </div>
          <div className="feature-card">
            <h3>🤝 Human Support</h3>
            <p>We partner with you long after launch with updates, training, and help whenever you need it.</p>
          </div>
        </div>
      </div>

      <div className="webpages-cta">
        <h2>Let's Build Something Brilliant</h2>
        <p>
          We’ve helped businesses from startups to enterprises stand out in a crowded digital space. Ready to join them?
        </p>
        <button className="cta-button">Request a Free Quote</button>
      </div>
    </section>
  );
};

export default WebPages;