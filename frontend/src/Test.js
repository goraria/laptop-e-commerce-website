import React, {Component} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ListProducts from "./pages/ListProducts";
import Cart from "./pages/Cart";
import UserProfile from "./pages/UserProfile";

class Test extends Component {
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

export default Test;
