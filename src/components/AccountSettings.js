import React, { useState, useEffect } from 'react';
import './AccountSettings.css'; // Import CSS file for styling

const AccountSetting = () => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    // Fetch user information from local storage
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    setUserInfo(loggedInUser);
  }, []);

  const handleLogout = () => {
    // Clear logged-in user information from local storage
    localStorage.removeItem('loggedInUser');
    // Redirect to homepage
    window.location.href = '/';
  };

  return (
    <div className="account-setting-container">
      <h2>Account Settings</h2>
      {userInfo && (
        <div>
          <div>
            <strong>Name:</strong> {userInfo.fullName}
          </div>
          <div>
            <strong>Email:</strong> {userInfo.email}
          </div>
          <div>
            <strong>Phone Number:</strong> {userInfo.phoneNumber}
          </div>
          <div>
            <strong>Company Name:</strong> {userInfo.companyName}
          </div>
          <div>
            <strong>Agency:</strong> {userInfo.isAgency ? 'Yes' : 'No'}
          </div>
        </div>
      )}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default AccountSetting;
