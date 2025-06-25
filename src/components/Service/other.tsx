import React from "react";
import "./other.css";

const Other: React.FC = () => {
  return (
    <section className="other-section">
      <div className="other-header">
        <h2>Your Success. Our Commitment. Neon Delivers Excellence.</h2>
        <p className="tagline">
          At Neon, we don’t just provide technology — we create lasting partnerships built on trust, expertise, and passion.
        </p>
      </div>

      <div className="other-content">
        <p>
          Every project is personal to us. From your very first idea to ongoing support and growth, our team is by your side — offering clear guidance, smart solutions, and a genuine dedication to your goals.
        </p>

        <p>
          We believe technology should empower, not overwhelm. That’s why Neon blends cutting-edge innovation with down-to-earth service. We listen, adapt, and deliver results that don’t just meet expectations — they exceed them.
        </p>

        <p>
          When you choose Neon, you choose a partner who values your vision, respects your time, and is relentless about your satisfaction. Let’s build something extraordinary together.
        </p>

        <button className="contact-cta">Get In Touch</button>
      </div>
    </section>
  );
};

export default Other;
