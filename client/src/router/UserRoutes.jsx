import { React, useState, useEffect, Component } from 'react';
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import { } from 'react-bootstrap';
import axios from "axios";

import Header from "../layouts/Header.jsx";
import Copyright from "../layouts/Copyright.jsx";

import Home from "../pages/overview/Home.jsx";
import About from "../pages/overview/About.jsx";
import Contact from "../pages/overview/Contact.jsx";

import Product from "../pages/overview/Product.jsx";
import ProductList from "../pages/overview/ProductList.jsx";
import Cart from "../pages/user-component/Cart.jsx";
import Login from "../pages/authentication/Login.jsx";
import Register from "../pages/authentication/Register.jsx";
import UserProfile from "../pages/user-component/UserProfile.jsx";
import AddressManagement from "../pages/user-infomation/AddressManagement.jsx";

import Protected from "../utils/Protected.jsx";
import Manager from "../utils/Manager.jsx";
import NotFound from "../pages/overview/NotFound.jsx";
import Order from '../pages/user-component/Order.jsx';
import CheckOut from '../pages/user-component/Checkout.jsx';

export const UserRoutes = () => {
    // const [isAuthenticated, setIsAuthenticated] = useState(false);
    // const [userRole, setUserRole] = useState(null);
    //
    // useEffect(() => {
    //     const token = localStorage.getItem('token');
    //     if (token) {
    //         axios.get('http://localhost:5172/authentication/check', { headers: { Authorization: token } })
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
            {/*<Route path="/" element={<Home />} />*/}
            {/*<Route path="/about" element={<About />} />*/}
            {/*<Route path="/contact" element={<Contact />} />*/}
            {/*<Route path="/product" element={<Product />} />*/}
            {/*<Route path="/search" element={<ProductList />} />*/}

            {/*<Route path="/login" element={<Login />} />*/}
            {/*<Route path="/signup" element={<Signup />} />*/}
            {/*<Route path="/register" element={<Register />} />*/}

            <Route path="/profile" element={<UserProfile />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/address" element={<AddressManagement />} />
            <Route path="/order" element={<Order />} />
            <Route path="/checkout" element={<CheckOut />} />

            <Route path="/404" element={<NotFound />} />
        </Routes>
    )
}
