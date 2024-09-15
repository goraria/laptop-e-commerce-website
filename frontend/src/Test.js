import React, {Component} from 'react';
import {
    Container, Carousel, Row, Col, Card, Button, Image
} from 'react-bootstrap';
import {BrowserRouter, Link, Route, Router, Routes} from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import * as byPrefixAndName from "@fortawesome/free-solid-svg-icons";
import './App.css';
import './pages/Home';
import './pages/UserProfile';
import './pages/Cart';
import Home from "./pages/Home";
import UserProfile from "./pages/UserProfile";
import Cart from "./pages/Cart";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";

const products = [
    { id: 1, name: 'Product 1', price: '$5', img: 'https://via.placeholder.com/300x200', description: 'Mô tả ngắn về Product 1' },
    { id: 2, name: 'Product 2', price: '$6', img: 'https://via.placeholder.com/300x200', description: 'Mô tả ngắn về Product 2' },
    { id: 3, name: 'Product 3', price: '$7', img: 'https://via.placeholder.com/300x200', description: 'Mô tả ngắn về Product 3' },
    { id: 4, name: 'Product 4', price: '$8', img: 'https://via.placeholder.com/300x200', description: 'Mô tả ngắn về Product 4' },
    { id: 5, name: 'Product 5', price: '$9', img: 'https://via.placeholder.com/300x200', description: 'Mô tả ngắn về Product 5' },
    { id: 6, name: 'Product 6', price: '$10', img: 'https://via.placeholder.com/300x200', description: 'Mô tả ngắn về Product 6' },
];

// let Test = () => {
//     return (
//         <div>
//             <Carousel>
//                 <Carousel.Item>
//                     <Image
//                         className="d-block w-100"
//                         src="https://via.placeholder.com/1200x400"
//                         alt="First slide"
//                     />
//                     <Carousel.Caption>
//                         <h3>Sale Off 50%</h3>
//                         <p>Sale off all product in September</p>
//                     </Carousel.Caption>
//                 </Carousel.Item>
//                 <Carousel.Item>
//                     <Image
//                         className="d-block w-100"
//                         src="https://via.placeholder.com/1200x400"
//                         alt="Second slide"
//                     />
//                     <Carousel.Caption>
//                         <h3>Newest</h3>
//                         <p>Famous Brand in our website</p>
//                     </Carousel.Caption>
//                 </Carousel.Item>
//             </Carousel>
//             <Container className="my-4">
//                 <h2 className="text-center mb-4">Sản phẩm nổi bật</h2>
//                 <Row>
//                     {products.map(product => (
//                         <Col key={product.id} sm={12} md={6} lg={4} className="mb-4">
//                             <Card>
//                                 <Card.Img variant="top" src={product.img}/>
//                                 <Card.Body>
//                                     <Card.Title>{product.name}</Card.Title>
//                                     <Card.Text>
//                                         {product.description}. Giá: {product.price}
//                                     </Card.Text>
//                                     <Button variant="primary">Mua ngay</Button>
//                                 </Card.Body>
//                             </Card>
//                         </Col>
//                     ))}
//                 </Row>
//             </Container>
//         </div>
//     );
// }

class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            // <Router location={Test} navigator={}>
            //     <nav>
            //         <ul>
            //             <li>
            //                 <Link to="/">Trang Chủ</Link>
            //             </li>
            //             <li>
            //                 <Link to="/profile">Giới Thiệu</Link>
            //             </li>
            //             <li>
            //                 <Link to="/cart">Liên Hệ</Link>
            //             </li>
            //         </ul>
            //     </nav>
            //
            //     <Routes>
            //         <Route path="/" element={<Home />} />
            //         <Route path="/profile" element={<UserProfile />} />
            //         <Route path="/cart" element={<Cart />} />
            //     </Routes>
            // </Router>
            <BrowserRouter>
                <div>
                    <Header />
                    <main>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about/about" element={<About />} />
                            <Route path="/contact" element={<Contact />} />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </BrowserRouter>
        )
    }
}

export default Test;
