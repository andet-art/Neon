import React, { useState, useEffect } from "react";
import './offers.css';
import Neotel from "../Neotel/Neotel";

// Define the interface locally without importing
interface InternetPackage {
  id: number;
  name: string;
  speed: string;
  price: string;
  promo: string | null;
  features: string[];
}

// Default data for optical packages
const defaultOptickiPaketi: InternetPackage[] = [
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

// Default data for other packages
const defaultOstanatiPaketi: InternetPackage[] = [
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

const Offers: React.FC = () => {
  // Load state from localStorage or use defaults
  const [optickiPaketi, setOptickiPaketi] = useState<InternetPackage[]>(() => {
    const saved = localStorage.getItem('optickiPaketi');
    return saved ? JSON.parse(saved) : defaultOptickiPaketi;
  });

  const [ostanatiPaketi, setOstanatiPaketi] = useState<InternetPackage[]>(() => {
    const saved = localStorage.getItem('ostanatiPaketi');
    return saved ? JSON.parse(saved) : defaultOstanatiPaketi;
  });

  // State for editing packages
  const [editingOpticki, setEditingOpticki] = useState<InternetPackage | null>(null);
  const [editingOstanati, setEditingOstanati] = useState<InternetPackage | null>(null);
  const [newFeature, setNewFeature] = useState<string>("");

  // Save to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem('optickiPaketi', JSON.stringify(optickiPaketi));
  }, [optickiPaketi]);

  useEffect(() => {
    localStorage.setItem('ostanatiPaketi', JSON.stringify(ostanatiPaketi));
  }, [ostanatiPaketi]);

  // Function to handle editing an optical package
  const handleEditOpticki = (paket: InternetPackage) => {
    setEditingOpticki({...paket});
  };

  // Function to handle editing an other package
  const handleEditOstanati = (paket: InternetPackage) => {
    setEditingOstanati({...paket});
  };

  // Function to save edited optical package
  const saveOptickiPackage = () => {
    if (editingOpticki) {
      setOptickiPaketi(prev => 
        prev.map(p => p.id === editingOpticki.id ? editingOpticki : p)
      );
      setEditingOpticki(null);
    }
  };

  // Function to save edited other package
  const saveOstanatiPackage = () => {
    if (editingOstanati) {
      setOstanatiPaketi(prev => 
        prev.map(p => p.id === editingOstanati.id ? editingOstanati : p)
      );
      setEditingOstanati(null);
    }
  };

  // Function to add feature to editing package
  const addFeature = (isOpticki: boolean) => {
    if (newFeature.trim() === "") return;
    
    if (isOpticki && editingOpticki) {
      setEditingOpticki({
        ...editingOpticki,
        features: [...editingOpticki.features, newFeature]
      });
    } else if (!isOpticki && editingOstanati) {
      setEditingOstanati({
        ...editingOstanati,
        features: [...editingOstanati.features, newFeature]
      });
    }
    
    setNewFeature("");
  };

  // Function to remove feature from editing package
  const removeFeature = (isOpticki: boolean, index: number) => {
    if (isOpticki && editingOpticki) {
      const newFeatures = [...editingOpticki.features];
      newFeatures.splice(index, 1);
      setEditingOpticki({
        ...editingOpticki,
        features: newFeatures
      });
    } else if (!isOpticki && editingOstanati) {
      const newFeatures = [...editingOstanati.features];
      newFeatures.splice(index, 1);
      setEditingOstanati({
        ...editingOstanati,
        features: newFeatures
      });
    }
  };

  // Function to reset to defaults
  const resetToDefaults = () => {
    if (confirm("Are you sure you want to reset all packages to default values?")) {
      setOptickiPaketi(defaultOptickiPaketi);
      setOstanatiPaketi(defaultOstanatiPaketi);
    }
  };

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard - Internet Packages</h1>
      
      <div className="admin-controls">
        <button 
          className="reset-button"
          onClick={resetToDefaults}
        >
          Reset to Defaults
        </button>
      </div>
      
      {/* Optical Packages Section */}
      <div className="admin-section">
        <h2>Оптички интернет пакети</h2>
        <div className="packages-admin-grid">
          {optickiPaketi.map(paket => (
            <div key={paket.id} className="package-admin-card">
              <h3>{paket.name}</h3>
              <p>Speed: {paket.speed}</p>
              <p>Price: {paket.price}</p>
              {paket.promo && <p>Promo: {paket.promo}</p>}
              <h4>Features:</h4>
              <ul>
                {paket.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <button 
                className="edit-button"
                onClick={() => handleEditOpticki(paket)}
              >
                Edit Package
              </button>
            </div>
          ))}
        </div>
      </div>
      
      {/* Other Packages Section */}
      <div className="admin-section">
        <h2>Останати интернет пакети</h2>
        <div className="packages-admin-grid">
          {ostanatiPaketi.map(paket => (
            <div key={paket.id} className="package-admin-card">
              <h3>{paket.name}</h3>
              <p>Speed: {paket.speed}</p>
              <p>Price: {paket.price}</p>
              {paket.promo && <p>Promo: {paket.promo}</p>}
              <h4>Features:</h4>
              <ul>
                {paket.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <button 
                className="edit-button"
                onClick={() => handleEditOstanati(paket)}
              >
                Edit Package
              </button>
            </div>
          ))}
        </div>
      </div>
      
      {/* Edit Optical Package Modal */}
      {editingOpticki && (
        <div className="edit-modal">
          <div className="modal-content">
            <h2>Edit Optical Package</h2>
            <div className="form-group">
              <label>Name:</label>
              <input 
                type="text" 
                value={editingOpticki.name}
                onChange={(e) => setEditingOpticki({...editingOpticki, name: e.target.value})}
              />
            </div>
            <div className="form-group">
              <label>Speed:</label>
              <input 
                type="text" 
                value={editingOpticki.speed}
                onChange={(e) => setEditingOpticki({...editingOpticki, speed: e.target.value})}
              />
            </div>
            <div className="form-group">
              <label>Price:</label>
              <input 
                type="text" 
                value={editingOpticki.price}
                onChange={(e) => setEditingOpticki({...editingOpticki, price: e.target.value})}
              />
            </div>
            <div className="form-group">
              <label>Promo Price (leave empty for no promo):</label>
              <input 
                type="text" 
                value={editingOpticki.promo || ""}
                onChange={(e) => setEditingOpticki({
                  ...editingOpticki, 
                  promo: e.target.value ? e.target.value : null
                })}
              />
            </div>
            <div className="form-group">
              <label>Features:</label>
              <ul className="edit-features-list">
                {editingOpticki.features.map((feature, index) => (
                  <li key={index}>
                    {feature}
                    <button 
                      className="remove-feature"
                      onClick={() => removeFeature(true, index)}
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
              <div className="add-feature">
                <input 
                  type="text"
                  value={newFeature}
                  onChange={(e) => setNewFeature(e.target.value)}
                  placeholder="New feature"
                />
                <button onClick={() => addFeature(true)}>Add Feature</button>
              </div>
            </div>
            <div className="modal-buttons">
              <button onClick={saveOptickiPackage}>Save Changes</button>
              <button onClick={() => setEditingOpticki(null)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
      
      {/* Edit Other Package Modal */}
      {editingOstanati && (
        <div className="edit-modal">
          <div className="modal-content">
            <h2>Edit Other Package</h2>
            <div className="form-group">
              <label>Name:</label>
              <input 
                type="text" 
                value={editingOstanati.name}
                onChange={(e) => setEditingOstanati({...editingOstanati, name: e.target.value})}
              />
            </div>
            <div className="form-group">
              <label>Speed:</label>
              <input 
                type="text" 
                value={editingOstanati.speed}
                onChange={(e) => setEditingOstanati({...editingOstanati, speed: e.target.value})}
              />
            </div>
            <div className="form-group">
              <label>Price:</label>
              <input 
                type="text" 
                value={editingOstanati.price}
                onChange={(e) => setEditingOstanati({...editingOstanati, price: e.target.value})}
              />
            </div>
            <div className="form-group">
              <label>Promo Price (leave empty for no promo):</label>
              <input 
                type="text" 
                value={editingOstanati.promo || ""}
                onChange={(e) => setEditingOstanati({
                  ...editingOstanati, 
                  promo: e.target.value ? e.target.value : null
                })}
              />
            </div>
            <div className="form-group">
              <label>Features:</label>
              <ul className="edit-features-list">
                {editingOstanati.features.map((feature, index) => (
                  <li key={index}>
                    {feature}
                    <button 
                      className="remove-feature"
                      onClick={() => removeFeature(false, index)}
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
              <div className="add-feature">
                <input 
                  type="text"
                  value={newFeature}
                  onChange={(e) => setNewFeature(e.target.value)}
                  placeholder="New feature"
                />
                <button onClick={() => addFeature(false)}>Add Feature</button>
              </div>
            </div>
            <div className="modal-buttons">
              <button onClick={saveOstanatiPackage}>Save Changes</button>
              <button onClick={() => setEditingOstanati(null)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
      
      {/* Preview Section */}
      <div className="preview-section">
        <h2>Preview</h2>
        <Neotel 
          optickiPaketi={optickiPaketi} 
          ostanatiPaketi={ostanatiPaketi} 
        />
      </div>
    </div>
  );
};

export default Offers;
