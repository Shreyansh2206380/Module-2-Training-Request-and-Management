// src/components/Dashboard.js
import React, { useState, useEffect } from 'react';
import { getTrainingRequests } from '../config/api';

function Dashboard() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await getTrainingRequests();
        setRequests(response.data);
      } catch (error) {
        console.error('Error fetching requests:', error);
      }
    };

    fetchRequests();
  }, []);

  return (
    <div className="dashboard-container">
      <h1>Training Requests</h1>
      <div>
        {requests.map((request) => (
          <div key={request.id}>
            <h3>{request.courseName}</h3>
            <p>{request.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
