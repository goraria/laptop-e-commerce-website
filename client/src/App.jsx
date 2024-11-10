import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Layout from "./layouts/Layout";
import Frame from "./layouts/Frame";
import { AdministratorRoutes } from "./router/AdministratorRoutes.jsx";
import { UserRoutes } from "./router/UserRoutes.jsx";
import { ShareRoutes } from "./router/ShareRoutes.jsx";
import Protected from "./utils/Protected.jsx";
import NotFound from "./pages/overview/NotFound.jsx";
import axios from 'axios';
import Loading from "./pages/overview/Loading.jsx";
import Login from "./pages/authentication/Login.jsx";

const App = () => {
    const [auth, setAuth] = useState({
        isAuthenticated: false,
        role: null
    });
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const authenticationCheck = async () => {
        const token = localStorage.getItem('token');
        setLoading(true);

        if (!token) {
            setAuth({
                isAuthenticated: false,
                role: null
            });
            setLoading(false);
            // navigate('/login');
            return;
        }

        try {
            const response = await axios.get('http://localhost:5172/authentication/check', {
                headers: { Authorization: `Bearer ${token}` }
            });
            const rolex = response.data.role;
            setAuth({
                isAuthenticated: true,
                role: rolex
            });

            if (rolex === 1) {
                navigate("/admin");
            } else if (rolex === 0) {
                navigate("/user/profile");
            }
        } catch (error) {
            setAuth({
                isAuthenticated: false,
                role: null
            });
            // localStorage.removeItem('token');
            navigate('/404');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        authenticationCheck();
    }, []); // navigate

    if (loading) return <Frame><Loading/></Frame>;

    return (
        <Routes>
            <Route path="/*" element={<Frame><ShareRoutes /></Frame>} />

            <Route
                path="/user/*"
                element={
                    <Protected isAllowed={auth.isAuthenticated && auth.role === 0} redirectTo="/404">
                        <Frame>
                            <UserRoutes />
                        </Frame>
                    </Protected>
                }
            />

            <Route
                path="/admin/*"
                element={
                    <Protected isAllowed={auth.isAuthenticated && auth.role === 1} redirectTo="/404">
                        <Layout>
                            <AdministratorRoutes />
                        </Layout>
                    </Protected>
                }
            />

            <Route path="/login" element={<Frame><Login authenticationCheck={authenticationCheck} /></Frame>} />

            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default App;
