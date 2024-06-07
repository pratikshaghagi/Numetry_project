import React, { useState, useEffect } from 'react';
import './pages.css'; // Import CSS for styling

const Account = () => {
  const [account, setAccount] = useState(null);

  useEffect(() => {
    // Mock API call to fetch account data
    const fetchAccountData = async () => {
      // Simulate an API call
      const response = await new Promise((resolve) =>
        setTimeout(() => {
          resolve({
            username: 'pratikshaghagi',
            email: 'parti@gmail.com',
            phone: '123-456-7890',
            address: 'Nagpur',
            subscriptionStatus: 'Active',
            memberSince: 'January 2020',
            lastLogin: 'May 25, 2024'
          });
        }, 1000)
      );
      setAccount(response);
    };

    fetchAccountData();
  }, []);

  if (!account) {
    return <div>Loading...</div>;
  }

  return (
    <div className="account-container">
      <h1>Account Information</h1>
      <div className="account-details">
        <p><strong>Username:</strong> {account.username}</p>
        <p><strong>Email:</strong> {account.email}</p>
        <p><strong>Phone:</strong> {account.phone}</p>
        <p><strong>Address:</strong> {account.address}</p>
        <p><strong>Subscription Status:</strong> {account.subscriptionStatus}</p>
        <p><strong>Member Since:</strong> {account.memberSince}</p>
        <p><strong>Last Login:</strong> {account.lastLogin}</p>
      </div>
    </div>
  );
};

export default Account;
