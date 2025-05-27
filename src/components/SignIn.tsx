import React, { useState } from 'react';

export default function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      // More flexible API path detection
      let API_BASE = '';
      if (window.location.hostname === 'localhost') {
        // Try to detect the correct path based on port
        if (window.location.port === '9004') {
          API_BASE = '/api'; // Use the proxy defined in vite.config.ts
        } else {
          API_BASE = 'http://localhost/Neon/backend/api';
        }
      } else {
        API_BASE = '/backend/api';
      }
      
      console.log('Using API base:', API_BASE); // Debug the API path
      
      const res = await fetch(`${API_BASE}/signin.php`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
        credentials: 'include'  // to handle PHP session cookie
      });

      if (!res.ok) {
        console.error('HTTP error status:', res.status);
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const data = await res.json();
      console.log('Sign-in response:', data); // Debug response
      
      if (data.success) {
        // Redirect to dashboard home page
        window.location.href = '/#/dashboard/home';
      } else {
        setError(data.message || 'Sign‑in failed');
      }
    } catch (error) {
      console.error('Sign-in error:', error);
      setError('Connection error. Please try again.');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-sm mx-auto bg-white p-6 rounded-2xl shadow-lg"
    >
      <h2 className="text-2xl font-semibold mb-4 text-center">Admin Sign In</h2>

      {error && (
        <div className="bg-red-100 text-red-700 p-2 rounded mb-4">
          {error}
        </div>
      )}

      <label className="block mb-2">
        <span className="text-gray-700">Username</span>
        <input
          type="text"
          required
          value={username}
          onChange={e => setUsername(e.target.value)}
          className="mt-1 block w-full p-2 border rounded-lg focus:outline-none focus:ring"
        />
      </label>

      <label className="block mb-4">
        <span className="text-gray-700">Password</span>
        <input
          type="password"
          required
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="mt-1 block w-full p-2 border rounded-lg focus:outline-none focus:ring"
        />
      </label>

      <button
        type="submit"
        className="w-full py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
      >
        Sign In
      </button>
    </form>
  );
}
