import { useLocation } from "react-router-dom";
import Layout from "./layouts/Layout";
import AdministratorRoutes from "./router/AdministratorRoutes.jsx";
import { Blank } from "./layouts/Blank";
import Header from "./layouts/Header.jsx";
import UserRoutes from "./router/UserRoutes.jsx";
import Footer from "./layouts/Footer.jsx";

function App() {
    // const location = useLocation();
    // const isAuthPath = location.pathname.includes("auth") || location.pathname.includes("error") || location.pathname.includes("under-maintenance") | location.pathname.includes("blank");
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
            <Layout>
                <AdministratorRoutes />
            </Layout>
            <>
                <Header/>
                <UserRoutes/>
                <Footer/>
            </>
        </>
    );
}

export default App;
