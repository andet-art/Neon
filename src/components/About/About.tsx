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

const teamMembers = [
  { name: "Andet Fejzuli", role: "CEO & Founder", image: "/images/team/andet.jpg" },
  { name: "Elira Shala", role: "Lead Developer", image: "/images/team/elira.jpg" },
  { name: "Blerim Arifi", role: "Project Manager", image: "/images/team/blerim.jpg" },
  { name: "Arta Kastrati", role: "UX/UI Designer", image: "/images/team/arta.jpg" },
];

const testimonials = [
  {
    name: "John Doe",
    feedback: "Neon Tech Solutions exceeded our expectations! Their web development team is top-notch.",
  },
  {
    name: "Jane Smith",
    feedback: "Quick and reliable internet installation with amazing customer support.",
  },
  {
    name: "Michael Lee",
    feedback: "Their hardware repair service saved my business devices — highly recommended!",
  },
];

const About: React.FC = () => {
  return (
    <div className="about-container">
      

      <section className="about-grid">
        <article className="about-text">
          <h2>Who We Are</h2>
          <p>
            Neon is a tech company based in Tetovo, North Macedonia. We specialize
            in web development, internet installation, hardware repairs, and solving
            complex software issues. Our team is passionate about technology and
            committed to delivering quality services to both individuals and businesses.
          </p>
        </article>

        <aside className="about-image">
          <img src="/public/working.webp" alt="Team working together" />
        </aside>
      </section>

      <section className="mission-vision">
        <div>
          <h2>Our Mission</h2>
          <p>
            To empower our clients with innovative technology solutions that
            simplify their lives and grow their businesses.
          </p>
        </div>
        <div>
          <h2>Our Vision</h2>
          <p>
            To be the leading tech partner in the Balkans, known for exceptional
            quality, innovation, and customer satisfaction.
          </p>
        </div>
      </section>

      <section className="services-grid">
        {services.map((service, index) => (
          <article className="service-card" key={index}>
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
          </article>
        ))}
      </section>

      <section className="team-section">
        <h2>Meet the Team</h2>
        <div className="team-grid">
          {teamMembers.map(({ name, role, image }, idx) => (
            <div className="team-member" key={idx}>
              <img src={image} alt={`${name} profile`} />
              <h3>{name}</h3>
              <p>{role}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="testimonials-section">
        <h2>What Our Clients Say</h2>
        <div className="testimonials-list">
          {testimonials.map(({ name, feedback }, idx) => (
            <blockquote key={idx} className="testimonial">
              <p>"{feedback}"</p>
              <footer>- {name}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to work with us?</h2>
        <p>Contact Neon Tech Solutions today and let's build your future together.</p>
        <button onClick={() => alert("Contact form coming soon!")}>Get in Touch</button>
      </section>

      
    </div>
  );
};

export default About;
