import { React, useState, useEffect, Component } from 'react';
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import { } from 'react-bootstrap';
import axios from "axios";

import Header from "../layouts/Header.jsx";
import Copyright from "../layouts/Copyright.jsx";

import Home from "../pages/overview/Home.jsx";
import About from "../pages/overview/About.jsx";
import Contact from "../pages/overview/Contact.jsx";

import Product from "../pages/product/Product.jsx";
import ListProducts from "../pages/product/ListProducts.jsx";
import Cart from "../pages/user-infomation/Cart.jsx";
import Login from "../pages/authentication/Login.jsx";
import Register from "../pages/authentication/Register.jsx";
import UserProfile from "../pages/user-infomation/UserProfile.jsx";

import Protected from "../utils/Protected.jsx";
import Manager from "../utils/Manager.jsx";
import NotFound from "../pages/overview/NotFound.jsx";


function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userRole, setUserRole] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            axios.get('/api/auth/check', { headers: { Authorization: token } })
                .then(response => {
                    setIsAuthenticated(true);
                    setUserRole(response.data.role);
                    console.log(response.data.role)
                })
                .catch(() => {
                    setIsAuthenticated(false);
                });
        }
    }, []);

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product" element={<Product />} />
            <Route path="/search" element={<ListProducts />} />
            <Route path="/cart" element={<Cart />} />

            <Route path="/login" element={<Login />} />
            {/* <Route path="/signup" element={<Signup />} /> */}
            <Route path="/register" element={<Register />} />

            <Route path="/profile" element={
                <Protected isAuthenticated={isAuthenticated}>
                    <UserProfile />
                </Protected>
            } />

            <Route path="/admin" element={
                <Manager isAuthenticated={isAuthenticated} userRole={userRole}>
                    <Login />
                </Manager>
            } />

            <Route path="/404" element={<NotFound />} />
        </Routes>
    )
}

export default App;