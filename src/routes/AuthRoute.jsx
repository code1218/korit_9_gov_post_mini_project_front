import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Login from "../pages/auth/Login";
import SignUp from "../pages/auth/SignUp";
import { useEffect } from "react";

function AuthRoute() {
    const navigate = useNavigate();
    const location = useLocation();
    const {pathname} = location;

    useEffect(() => {
        if (pathname === "/") {
            navigate("/auth/login");
        }
    }, [pathname]);

    return <Routes>
        <Route path="/" element={<></>} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/signup" element={<SignUp />} />
    </Routes>
}

export default AuthRoute;