import React, { useState, useEffect, ChangeEvent } from "react";
import axios from "axios";
import "./dashboard.css";

type Offer = {
  id: number;
  title: string;
  description: string;
  featured: boolean;
};

export default function DashboardHome() {
  const [offers, setOffers] = useState<Offer[]>([]);
  const [form, setForm] = useState({ title: "", description: "" });

  useEffect(() => {
    fetchOffers();
  }, []);

  const fetchOffers = async () => {
    try {
      const res = await axios.get('/api/get_offers.php');
      console.log("API response:", res.data);

      const data = res.data;
      const offersArray = Array.isArray(data)
        ? data
        : Array.isArray(data.offers)
        ? data.offers
        : [];

      setOffers(offersArray);
    } catch (error) {
      console.error('Error fetching offers:', error);
      setOffers([]); // fallback to empty array
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddOffer = async () => {
    try {
      await axios.post('/api/add_offer.php', form);
      setForm({ title: "", description: "" });
      fetchOffers();
    } catch (error) {
      console.error('Error adding offer:', error);
    }
  };

  const toggleFeatured = async (id: number) => {
    try {
      await axios.post('/api/toggle_featured.php', { id });
      fetchOffers();
    } catch (error) {
      console.error('Error toggling featured:', error);
    }
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-box">
        <h1 className="dashboard-header">Neon Dashboard</h1>

        {/* New Offer Form */}
        <div className="offer-form">
          <h2>Create New Offer</h2>
          <input
            type="text"
            name="title"
            placeholder="Offer Title"
            value={form.title}
            onChange={handleChange}
          />
          <textarea
            name="description"
            placeholder="Offer Description"
            value={form.description}
            onChange={handleChange}
          />
          <button onClick={handleAddOffer}>Add Offer</button>
        </div>

        {/* Featured Offers */}
        <div>
          <h2 className="offers-header">Featured Offers</h2>
          {offers.filter(offer => offer.featured).map(offer => (
            <div key={offer.id} className="offer-card featured">
              <h3>{offer.title}</h3>
              <p>{offer.description}</p>
              <button onClick={() => toggleFeatured(offer.id)}>Unpick</button>
            </div>
          ))}
        </div>

        {/* All Offers */}
        <div>
          <h2 className="offers-header">All Offers</h2>
          {offers.map((offer) => (
            <div
              key={offer.id}
              className={`offer-card ${offer.featured ? "featured" : ""}`}
            >
              <h3>{offer.title}</h3>
              <p>{offer.description}</p>
              <button
                onClick={() => toggleFeatured(offer.id)}
                className={offer.featured ? "unpick" : "pick"}
              >
                {offer.featured ? "Unpick" : "Pick for Main Page"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
