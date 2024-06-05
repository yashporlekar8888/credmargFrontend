import React, { useState } from 'react';
import api from '../services/api';

const AddVendorForm = () => {
  const initialFormData = {
    name: '',
    upi: '',
    email: ''
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/vendors', formData);
      alert('Vendor added successfully');
      setFormData(initialFormData); 
    } catch (error) {
      console.error('Error adding vendor:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
      <input name="upi" value={formData.upi} onChange={handleChange} placeholder="UPI" required />
      <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" required type="email" />
      <button type="submit">Add Vendor</button>
    </form>
  );
};

export default AddVendorForm;
