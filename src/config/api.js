// src/config/api.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api';

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const createTrainingRequest = (requestData) => {
  return api.post('/manager/createCourseRequest', requestData);
};

export const getTrainingRequests = () => {
  return api.get('/manager/getCourseRequests');
};

export const getTrainingRequestById = (id) => {
  return api.get(`/manager/getCourseRequest/${id}`);
};

export const getAllRequests = () => {
  return api.get('/admin/getAllRequests');
};

export const acceptRequest = (id) => {
  return api.put(`/admin/acceptRequest/${id}`);
};

export const rejectRequest = (id) => {
  return api.put(`/admin/rejectRequest/${id}`);
};
