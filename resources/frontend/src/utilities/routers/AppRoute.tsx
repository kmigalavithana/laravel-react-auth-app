import React from 'react';
import { Route, Routes } from "react-router-dom";
import SignIn from "../../componets/signIn/SignIn.tsx";
import ProtectedRoute from "./ProtectedRoute";

const AppRoute: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <div>Dashboard</div>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRoute;
