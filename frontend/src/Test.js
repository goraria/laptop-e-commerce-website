import React from 'react';
import {
    Container, Carousel, Row, Col, Card, Button
} from 'react-bootstrap';
import './App.css';

const products = [
    { id: 1, name: 'Product 1', price: '$5', img: 'https://via.placeholder.com/300x200', description: 'Mô tả ngắn về Product 1' },
    { id: 2, name: 'Product 2', price: '$6', img: 'https://via.placeholder.com/300x200', description: 'Mô tả ngắn về Product 2' },
    { id: 3, name: 'Product 3', price: '$7', img: 'https://via.placeholder.com/300x200', description: 'Mô tả ngắn về Product 3' },
    { id: 4, name: 'Product 4', price: '$8', img: 'https://via.placeholder.com/300x200', description: 'Mô tả ngắn về Product 4' },
    { id: 5, name: 'Product 5', price: '$9', img: 'https://via.placeholder.com/300x200', description: 'Mô tả ngắn về Product 5' },
    { id: 6, name: 'Product 6', price: '$10', img: 'https://via.placeholder.com/300x200', description: 'Mô tả ngắn về Product 6' },
];

let Test = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://via.placeholder.com/1200x400"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Sale Off 50%</h3>
                        <p>Sale off all product in September</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://via.placeholder.com/1200x400"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Newest</h3>
                        <p>Famous Brand in our website</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Container className="my-4">
                <h2 className="text-center mb-4">Sản phẩm nổi bật</h2>
                <Row>
                    {products.map(product => (
                        <Col key={product.id} sm={12} md={6} lg={4} className="mb-4">
                            <Card>
                                <Card.Img variant="top" src={product.img} />
                                <Card.Body>
                                    <Card.Title>{product.name}</Card.Title>
                                    <Card.Text>
                                        {product.description}. Giá: {product.price}
                                    </Card.Text>
                                    <Button variant="primary">Mua ngay</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default Test;
