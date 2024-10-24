// src/components/Dashboard.js
import './Dashboard.css';
import React, { useState } from 'react';
import TrainingRequest from './TrainingRequest';

function Dashboard() {
  const [showForm, setShowForm] = useState(false);

  const handleNewRequest = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="dashboard-container">
      <header>
        <h1>Learning Hub</h1>
        <p>Hey Manager!</p>
      </header>

      <div className="stats-container">
        <div className="stat-box">
          <h2>Total Requests</h2>
          <p>1</p>
        </div>
        <div className="stat-box">
          <h2>Completed Requests</h2>
          <p>1</p>
        </div>
        <div className="stat-box">
          <h2>Pending Requests</h2>
          <p>0</p>
        </div>
      </div>

      <button onClick={handleNewRequest} className="new-request-btn">Create New Request</button>

      {showForm && <TrainingRequest />}
    </div>
  );
}

export default Dashboard;
