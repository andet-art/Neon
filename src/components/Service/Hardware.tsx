// src/components/Service/HardwareSetup.tsx
import React from "react";
import "./hardware.css";

const internetServices = [
  "Professional setup of high-speed broadband connections",
  "Configuration of routers, modems, and Wi-Fi networks for reliable coverage",
  "Network hardware installation tailored to your space and needs",
  "Troubleshooting and optimization to ensure smooth, uninterrupted internet access",
];

const satelliteServices = [
  "Installation and alignment of satellite dishes for optimal signal reception",
  "Setup of receivers and decoders for clear, high-quality channel access",
  "Integration with existing home or office entertainment systems",
  "Support for a wide range of local and international satellite channels",
];

const HardwareSetup: React.FC = () => {
  return (
    <section className="hardware-setup">
<header className="hardware-header">
  <h2>
    Reliable Internet & Satellite TV Setup
  </h2>
  <p className="intro-text">
    Experience seamless connectivity and crystal-clear entertainment with Neon’s professional installation services — tailored for your home or business.
  </p>
</header>

      <div className="service-section">
        <h3>Internet Installation Services</h3>
        <ul>
          {internetServices.map((item, i) => (
            <li key={i} className="service-item" tabIndex={0}>
              <span className="checkmark" aria-hidden="true">✔</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="service-section">
        <h3>Satellite TV Channel Setup</h3>
        <ul>
          {satelliteServices.map((item, i) => (
            <li key={i} className="service-item" tabIndex={0}>
              <span className="checkmark" aria-hidden="true">✔</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <footer className="hardware-footer">
        <p>
          With Neon's skilled technicians and high-quality hardware solutions,
          enjoy reliable internet and crystal-clear satellite TV, hassle-free
          and ready to go.
        </p>
        <button
          className="contact-button"
          onClick={() => (window.location.href = "/dashboard/contact")}
          aria-label="Contact Neon for Hardware Setup Services"
        >
          Contact Us to Get Started
        </button>
      </footer>
    </section>
  );
};

export default HardwareSetup;
