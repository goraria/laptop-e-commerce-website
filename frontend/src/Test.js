import React from 'react';
import { Container, Navbar, Nav, Carousel, Card, Row, Col, Button, Footer } from 'react-bootstrap';
import './App.css';

function Test() {
    return (
        <div>
            {/* Header */}
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#">E-Commerce</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#">Home</Nav.Link>
                            <Nav.Link href="#">Products</Nav.Link>
                            <Nav.Link href="#">About Us</Nav.Link>
                            <Nav.Link href="#">Contact</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#">Sign In</Nav.Link>
                            <Nav.Link href="#">Cart</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* Carousel */}
            <Container className="mt-3">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://via.placeholder.com/1200x400?text=Promo+1"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Big Sale</h3>
                            <p>Up to 50% off on all items</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://via.placeholder.com/1200x400?text=Promo+2"
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3>New Arrivals</h3>
                            <p>Check out our latest collection</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>

            {/* Product Listing */}
            <Container className="mt-5">
                <h2 className="text-center">Our Products</h2>
                <Row className="mt-4">
                    {/* Product Card */}
                    {Array.from({ length: 8 }).map((_, idx) => (
                        <Col key={idx} md={3} className="mb-4">
                            <Card>
                                <Card.Img variant="top" src="https://via.placeholder.com/300x200" />
                                <Card.Body>
                                    <Card.Title>Product {idx + 1}</Card.Title>
                                    <Card.Text>
                                        $99.99
                                    </Card.Text>
                                    <Button variant="primary">Add to Cart</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>

            {/* Footer */}
            <footer className="bg-dark text-white text-center p-3 mt-5">
                <Container>
                    <p>E-Commerce &copy; 2024. All Rights Reserved.</p>
                    <p>Follow us on:
                        <a href="#" className="text-white ms-2">Facebook</a> |
                        <a href="#" className="text-white ms-2">Twitter</a> |
                        <a href="#" className="text-white ms-2">Instagram</a>
                    </p>
                </Container>
            </footer>
        </div>
    );
}

export default Test;
