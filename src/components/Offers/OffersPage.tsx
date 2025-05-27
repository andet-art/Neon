import React, { useEffect, useState } from "react";
import axios from "axios";
import Offers from "./Offers";

type Offer = {
  id: number;
  title: string;
  description: string;
  featured: boolean;
};

type EnrichedOffer = {
  id: number;
  title: string;
  description: string;
  priceOld?: string;
  priceNew: string;
  promoText?: string;
  features: string[];
  contractTerm?: string;
  buttonText?: string;
};

// Map minimal offer to enriched offer for UI display
const enrichOffer = (offer: Offer): EnrichedOffer => {
  const detailsMap: Record<number, Partial<EnrichedOffer>> = {
    1: {
      priceOld: "890 ден.",
      priceNew: "0 ден.",
      features: [
        "До 50 Mbps / 50 Mbps",
        "Неограничен интернет",
        "Вклучен WiFi рутер",
      ],
      contractTerm: "Договор на 2 години",
      promoText: "ПРОМО",
      buttonText: "Нарачај веднаш",
    },
    // Add other offer details here keyed by id
  };

  return {
    id: offer.id,
    title: offer.title,
    description: offer.description,
    priceOld: detailsMap[offer.id]?.priceOld || "",
    priceNew: detailsMap[offer.id]?.priceNew || "Цена по договор",
    features: detailsMap[offer.id]?.features || [],
    contractTerm: detailsMap[offer.id]?.contractTerm || "",
    promoText: detailsMap[offer.id]?.promoText || "",
    buttonText: detailsMap[offer.id]?.buttonText || "Нарачај веднаш",
  };
};

const API_BASE = window.location.hostname === 'localhost' 
  ? 'http://localhost/Neon/backend/api'
  : '/backend/api';

const OffersPage: React.FC = () => {
  const [offers, setOffers] = useState<EnrichedOffer[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedOffers = async () => {
      try {
        const res = await axios.get<{ success: boolean; data: Offer[] }>(
          `${API_BASE}/get_offers.php`
        );
        if (res.data.success) {
          const featuredOffers = res.data.data.filter(o => o.featured);
          const enrichedOffers = featuredOffers.map(enrichOffer);
          setOffers(enrichedOffers);
        } else {
          console.error("Failed to load offers");
        }
      } catch (error) {
        console.error("Error fetching offers:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedOffers();
  }, []);

  if (loading) return <div>Loading offers...</div>;
  if (offers.length === 0) return <div>No featured offers found.</div>;

  return <Offers offers={offers} />;
};

export default OffersPage;
