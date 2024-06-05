import React from 'react';
import AddEmployeeForm from './AddEmployeeForm';
import AddVendorForm from './AddVendorForm';
import EmailList from './EmailList';
import EmployeeList from './EmployeeList';
import VendorList from './VendorList';

const Dashboard = () => {
  return (
    <div>
      <h1 style={{textAlign:'center'}}>Admin Dashboard</h1>
      <div>
      <h2>Add Employee</h2>
        <AddEmployeeForm />
      </div>
      <div>
        <h2>Add Vendor</h2>
        <AddVendorForm />
      </div>
      <div>
        <EmployeeList />
      </div>
      <div>
        <VendorList />
      </div>
      <div>
        <EmailList />
      </div>
    </div>
  );
};

export default Dashboard;
