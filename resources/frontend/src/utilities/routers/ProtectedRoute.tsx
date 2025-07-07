import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

// Adjust this selector to match your actual state shape
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { token, user_id, isAuthenticated } = useSelector((state: any) => state.auth);

  if (token && user_id === 1 && isAuthenticated) {
    return <>{children}</>;
  }
  // Redirect to sign-in if any condition fails
  return <Navigate to="/" replace />;
};

export default ProtectedRoute;
