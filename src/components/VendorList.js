import React, { useEffect, useState } from 'react';
import api from '../services/api';

const VendorList = () => {
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    const fetchVendors = async () => {
      try {
        const response = await api.get('/vendors');
        setVendors(response.data);
      } catch (error) {
        console.error('Error fetching vendors:', error);
      }
    };

    fetchVendors();
  }, []);

  const sendEmails = async () => {
    try {
      await api.post('/vendors/email');
      alert('Emails sent successfully');
    } catch (error) {
      console.error('Error sending emails:', error);
    }
  };

  return (
    <div>
      <h2>Vendors</h2>
      <button onClick={sendEmails}>Send Emails to Vendors</button>
      <ul>
      {vendors.map((vendor) => (
  <li key={vendor.id}>
    {vendor.name} - {vendor.email} - {vendor.upi}
  </li>
))}
      </ul>
    </div>
  );
};

export default VendorList;
