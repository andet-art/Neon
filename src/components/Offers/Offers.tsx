import React from "react";
import './offers.css';

type Offer = {
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

type Props = {
  offers: Offer[];
};

const Offers: React.FC<Props> = ({ offers }) => {
  return (
    <div className="offers-container">
      {offers.map((offer) => (
        <div key={offer.id} className="offer-card">
          <div className="offer-header">
            <h2>{offer.title}</h2>
            {offer.contractTerm && <p className="contract-term">{offer.contractTerm}</p>}
            {offer.promoText && <div className="promo-badge">{offer.promoText}</div>}
          </div>
          <div className="offer-pricing">
            {offer.priceOld && <span className="price-old">{offer.priceOld}</span>}
            <span className="price-new">{offer.priceNew}</span>
          </div>
          <ul className="offer-features">
            {offer.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
          <button className="order-btn">{offer.buttonText || "Нарачај веднаш"}</button>
        </div>
      ))}
    </div>
  );
};

export default Offers;
