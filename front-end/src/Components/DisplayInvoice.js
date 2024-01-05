import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import  { useState, useEffect } from 'react';

const DisplayInvoice = () => {


    
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    // Fetch data from Spring Boot backend
    fetch('http://localhost:8080/payments/payment/details/101')
      .then((response) => response.json())
      .then((data) => {
        // Set the retrieved data to the invoices state
        setInvoices(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="container mt-4">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Register ID</th>
            <th>Name</th>
            <th>Course ID</th>
            <th>Course Name</th>
            <th>Course Duration</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Total Course Fee</th>
            <th>Payment Type</th>
            <th>Amount Paid</th>
            <th>Pending Amount</th>
            <th>Payment Option</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((invoice, index) => (
            <tr key={index}>
              {/* ... populate table cells with invoice data ... */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayInvoice;
