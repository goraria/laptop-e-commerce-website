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
function App() {
    // const location = useLocation();
    // const isAuthPath = location.pathname.includes("auth") || location.pathname.includes("error") || location.pathname.includes("under-maintenance") | location.pathname.includes("blank");

    const user = {
        isAuthenticated: true,
        role: 1
    };

    return (
        <>
            {/*{isAuthPath ? (*/}
            {/*    <AdministratorRoutes>*/}
            {/*        <Blank/>*/}
            {/*    </AdministratorRoutes>*/}
            {/*) : (*/}
            {/*    <Layout>*/}
            {/*        <AdministratorRoutes />*/}
            {/*    </Layout>*/}
            {/*)}*/}

            {/* {user.isAuthenticated && user.role === 1 && (
                <Layout><AdministratorRoutes /></Layout>
            )}

            {user.isAuthenticated && user.role === 0 && (
                <Frame><UserRoutes /></Frame>
            )} */}

            {/* <Router>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route
                        path="/admin"
                        element={
                            <Protected
                                isAllowed={user.isAuthenticated && user.role === 1}
                                redirectTo="/login"
                            >
                                <Layout>
                                    <DashboardPage />
                                </Layout>
                            </Protected>
                        }
                    />
                    <Route
                        path="/user"
                        element={
                            <Protected
                                isAllowed={user.isAuthenticated && user.role === 0}
                                redirectTo="/login"
                            >
                                <Frame>
                                    <Home />
                                </Frame>
                            </Protected>
                        }
                    />
                </Routes>
            </Router> */}
            {/* <Layout><AdministratorRoutes /></Layout> */}
            <Frame><UserRoutes /></Frame>
            {/* <div className="container mt-5">
                <DataTables />
            </div> */}

            {/* <Protected
                isAllowed={user.isAuthenticated && user.role === 1}
                redirectTo="/login"
            >
                <Layout><AdministratorRoutes /></Layout>
            </Protected>
            <Protected
                isAllowed={user.isAuthenticated && user.role === 0}
                redirectTo="/login"
            >
                <Frame><UserRoutes /></Frame>
            </Protected> */}
        </>

    );
}

export default App;
