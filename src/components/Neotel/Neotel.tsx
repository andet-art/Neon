import React, { useState, useEffect } from "react";
import "./neotel.css";
import { useNavigate } from "react-router-dom";

interface InternetPackage {
  id: number;
  name: string;
  speed: string;
  price: string;
  promo: string | null;
  features: string[];
  deals: string;
}

interface NeotelProps {
  optickiPaketi?: InternetPackage[];
  ostanatiPaketi?: InternetPackage[];
}

const Neotel: React.FC<NeotelProps> = ({ optickiPaketi = [], ostanatiPaketi = [] }) => {
  const [activeTab, setActiveTab] = useState<"opticki" | "ostanati">("opticki");
  const [localOptickiPaketi, setLocalOptickiPaketi] = useState<InternetPackage[]>([]);
  const [localOstanatiPaketi, setLocalOstanatiPaketi] = useState<InternetPackage[]>([]);
  const navigate = useNavigate();

  const handleContactOnclick = () => {
    navigate('/dashboard/contact'); // ✅ Corrected path
  };

  const handleOrderClick = () => {
    navigate('/dashboard/orders'); // ✅ Corrected path
  };

  const defaultOptickiPaketi: InternetPackage[] = [
    { id: 1, name: "Fiber 50", speed: "50/50 Mbps", deals:"Договор на 2 години", price: "890 ден.", promo: null, features: ["Неограничен интернет", "WiFi рутер", "Бесплатна инсталација"] },
    { id: 2, name: "Fiber 100", speed: "100/100 Mbps", price: "1.190 ден.", promo: "1.099 ден", deals:"Договор на 2 години", features: ["Неограничен интернет", "WiFi 6 рутер", "24/7 поддршка"] },
    { id: 3, name: "Fiber 300", speed: "300/300 Mbps", price: "1.790 ден", promo: null, deals:"Договор на 2 години", features: ["Неограничен интернет", "Приоритетна техничка поддршка", "Статичка IP адреса"] }
  ];

  const defaultOstanatiPaketi: InternetPackage[] = [
    { id: 1, name: "Net 20", speed: "20 Mbps / 2 Mbps", price: "799 ден", promo: "690 ден", deals:"Договор на 2 години", features: ["Неограничен интернет", "Основен рутер", "Безжичен интернет"] },
    { id: 2, name: "Net 30", speed: "30 Mbps / 3 Mbps", price: "790 ден.", promo: null, deals:"Договор на 2 години", features: ["Неограничен интернет", "Напреден рутер", "Безжичен интернет", "Антивирус заштита"] },
    { id: 3, name: "Net 50/10", speed: "50 Mbps / 10 Mbps", price: "1.199 ден", promo: "1.090ден", deals:"Договор на 2 години", features: ["100GB месечно", "4G рутер", "Безжичен интернет", "Брза активација"] }
  ];

  useEffect(() => {
    const savedOpticki = localStorage.getItem('optickiPaketi');
    const savedOstanati = localStorage.getItem('ostanatiPaketi');

    if (savedOpticki) setLocalOptickiPaketi(JSON.parse(savedOpticki));
    if (savedOstanati) setLocalOstanatiPaketi(JSON.parse(savedOstanati));
  }, []);

  const displayOptickiPaketi = optickiPaketi.length > 0 
    ? optickiPaketi 
    : localOptickiPaketi.length > 0 
      ? localOptickiPaketi 
      : defaultOptickiPaketi;

  const displayOstanatiPaketi = ostanatiPaketi.length > 0 
    ? ostanatiPaketi 
    : localOstanatiPaketi.length > 0 
      ? localOstanatiPaketi 
      : defaultOstanatiPaketi;

  return (
    <div className="neotel-container">
      <div className="tab-navbar">
        <button
          className={activeTab === "opticki" ? "tab-button active" : "tab-button"}
          onClick={() => setActiveTab("opticki")}
        >
          Оптички интернет
        </button>
        <button
          className={activeTab === "ostanati" ? "tab-button active" : "tab-button"}
          onClick={() => setActiveTab("ostanati")}
        >
          Останати пакети
        </button>
      </div>

      <div className="tab-content">
        {activeTab === "opticki" && (
          <div className="packages-section">
            <div className="section-header">
              <h2>Оптички интернет пакети</h2>
              <p>Најбрзиот и најстабилниот интернет за вашиот дом или бизнис со симетрични брзини.</p>
            </div>
            <div className="packages-grid">
              {displayOptickiPaketi.map(paket => (
                <div key={paket.id} className="package-card">
                  <div className="package-header">
                    <h3>{paket.name}</h3>
                    <div className="speed-badge">{paket.speed}</div>
                    <div className="package-deals">{paket.deals}</div>
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
                  <button className="order-button" onClick={handleOrderClick}>Нарачај сега</button>
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
              {displayOstanatiPaketi.map(paket => (
                <div key={paket.id} className="package-card">
                  <div className="package-header">
                    <h3>{paket.name}</h3>
                    <div className="speed-badge">{paket.speed}</div>
                    <div className="package-deals">{paket.deals}</div>
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
                  <button className="order-button" onClick={handleOrderClick}>Нарачај сега</button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="contact-section">
        <h3>Имате прашања?</h3>
        <p>Контактирајте нѐ за повеќе информации или закажете состанок со нашите консултанти.</p>
        <button className="contact-button" onClick={handleContactOnclick}>
          Контакт
        </button>
      </div>
    </div>
  );
};

export default Neotel;
