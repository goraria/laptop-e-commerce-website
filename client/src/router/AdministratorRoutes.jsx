import { React, useState, useEffect, Component } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { } from 'react-bootstrap';
import axios from "axios";

///////////////////////////////////////

import { WithoutMenuPage } from "../pages/layouts/WithoutMenuPage";
import { WithoutNavbarPage } from "../pages/layouts/WithoutNavbarPage";
import { ContainerPage } from "../pages/layouts/ContainerPage";
import { FluidPage } from "../pages/layouts/FluidPage";
import { BlankPage } from "../pages/layouts/BlankPage";

import { LoginPage } from "../pages/authentication/LoginPage";
import { RegisterPage } from "../pages/authentication/RegisterPage";
import { ForgotPasswordPage } from "../pages/authentication/ForgotPasswordPage";
import { AccountPage } from "../pages/account/AccountPage";
import { Connections } from "../pages/account/ConnectionsPage";
import { NotificationPage } from "../pages/account/NotificationPage";
import { ErrorPage } from "../pages/misc/ErrorPage";
import { MaintenancePage } from "../pages/misc/MaintenancePage";

import { AccordionPage } from "../pages/user-interface/AccordionPage";
import { AlertPage } from "../pages/user-interface/AlertPage";
import { BadgesPage } from "../pages/user-interface/BadgePage";
import { ButtonPage } from "../pages/user-interface/ButtonPage";
import { CarouselPage } from "../pages/user-interface/CarouselPage";
import { CardsPage } from   "../pages/user-interface/CardsPage";
import { CollapsePage } from "../pages/user-interface/CollapsePage";
import { DropdownPage } from "../pages/user-interface/DropdownPage";
import { FooterPage } from "../pages/user-interface/FooterPage";
import { ListGroupPage } from "../pages/user-interface/ListGroupPage";
import { ModalPage } from "../pages/user-interface/ModalPage";
import { NavbarPage } from "../pages/user-interface/NavbarPage";
import { OffcanvasPage } from "../pages/user-interface/OffcanvasPage";
import { PaginationBreadcrumbsPage } from "../pages/user-interface/PaginationBreadcrumbsPage";
import { ProgressPage } from "../pages/user-interface/ProgressPage";
import { SpinnersPage } from "../pages/user-interface/SpinnersPage";
import { TabsPillPage } from "../pages/user-interface/TabsPillPage";
import { ToastPage } from "../pages/user-interface/ToastPage";
import { TooltipPopoverPage } from "../pages/user-interface/TooltipPopoverPage";
import { TypographyPage } from "../pages/user-interface/TypographyPage";

import { BoxiconsPage } from "../pages/icons/BoxiconPage";

import { BasicInputPage } from "../pages/form-element/BasicInputPage";
import { InputGroupPage } from "../pages/form-element/InputGroupPage";
import { HorizontalFormPage } from "../pages/form-layout/HorizontalFormPage";
import { VerticalFormPage } from "../pages/form-layout/VerticalFormPage";
import { TablesPage } from "../pages/TablesPage";
import { DashboardPage } from "../pages/DashboardPage";

import { PerfectScrollbarPage } from "../pages/extended-ui/PerfectScrollbar";
import { TextDividerPage } from "../pages/extended-ui/TextDividerPage";

///////////////////////////////////////

// import Header from "../components/Header.jsx";
// import Copyright from "../layouts/Copyright.jsx";

// import Home from "../pages/Home.jsx";
// import About from "../pages/About.jsx";
// import Contact from "../pages/Contact.jsx";

// import Product from "../pages/Product.jsx";
// import ListProducts from "../pages/ListProducts.jsx";
// import Cart from "../pages/Cart.jsx";
// import Login from "../components/Login.jsx";
// import Register from "../components/Register.jsx";
// import UserProfile from "../pages/UserProfile.jsx";

// import Protected from "../utils/Protected.jsx";
// import Manager from "../utils/Manager.jsx";
// import NotFound from "../pages/NotFound.jsx";

///////////////////////////////////////

const AdministratorRoutes = () => {
    // const [isAuthenticated, setIsAuthenticated] = useState(false);
    // const [userRole, setUserRole] = useState(null);
    //
    // useEffect(() => {
    //     const token = localStorage.getItem('token');
    //     if (token) {
    //         axios.get('/api/auth/check', { headers: { Authorization: token } })
    //             .then(response => {
    //                 setIsAuthenticated(true);
    //                 setUserRole(response.data.role);
    //                 console.log(response.data.role)
    //             })
    //             .catch(() => {
    //                 setIsAuthenticated(false);
    //             });
    //     }
    // }, []);
    return (
        <Routes>
            <Route path="/" element={<DashboardPage />} />

            <Route path="/layout/without-menu" element={<WithoutMenuPage />} />
            <Route path="/layout/without-navbar" element={<WithoutNavbarPage />} />
            <Route path="/layout/container" element={<ContainerPage />} />
            <Route path="/layout/fluid" element={<FluidPage />} />
            <Route path="/layout/fluid" element={<FluidPage />} />
            <Route path="/layout/blank" element={<BlankPage />} />

            <Route path="/ui/accordion" element={<AccordionPage />} />
            <Route path="/ui/alerts" element={<AlertPage />} />
            <Route path="/ui/badges" element={<BadgesPage />} />
            <Route path="/ui/buttons" element={<ButtonPage />} />
            <Route path="/ui/cards" element={<CardsPage />} />
            <Route path="/ui/carousel" element={<CarouselPage />} />
            <Route path="/ui/collapse" element={<CollapsePage />} />
            <Route path="/ui/dropdown" element={<DropdownPage />} />
            <Route path="/ui/footer" element={<FooterPage />} />
            <Route path="/ui/list-group" element={<ListGroupPage />} />
            <Route path="/ui/modals" element={<ModalPage />} />
            <Route path="/ui/navbar" element={<NavbarPage />} />
            <Route path="/ui/offcanvas" element={<OffcanvasPage />} />
            <Route path="/ui/pagination-breadcrumbs" element={<PaginationBreadcrumbsPage />} />
            <Route path="/ui/progress" element={<ProgressPage />} />
            <Route path="/ui/spinners" element={<SpinnersPage />} />
            <Route path="/ui/tabs-pills" element={<TabsPillPage />} />
            <Route path="/ui/toasts" element={<ToastPage />} />
            <Route path="/ui/tooltips-popovers" element={<TooltipPopoverPage />} />
            <Route path="/ui/typography" element={<TypographyPage />} />

            <Route path="/auth/login" element={<LoginPage />} />
            <Route path="/auth/register" element={<RegisterPage />} />
            <Route path="/auth/forgot-password" element={<ForgotPasswordPage />} />

            <Route path="/account/settings" element={<AccountPage />} />
            <Route path="/account/notifications" element={<NotificationPage />} />
            <Route path="/account/connections" element={<Connections />} />

            <Route path="/misc/error" element={<ErrorPage />} />
            <Route path="/misc/under-maintenance" element={<MaintenancePage />} />

            <Route path="/extended-ui/perfect-scrollbar" element={<PerfectScrollbarPage />} />
            <Route path="/extended-ui/text-divider" element={<TextDividerPage />} />

            <Route path="/boxicons" element={<BoxiconsPage />} />

            <Route path="/form/basic-inputs" element={<BasicInputPage />} />
            <Route path="/form/input-groups" element={<InputGroupPage />} />

            <Route path="/form-layout/horizontal-form" element={<HorizontalFormPage />} />
            <Route path="/form-layout/vertical-form" element={<VerticalFormPage />} />

            <Route path="/tables" element={<TablesPage />} />



            {/*<Header />*/}
            {/*<main>*/}
            {/*    <Routes>*/}
            {/*        <Route path="/home" element={<Home />} />*/}
            {/*        <Route path="/about" element={<About />} />*/}
            {/*        <Route path="/contact" element={<Contact />} />*/}
            {/*        <Route path="/product" element={<Product />} />*/}
            {/*        <Route path="/search" element={<ListProducts />} />*/}
            {/*        <Route path="/cart" element={<Cart />} />*/}

            {/*        <Route path="/login" element={<Login />} />*/}
            {/*        /!*<Route path="/signup" element={<Signup />} />*!/*/}
            {/*        <Route path="/register" element={<Register />} />*/}

            {/*        <Route path="/profile" element={*/}
            {/*            <Protected isAuthenticated={isAuthenticated}>*/}
            {/*                <UserProfile />*/}
            {/*            </Protected>*/}
            {/*        } />*/}

            {/*        <Route path="/admin" element={*/}
            {/*            <Manager isAuthenticated={isAuthenticated} userRole={userRole}>*/}
            {/*                <DashboardPage />*/}
            {/*            </Manager>*/}
            {/*        } />*/}

            {/*        <Route path="/404" element={<NotFound />} />*/}
            {/*    </Routes>*/}
            {/*</main>*/}
            {/*<Copyright />*/}
        </Routes>
    )
}
export default AdministratorRoutes;