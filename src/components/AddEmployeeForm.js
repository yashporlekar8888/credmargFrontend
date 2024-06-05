import React, { useState } from 'react';
import api from '../services/api';

const AddEmployeeForm = () => {
  const initialFormData = {
    name: '',
    designation: '',
    ctc: '',
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
      await api.post('/employees', formData);
      alert('Employee added successfully');
      setFormData(initialFormData); 
    } catch (error) {
      console.error('Error adding employee:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
      <input name="designation" value={formData.designation} onChange={handleChange} placeholder="Designation" required />
      <input name="ctc" value={formData.ctc} onChange={handleChange} placeholder="CTC" required type="number" />
      <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" required type="email" />
      <button type="submit">Add Employee</button>
    </form>
  );
};

export default AddEmployeeForm;
