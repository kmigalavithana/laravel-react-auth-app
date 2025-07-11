import React from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
    checkUserAuthentication,
    checkUserIsAdmin,
    checkUserTokenNotEmpty,
} from "./checkUserAuthentication";
import SignIn from "../../componets/signIn/SignIn.tsx";
import Dashboard from "../../componets/dashbord/Dashboard.tsx";

interface RootState {
    auth: {
        token: string;
        user_id: string | null;
        user_role: number;
        isAuthenticated: boolean;
    };
}

const AppRoutes: React.FC = () => {
    const { token, user_role, isAuthenticated } = useSelector(
        (state: RootState) => state.auth,
    );

    return (
        <Routes>
            <Route path="/" element={<SignIn />} />
            <Route
                path="/dashboard"
                element={
                    checkUserAuthentication(isAuthenticated) &&
                    checkUserTokenNotEmpty(token) &&
                    checkUserIsAdmin(user_role) ? (
                        <Dashboard />
                    ) : (
                        <Navigate to="/" replace />
                    )
                }
            />
        </Routes>
    );
};

export default AppRoutes;
