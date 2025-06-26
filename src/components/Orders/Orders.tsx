import React, { useState } from 'react';
import './orders.css';

const Orders: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    address: '',
    email: '',
    phone: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const response = await fetch('/api/orders/add_order.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    if (result.success) {
      setMessage('Your order has been submitted!');
      setFormData({ name: '', surname: '', address: '', email: '', phone: '' });
    } else {
      setMessage('Failed to submit. Try again later.');
    }
  } catch (err) {
    console.error(err);
    setMessage('Error occurred while submitting.');
  }
};


  return (
    <div className="orders-container">
      <h2>Order Form</h2>
      <form onSubmit={handleSubmit} className="order-form">
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="First Name" required />
        <input type="text" name="surname" value={formData.surname} onChange={handleChange} placeholder="Last Name" required />
        <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" required />
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" required />
        <button type="submit">Submit Order</button>
      </form>
      {message && <p className="form-message">{message}</p>}
    </div>
  );
};

export default Orders;
