import React from 'react';
import {
    Container, Carousel, Row, Col, Card, Button
} from 'react-bootstrap';
import './App.css';

const products = [
    { id: 1, name: 'Sản phẩm 1', price: '500.000đ', img: 'https://via.placeholder.com/300x200', description: 'Mô tả ngắn về sản phẩm 1' },
    { id: 2, name: 'Sản phẩm 2', price: '600.000đ', img: 'https://via.placeholder.com/300x200', description: 'Mô tả ngắn về sản phẩm 2' },
    { id: 3, name: 'Sản phẩm 3', price: '700.000đ', img: 'https://via.placeholder.com/300x200', description: 'Mô tả ngắn về sản phẩm 3' },
    { id: 4, name: 'Sản phẩm 4', price: '800.000đ', img: 'https://via.placeholder.com/300x200', description: 'Mô tả ngắn về sản phẩm 4' },
    { id: 5, name: 'Sản phẩm 5', price: '900.000đ', img: 'https://via.placeholder.com/300x200', description: 'Mô tả ngắn về sản phẩm 5' },
    { id: 6, name: 'Sản phẩm 6', price: '1.000.000đ', img: 'https://via.placeholder.com/300x200', description: 'Mô tả ngắn về sản phẩm 6' },
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
