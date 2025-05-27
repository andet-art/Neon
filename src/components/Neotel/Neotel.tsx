import React, { useState } from "react";
import "./neotel.css";

const Neotel: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"opticki" | "ostanati">("opticki");

  // Optical internet packages data
  const optickiPaketi = [
    {
      id: 1,
      name: "Fiber Basic",
      speed: "100/100 Mbps",
      price: "999 ден",
      promo: null,
      features: ["Неограничен интернет", "WiFi рутер", "Бесплатна инсталација"]
    },
    {
      id: 2,
      name: "Fiber Pro",
      speed: "300/300 Mbps",
      price: "1299 ден",
      promo: "1099 ден",
      features: ["Неограничен интернет", "WiFi 6 рутер", "Бесплатна инсталација", "24/7 поддршка"]
    },
    {
      id: 3,
      name: "Fiber Ultra",
      speed: "500/500 Mbps",
      price: "1599 ден",
      promo: null,
      features: ["Неограничен интернет", "Премиум WiFi 6 рутер", "Приоритетна техничка поддршка", "Статичка IP адреса"]
    },
  ];

  // Other packages data
  const ostanatiPaketi = [
    {
      id: 1,
      name: "ADSL Standard",
      speed: "20/1 Mbps",
      price: "799 ден",
      promo: "699 ден",
      features: ["Неограничен интернет", "Основен рутер", "Техничка поддршка"]
    },
    {
      id: 2,
      name: "VDSL Plus",
      speed: "50/10 Mbps",
      price: "999 ден",
      promo: null,
      features: ["Неограничен интернет", "Напреден рутер", "Техничка поддршка", "Антивирус заштита"]
    },
    {
      id: 3,
      name: "4G Mobile",
      speed: "до 50 Mbps",
      price: "1199 ден",
      promo: "999 ден",
      features: ["100GB месечно", "4G рутер", "Флексибилна локација", "Брза активација"]
    },
  ];

  return (
    <div className="neotel-container">
      <div className="neotel-header">
        <h1>Neotel Интернет</h1>
        <p>Брз и сигурен интернет за вашиот дом и бизнис</p>
      </div>

      <div className="sliding-navbar">
        <button
          className={activeTab === "opticki" ? "active" : ""}
          onClick={() => setActiveTab("opticki")}
        >
          Оптички интернет
        </button>
        <button
          className={activeTab === "ostanati" ? "active" : ""}
          onClick={() => setActiveTab("ostanati")}
        >
          Останати пакети
        </button>
        <div className={`slider ${activeTab}`}></div>
      </div>

      <div className="tab-content">
        {activeTab === "opticki" && (
          <div className="packages-section">
            <div className="section-header">
              <h2>Оптички интернет пакети</h2>
              <p>Најбрзиот и најстабилниот интернет за вашиот дом или бизнис со симетрични брзини.</p>
            </div>
            
            <div className="packages-grid">
              {optickiPaketi.map(paket => (
                <div key={paket.id} className="package-card">
                  <div className="package-header">
                    <h3>{paket.name}</h3>
                    <div className="speed-badge">{paket.speed}</div>
                  </div>
                  
                  <div className="package-pricing">
                    {paket.promo ? (
                      <>
                        <span className="original-price">{paket.price}</span>
                        <span className="promo-price">{paket.promo}</span>
                        <div className="promo-badge">Промо</div>
                      </>
                    ) : (
                      <span className="regular-price">{paket.price}</span>
                    )}
                    <span className="price-period">месечно</span>
                  </div>
                  
                  <ul className="features-list">
                    {paket.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                  
                  <button className="order-button">Нарачај сега</button>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {activeTab === "ostanati" && (
          <div className="packages-section">
            <div className="section-header">
              <h2>Останати интернет пакети</h2>
              <p>Алтернативни решенија за интернет конекција според вашите потреби.</p>
            </div>
            
            <div className="packages-grid">
              {ostanatiPaketi.map(paket => (
                <div key={paket.id} className="package-card">
                  <div className="package-header">
                    <h3>{paket.name}</h3>
                    <div className="speed-badge">{paket.speed}</div>
                  </div>
                  
                  <div className="package-pricing">
                    {paket.promo ? (
                      <>
                        <span className="original-price">{paket.price}</span>
                        <span className="promo-price">{paket.promo}</span>
                        <div className="promo-badge">Промо</div>
                      </>
                    ) : (
                      <span className="regular-price">{paket.price}</span>
                    )}
                    <span className="price-period">месечно</span>
                  </div>
                  
                  <ul className="features-list">
                    {paket.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                  
                  <button className="order-button">Нарачај сега</button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      
      <div className="contact-section">
        <h3>Имате прашања?</h3>
        <p>Контактирајте нѐ за повеќе информации или закажете состанок со нашите консултанти.</p>
        <button className="contact-button">Контакт</button>
      </div>
    </div>
  );
};

export default Neotel;