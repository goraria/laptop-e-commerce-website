import React, {useState, useEffect, Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {  } from 'react-bootstrap';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ListProducts from "./pages/ListProducts";
import Cart from "./pages/Cart";
import UserProfile from "./pages/UserProfile";

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
                            <Route path="/product" element={<ListProducts />} />
                            <Route path="/search" element={<ListProducts />} />
                            <Route path="/cart" element={<Cart />} />
                            <Route path="/profile" element={<UserProfile />} />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </BrowserRouter>
        )
    }
}

export default App;
