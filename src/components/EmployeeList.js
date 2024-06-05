import React, { useEffect, useState } from 'react';
import api from '../services/api';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await api.get('/employees');
        setEmployees(response.data);
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };

    fetchEmployees();
  }, []);

  return (
    <div>
      <h2>Employees</h2>
      <ul>
      {employees.map((employee) => (
  <li key={employee.id}>
    {employee.name} - {employee.designation} - {employee.email}
  </li>
))}
      </ul>
    </div>
  );
};

export default EmployeeList;
