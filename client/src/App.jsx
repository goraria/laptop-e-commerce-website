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

const App = () => {
    const [auth, setAuth] = useState({
        isAuthenticated: false,
        role: null
    });
    const navigate = useNavigate();

    const fetchData = async () => {
        const token = localStorage.getItem('token');
        console.log(token);
        if (!token) {
            // navigate('/404'); // Điều hướng nếu không có token
            return;
        }

        try {
            const response = await axios.get('http://localhost:5172/authentication/check', {
                headers: { Authorization: `Bearer ${token}` }
            });
            setAuth({
                isAuthenticated: true,
                role: response.data.role
            });
        } catch (error) {
            setAuth({
                isAuthenticated: false,
                role: null
            });
            navigate('/404'); // Điều hướng nếu token không hợp lệ
        }
        console.log(auth)
    };

    useEffect(() => {
        fetchData();
    }, [navigate]);

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

            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default App;
