import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Login from "../pages/auth/Login";
import SignUp from "../pages/auth/SignUp";
import { useEffect } from "react";
import OAuth2 from "../pages/auth/OAuth2";
import { useMeQuery } from "../queries/usersQueries";
import Logout from "../pages/auth/Logout";
import Loading from "../components/common/Loading";
import Home from "../pages/home/Home";
import LeftSideBar from "../components/common/LeftSideBar";

function AuthRoute() {
    const navigate = useNavigate();
    const location = useLocation();
    const {pathname} = location;

    const meQuery = useMeQuery();

    useEffect(() => {
        const { isLoading, data } = meQuery;
        if (!isLoading) {
            if (data.status !== 200) {
                if (!pathname.startsWith("/auth")) {
                    navigate("/auth/login");
                }
            } else {
                if (pathname.startsWith("/auth")) {
                    navigate("/");
                }
            }
        }
    }, [pathname, meQuery.data]);

    if (meQuery.isLoading) {
        return <Loading />;
    }

    if (meQuery.isSuccess && meQuery.data.status !== 200) {
        return <Routes>
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/login/oauth2" element={<OAuth2 />} />
        </Routes>
    }

    return <LeftSideBar>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/logout" element={<Logout />} />
        </Routes>
    </LeftSideBar>
}

export default AuthRoute;