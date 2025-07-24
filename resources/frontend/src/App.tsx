import * as React from "react";
import AppRoutes from './utilities/routers/AppRoutes.tsx';
import axios from "axios";

// Axios global settings
axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;
axios.defaults.withCredentials = true;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';

// Add interceptor for Bearer token
axios.interceptors.request.use(
  (config) => {
    // Retrieve token from localStorage (or where you store your token)
    const token = localStorage.getItem("token"); // Change "token" if you use a different key
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const App: React.FC = () => {
  return (
    <>
      <AppRoutes />
    </>
  );
};

export default App;
