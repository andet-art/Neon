// src/components/Service/SoftwareMaintenance.tsx
import React from "react";
import "./SoftwareMaintenance.css";

const benefits = [
  "Proactive updates and bug fixes before problems arise",
  "Fast response times whenever you need support",
  "Continuous security monitoring to protect your data",
  "Performance tuning that keeps your site lightning-fast",
  "Clear communication and detailed reporting",
];

const SoftwareMaintenance: React.FC = () => {
  return (
    <section className="software-maintenance">
      <div className="maintenance-header">
        <h2>Reliable Software Maintenance You Can Count On — Only at Neon</h2>
        <p className="intro-text">
          At Neon, building great websites is just the beginning. We provide
          top-tier software maintenance to keep your digital presence running
          smoothly and securely — 24/7.
        </p>
        <p className="intro-text">
          Our dedicated team monitors, updates, and optimizes your websites and
          applications to ensure peak performance, maximum security, and a
          seamless user experience. With Neon’s maintenance services, you never
          have to worry about glitches, downtime, or outdated software slowing
          you down.
        </p>
      </div>

      <div className="maintenance-benefits">
        <h3>Why choose Neon for maintenance?</h3>
        <ul>
          {benefits.map((item, index) => (
            <li key={index} className="benefit-item" tabIndex={0}>
              <span className="checkmark" aria-hidden="true">✔</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="maintenance-footer">
        <p>
          With Neon handling your software maintenance, you gain peace of mind —
          allowing you to focus on growing your business while we keep your
          technology flawless and secure.
        </p>
        <button
          className="contact-button"
          onClick={() => window.location.href = "/dashboard/contact"}
          aria-label="Contact Neon for Software Maintenance"
        >
          Contact Us Today
        </button>
      </div>
    </section>
  );
};

export default SoftwareMaintenance;
