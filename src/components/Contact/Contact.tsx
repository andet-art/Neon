// src/components/Contact.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./contact.css";

interface FormState {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      let API_BASE = "";
      if (window.location.hostname === "localhost") {
        if (["5173", "9004"].includes(window.location.port)) {
          API_BASE = "/api";
        } else {
          API_BASE = "http://localhost/Neon/backend/api";
        }
      } else {
        API_BASE = "/backend/api";
      }

      const res = await fetch(`${API_BASE}/contact.php`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok || data.error) {
        throw new Error(data.error || "Server error");
      }

      console.log("Contact form response:", data);
      setSubmitted(true);
      window.alert("✅ Your message has been sent!");
    } catch (err: any) {
      console.error("Submission error:", err);
      setError(err.message || "Something went wrong.");
    }
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>

      <div className="contact-paper-wrapper">
        <div className="contact-card">
          {submitted ? (
            <>
              <div className="contact-alert" style={{
                backgroundColor: "#d4edda",
                color: "#155724",
                padding: "0.75rem 1rem",
                borderRadius: "0.25rem"
              }}>
                Thank you! We’ll get back to you soon.
              </div>
              <button onClick={() => navigate("/")} className="contact-button">
                Go to Home
              </button>
            </>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              {error && (
                <div className="contact-alert" style={{
                  backgroundColor: "#f8d7da",
                  color: "#721c24",
                  padding: "0.75rem 1rem",
                  borderRadius: "0.25rem"
                }}>
                  {error}
                </div>
              )}

              <input
                className="contact-input"
                type="text"
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
                required
              />

              <input
                className="contact-input"
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
              />

              <textarea
                className="contact-input"
                name="message"
                placeholder="Message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                required
              />

              <button type="submit" className="contact-button">
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
