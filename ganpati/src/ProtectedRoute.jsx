import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');

  if (!token) {
    // Not logged in
    return <Navigate to="/admin/login" replace />;
  }

  return children; // Logged in
};

export default ProtectedRoute;
