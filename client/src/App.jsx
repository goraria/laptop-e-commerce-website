import React, { useState, useEffect, Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { } from 'react-bootstrap';

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import ListProducts from "./elements/ListProducts.jsx";
import Cart from "./pages/Cart.jsx";
import Product from "./pages/Product.jsx";
import UserProfile from "./pages/UserProfile.jsx";


import Administrator from "./managements/Administrator.jsx";
import Statistic from "./managements/Statistic.jsx";
import Setting from "./managements/Setting.jsx";
// import Dashboard from "./managements/Dashboard.jsx";
import Icons from "./managements/Icons.jsx";
import Map from "./managements/Map.jsx";
// import Notifications from "./managements/Notifications.jsx";
import TableList from "./managements/TableList.jsx";
import Typography from "./managements/Typography.jsx";
// import UserProfile from "./managements/UserProfile.jsx";


import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import Register from "./components/Register.jsx";

// function App() {
//     const [users, setUsers] = useState([]);
//     useEffect(() => {
//         fetch('/api/users')
//             .then(response => response.json())
//             .then(data => setUsers(data))
//             .catch(error => console.error('Error:', error));
//     }, []);
//     return (
//         <div>
//             <Header />
//             <div className="container">
//                 <Test/>
//             </div>
//             <Footer />
//         </div>
//     );
// }

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <main>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/product" element={<Product />} />
                            <Route path="/search" element={<ListProducts />} />
                            <Route path="/cart" element={<Cart />} />
                            <Route path="/profile" element={<UserProfile />} />

                            {/* <Route path="/map" element={<Map />} /> */}
                            {/* <Route path="/notifications" element={<Notifications />} /> */}
                            {/* <Route path="/tables" element={<TableList />} />
                            <Route path="/typography" element={<Typography />} />
                            <Route path="/icons" element={<Icons />} /> */}

                            {/* <Route path="/dashboard" element={<Dashboard />} /> */}
                            <Route path="/statistic" element={<Statistic />} />
                            <Route path="/setting" element={<Setting />} />

                            <Route path="/login" element={<Login />} />
                            <Route path="/signup" element={<Signup />} />
                            <Route path="/register" element={<Register />} />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </BrowserRouter>
        )
    }
}

export default App;
