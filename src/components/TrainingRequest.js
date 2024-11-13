// src/components/TrainingRequest.js
import React, { useState } from 'react';
import { createTrainingRequest } from '../config/api';

function TrainingRequest() {
  const [formData, setFormData] = useState({
    courseName: '',
    description: '',
    concepts: '',
    duration: '',
    employeePosition: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createTrainingRequest(formData);
      alert('Request submitted successfully!');
      console.log(response.data);
    } catch (error) {
      console.error('Error creating request:', error);
      alert('Error submitting request.');
    }
  };

  return (
    <div className="form-container">
      <h2>Create Request</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="courseName" placeholder="Course Name" value={formData.courseName} onChange={handleChange} />
        <input type="text" name="description" placeholder="Description" value={formData.description} onChange={handleChange} />
        <input type="text" name="concepts" placeholder="Concepts" value={formData.concepts} onChange={handleChange} />
        <input type="text" name="duration" placeholder="Duration" value={formData.duration} onChange={handleChange} />
        <input type="text" name="employeePosition" placeholder="Employee Position" value={formData.employeePosition} onChange={handleChange} />
        <button type="submit">Submit Request</button>
      </form>
    </div>
  );
}

export default TrainingRequest;
