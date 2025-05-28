import React from "react";
import "./About.css";
import Footer from "../Footer/Footer";

const services = [
  {
    icon: "💻",
    title: "Web Development",
    description: "Modern, responsive websites built with the latest tech.",
  },
  {
    icon: "📶",
    title: "Internet Installation",
    description: "Fast and reliable home internet setup.",
  },
  {
    icon: "🛠️",
    title: "Hardware Repairs",
    description: "Fixing computers, phones, and other devices.",
  },
  {
    icon: "🧠",
    title: "Software Solutions",
    description: "Diagnosing and solving software issues.",
  },
];

const About: React.FC = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Neon</h1>

      <div className="about-grid">
        <div className="about-text">
          <h2>Who We Are</h2>
          <p>
            Neon is a tech company based in Tetovo, North Macedonia. We specialize
            in web development, internet installation, hardware repairs, and solving
            complex software issues. Our team is passionate about technology and
            committed to delivering quality services to both individuals and businesses.
          </p>
        </div>

        <div className="about-image">
          <img src="/images/team-working.jpg" alt="Team working" />
        </div>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-card-content">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p>{service.description}</p>
            </div>

            <div className="extra-info">
              <p>
                Need help with {service.title.toLowerCase()}? Contact us now for a free consultation!
              </p>
              <button onClick={() => alert("Contact form coming soon!")}>
                Contact Us
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    
    
  );
};

export default About;
