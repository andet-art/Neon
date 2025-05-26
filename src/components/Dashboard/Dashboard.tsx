import { useState, useEffect, ChangeEvent } from "react";
import axios from "axios";

type Offer = {
  id: number;
  title: string;
  description: string;
  featured: boolean;
};

export default function Dashboard() {
  const [offers, setOffers] = useState<Offer[]>([]);
  const [form, setForm] = useState({ title: "", description: "" });

  useEffect(() => {
    fetchOffers();
  }, []);

  const fetchOffers = async () => {
    const res = await axios.get<Offer[]>("/api/get_offers.php");
    setOffers(res.data);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddOffer = async () => {
    await axios.post("/api/add_offer.php", form);
    setForm({ title: "", description: "" });
    fetchOffers();
  };

  const toggleFeatured = async (id: number) => {
    await axios.post("/api/toggle_featured.php", { id });
    fetchOffers();
  };

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">Neon Dashboard</h1>

      {/* New Offer Form */}
      <div className="space-y-4 bg-white p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold">Create New Offer</h2>
        <input
          type="text"
          name="title"
          placeholder="Offer Title"
          className="w-full border p-2 rounded"
          value={form.title}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Offer Description"
          className="w-full border p-2 rounded"
          value={form.description}
          onChange={handleChange}
        />
        <button
          onClick={handleAddOffer}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Offer
        </button>
      </div>

      {/* Offers List */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Offers</h2>
        {offers.map((offer) => (
          <div
            key={offer.id}
            className={`p-4 border rounded-lg ${
              offer.featured ? "border-green-500" : "border-gray-300"
            }`}
          >
            <h3 className="text-lg font-bold">{offer.title}</h3>
            <p className="text-gray-700">{offer.description}</p>
            <button
              onClick={() => toggleFeatured(offer.id)}
              className={`mt-2 px-3 py-1 rounded text-sm ${
                offer.featured
                  ? "bg-red-500 text-white hover:bg-red-600"
                  : "bg-green-500 text-white hover:bg-green-600"
              }`}
            >
              {offer.featured ? "Unpick" : "Pick for Main Page"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
