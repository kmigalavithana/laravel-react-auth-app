import { Route, Routes } from "react-router";
import SignIn from "../../componets/signIn/SignIn.tsx";

const AppRoute: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/dashboard" element={<div>Dashboard</div>} />
        </Routes>
    );
};

export default AppRoute;
