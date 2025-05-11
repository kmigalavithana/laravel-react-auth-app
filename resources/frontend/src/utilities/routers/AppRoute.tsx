import React from 'react';
import {Route, Routes} from "react-router";
import SignIn from "../../componets/signIn/SignIn.tsx";

const AppRoute: React.FC = () => {
    return (
      <Routes>

          <Route path="/" element={<SignIn />} />

      </Routes>
    );
};

export default AppRoute;
