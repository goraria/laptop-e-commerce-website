import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Layout from "./layouts/Layout";
import Frame from "./layouts/Frame";
import AdministratorRoutes from "./router/AdministratorRoutes.jsx";
import UserRoutes from "./router/UserRoutes.jsx";
import ShareRoutes from "./router/ShareRoutes.jsx";
import Protected from "./utils/Protected.jsx";
import NotFound from "./pages/overview/NotFound.jsx";
import axios from 'axios';

const App = () => {
    const [user, setUser] = useState({
        isAuthenticated: false,
        role: null
    });
    const navigate = useNavigate();

    const fetchData = async () => {
        const token = localStorage.getItem('token');
        if (!token) {
            // navigate('/404'); // Điều hướng nếu không có token
            return;
        }

        try {
            const response = await axios.get('http://localhost:5172/authentication/check', {
                headers: { Authorization: `Bearer ${token}` }
            });
            setUser({
                isAuthenticated: true,
                role: response.data.role
            });
        } catch (error) {
            setUser({ isAuthenticated: false, role: null });
            navigate('/404'); // Điều hướng nếu token không hợp lệ
        }
    };

    useEffect(() => {
        // fetchData();
    }, [navigate]);

    return (
        <Routes>
            {/*<Route path="/*" element={<Frame><ShareRoutes /></Frame>} />*/}

            {/*<Route*/}
            {/*    path="/*"*/}
            {/*    element={*/}
            {/*        // <Protected isAllowed={user.isAuthenticated && user.role === 0} redirectTo="/login">*/}
            {/*            <Frame>*/}
            {/*                <UserRoutes />*/}
            {/*            </Frame>*/}
            {/*        // </Protected>*/}
            {/*    }*/}
            {/*/>*/}

            <Route
                path="/admin/*"
                element={
                    // <Protected isAllowed={user.isAuthenticated && user.role === 1} redirectTo="/login">
                        <Layout>
                            <AdministratorRoutes />
                        </Layout>
                    // </Protected>
                }
            />

            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default App;
