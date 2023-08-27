import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://e91f90d55ffe98ca.mokky.dev',
});

instance.interceptors.request.use((config) => {
  const token = window.localStorage.getItem('token');
  config.headers.Authorization = `Bearer ${token}`
  return config;
});

export default instance;
