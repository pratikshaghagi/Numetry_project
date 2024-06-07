import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './pages.css'; // Import CSS file for styling

const BillingHistory = () => {
  const [billingHistory, setBillingHistory] = useState([]);

  useEffect(() => {
    const fetchBillingHistory = async () => {
      try {
        // Fetch billing history data
        const response = await axios.get('YOUR_API_ENDPOINT/billing-history');
        setBillingHistory(response.data);
      } catch (error) {
        console.error('Error fetching billing history:', error);
      }
    };

    fetchBillingHistory();
  }, []);

  return (
    <div className="billing-history-container">
      <h2>Billing History</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {billingHistory.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.description}</td>
              <td>{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BillingHistory;
