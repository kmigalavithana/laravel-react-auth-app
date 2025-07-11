import React from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
    checkUserAuthentication,
    checkUserIsAdmin,
    checkUserTokenNotEmpty,
} from "./checkUserAuthentication";
import SignIn from "../../componets/signIn/SignIn.tsx";
import Products from "../../componets/products/Products.tsx";
import type {RootState} from "../../store.tsx";



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
                        <Products />
                    ) : (
                        <Navigate to="/" replace />
                    )
                }
            />
        </Routes>
    );
};

export default AppRoutes;
