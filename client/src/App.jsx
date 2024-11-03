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

const App = () => {
    const [auth, setAuth] = useState({
        isAuthenticated: false,
        role: null
    });
    const [loading, setLoading] = useState(true);  // Thêm trạng thái loading
    const navigate = useNavigate();

    const authenticationCheck = async () => {
        const token = localStorage.getItem('token');
        if (!token) {
            setLoading(false);
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
            localStorage.removeItem('token');
            navigate('/404');
        } finally {
            setLoading(false);  // Dừng loading sau khi fetch
        }
    };

    useEffect(() => {
        authenticationCheck();
    }, [navigate]);

    if (loading) return <Frame><Loading/></Frame>;  // Hiển thị loading nếu đang lấy dữ liệu

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
