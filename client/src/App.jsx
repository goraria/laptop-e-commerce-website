import { BrowserRouter, Route, Router, Routes, useLocation } from "react-router-dom";
import Layout from "./layouts/Layout";
import Frame from "./layouts/Frame";
import AdministratorRoutes from "./router/AdministratorRoutes.jsx";
import { Blank } from "./layouts/Blank";
// import Header from "./layouts/Header.jsx";
import UserRoutes from "./router/UserRoutes.jsx";
// import Footer from "./layouts/Footer.jsx";

import Login from "./pages/authentication/Login.jsx";
import Protected from "./utils/Protected.jsx";
import { DashboardPage } from "./pages/DashboardPage.jsx";
import Home from "./pages/overview/Home.jsx";

import DataTable from "./pages/DataTable.jsx";
import { DataTables } from "./components/datatables/DataTables.jsx";
import NotFound from "./pages/overview/NotFound.jsx";
import ShareRoutes from "./router/ShareRoutes.jsx";


const App = () => {
    const user = {
        isAuthenticated: true,
        role: 1
    };

    return (
        <Routes>
            <Route path="/*" element={<Frame><ShareRoutes /></Frame>} />
            <Route
                path="/user/*"
                element={
                    <Protected isAllowed={user.isAuthenticated && user.role === 0} redirectTo="/login">
                        <Frame>
                            <UserRoutes />
                        </Frame>
                    </Protected>
                }
            />
            <Route
                path="/admin/*"
                element={
                    <Protected isAllowed={user.isAuthenticated && user.role === 1} redirectTo="/login">
                        <Layout>
                            <AdministratorRoutes />
                        </Layout>
                    </Protected>
                }
            />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default App;
