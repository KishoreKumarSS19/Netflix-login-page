import React from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="dashboard-wrapper">
      <div className="login-header">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" 
          alt="Netflix" 
          className="netflix-logo" 
        />
      </div>
      <div className="dashboard-content">
        <h2>Welcome to the Dashboard!</h2>
        <p>You have successfully signed in.</p>
        <button className="logout-btn" onClick={handleLogout}>Sign Out</button>
      </div>
    </div>
  );
}

export default Dashboard;
