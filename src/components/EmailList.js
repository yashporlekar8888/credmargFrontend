import React, { useEffect, useState } from 'react';
import api from '../services/api';

const EmailList = () => {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    const fetchEmails = async () => {
      try {
        const response = await api.get('/emails');
        setEmails(response.data);
      } catch (error) {
        console.error('Error fetching emails:', error);
      }
    };

    fetchEmails();
  }, []);

  return (
    <div>
      <h2>Sent Emails</h2>
      <ul>
       

{emails.map((email, index) => (
  <li key={index}>{email.content}</li>
))}
      </ul>
    </div>
  );
};

export default EmailList;
