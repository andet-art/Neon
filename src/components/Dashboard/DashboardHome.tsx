import React, { useState, useEffect } from "react";
import type { ChangeEvent } from "react";
import axios from "axios";
import "./dashboard.css";

type Offer = {
  id: number;
  title: string;
  description: string;
  featured: boolean;
};

type DebugInfo = {
  php_version: string;
  mysql_version: string;
  table_exists: boolean;
  record_count: number;
  mysql_error?: string;
  current_database?: string;
};

type ApiResponse = {
  success: boolean;
  data?: Offer[];
  error?: string;
  debug?: DebugInfo;
  message?: string;
};

type ApiError = {
  response?: {
    data?: {
      error?: string;
      debug?: DebugInfo;
    };
  };
  message?: string;
};

// Base URL for API endpoints
const API_BASE = window.location.hostname === 'localhost' 
  ? 'http://localhost/Neon/backend/api'
  : '/backend/api';

export default function DashboardHome() {
  const [offers, setOffers] = useState<Offer[]>([]);
  const [form, setForm] = useState({ title: "", description: "" });
  const [error, setError] = useState<string | null>(null);
  const [debug, setDebug] = useState<DebugInfo | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // First test the API connection
    testApiConnection();
  }, []);

  const testApiConnection = async () => {
    try {
      setLoading(true);
      setError(null);
      console.log('Testing API connection...');
      
      const res = await axios.get<ApiResponse>(`${API_BASE}/test.php`);
      console.log('API test response:', res.data);

      if (res.data.debug) {
        setDebug(res.data.debug);
      }

      if (res.data.success) {
        fetchOffers();
      } else {
        setError(res.data.error || 'API test failed');
      }
    } catch (error) {
      const apiError = error as ApiError;
      console.error('API test error:', apiError);
      setError(
        apiError.response?.data?.error || 
        apiError.message || 
        'Failed to connect to API'
      );
      if (apiError.response?.data?.debug) {
        setDebug(apiError.response.data.debug);
      }
    } finally {
      setLoading(false);
    }
  };

  const fetchOffers = async () => {
    try {
      setLoading(true);
      console.log('Fetching offers...');
      
      const res = await axios.get<ApiResponse>(`${API_BASE}/get_offers.php`);
      console.log('Offers response:', res.data);

      if (!res.data.success) {
        setError(res.data.error || 'Failed to fetch offers');
        return;
      }

      if (res.data.debug) {
        setDebug(res.data.debug);
      }

      setOffers(res.data.data || []);
      setError(null);
    } catch (error) {
      const apiError = error as ApiError;
      console.error('Error fetching offers:', apiError);
      setError(
        apiError.response?.data?.error || 
        apiError.message || 
        'Failed to fetch offers'
      );
      setOffers([]);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddOffer = async () => {
    try {
      setError(null);
      setLoading(true);
      
      if (!form.title || !form.description) {
        setError('Please fill in both title and description.');
        return;
      }

      console.log('Adding offer:', form);
      const res = await axios.post<ApiResponse>(`${API_BASE}/add_offer.php`, form);
      
      if (!res.data.success) {
        setError(res.data.error || 'Failed to add offer');
        return;
      }

      setForm({ title: "", description: "" });
      fetchOffers();
    } catch (error) {
      const apiError = error as ApiError;
      console.error('Error adding offer:', apiError);
      setError(
        apiError.response?.data?.error || 
        apiError.message || 
        'Failed to add offer'
      );
    } finally {
      setLoading(false);
    }
  };

  const toggleFeatured = async (id: number) => {
    try {
      setError(null);
      setLoading(true);
      
      console.log('Toggling featured status for offer:', id);
      const res = await axios.post<ApiResponse>(`${API_BASE}/toggle_featured.php`, { id });
      
      if (!res.data.success) {
        setError(res.data.error || 'Failed to update offer status');
        return;
      }

      fetchOffers();
    } catch (error) {
      const apiError = error as ApiError;
      console.error('Error toggling featured:', apiError);
      setError(
        apiError.response?.data?.error || 
        apiError.message || 
        'Failed to update offer status'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-box">
        <h1 className="dashboard-header">Neon Dashboard</h1>

        {loading && (
          <div className="loading-message">
            Loading...
          </div>
        )}

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

      

        {/* New Offer Form */}
        <div className="offer-form">
          <h2>Create New Offer</h2>
          <input
            type="text"
            name="title"
            placeholder="Offer Title"
            value={form.title}
            onChange={handleChange}
            disabled={loading}
          />
          <textarea
            name="description"
            placeholder="Offer Description"
            value={form.description}
            onChange={handleChange}
            disabled={loading}
          />
          <button 
            onClick={handleAddOffer}
            disabled={loading}
          >
            {loading ? 'Adding...' : 'Add Offer'}
          </button>
        </div>

        {/* Featured Offers */}
        <div>
          <h2 className="offers-header">Featured Offers</h2>
          {offers.filter(offer => offer.featured).map(offer => (
            <div key={offer.id} className="offer-card featured">
              <h3>{offer.title}</h3>
              <p>{offer.description}</p>
              <button 
                onClick={() => toggleFeatured(offer.id)}
                className="unpick"
                disabled={loading}
              >
                {loading ? 'Updating...' : 'Unpick'}
              </button>
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
                disabled={loading}
              >
                {loading ? 'Updating...' : (offer.featured ? "Unpick" : "Pick for Main Page")}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
