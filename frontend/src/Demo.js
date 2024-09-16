import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CustomDropDown from './elements/CustomDropDown'
import {
    Container, Button, Form, ButtonGroup, DropdownButton, Dropdown, Row, Col, Card, Image, Stack,Carousel
} from 'react-bootstrap';
import './App.css';

const products = [
    { id: 1, name: 'Product 1', price: '$5', img: 'https://via.placeholder.com/300x200', description: 'Mô tả ngắn về Product 1' },
    { id: 2, name: 'Product 2', price: '$6', img: 'https://via.placeholder.com/300x200', description: 'Mô tả ngắn về Product 2' },
    { id: 3, name: 'Product 3', price: '$7', img: 'https://via.placeholder.com/300x200', description: 'Mô tả ngắn về Product 3' },
    { id: 4, name: 'Product 4', price: '$8', img: 'https://via.placeholder.com/300x200', description: 'Mô tả ngắn về Product 4' },
    { id: 5, name: 'Product 5', price: '$9', img: 'https://via.placeholder.com/300x200', description: 'Mô tả ngắn về Product 5' },
    { id: 6, name: 'Product 6', price: '$10', img: 'https://via.placeholder.com/300x200', description: 'Mô tả ngắn về Product 6' },
    { id: 7, name: 'Product 7', price: '$9', img: 'https://via.placeholder.com/300x200', description: 'Mô tả ngắn về Product 7' },
    { id: 8, name: 'Product 8', price: '$10', img: 'https://via.placeholder.com/300x200', description: 'Mô tả ngắn về Product 8' },
];

const categories = [
    {categorical:'Thương hiệu',varient: 'danger', item: ['a','b','c'] },
    {categorical:'CPU',varient: 'danger', item: ['a','b','c'] },
    {categorical:'RAM',varient: 'danger', item: ['a','b','c'] },
    {categorical:'GPU',varient: 'danger', item: ['a','b','c'] },
    {categorical:'Ổ cứng',varient: 'danger', item: ['a','b','s',"sssssssssssssssssssssss"] },
    {categorical:'Màn hình',varient: 'danger', item: ['a','b','c'] },

]


class Demo extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
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
                
                <Container style={{marginTop:3.5 + 'em'}}>
                    <Stack direction="horizontal" gap={3}>
                        <div className="p-2">Chọn theo tiêu chí</div>
                        {categories.map(
                            (category) =>CustomDropDown(category)
                        )}
                    </Stack>
                </Container>


                <Container className="my-3">
                    <h2 className="text-center mb-4">Sản phẩm nổi bật</h2>
                    <Row>
                        {products.map(product => (
                            <Col key={product.id} sm={12} md={6} lg={2} className="mb-3">
                                <Card style={{ width: '13rem', height: '20rem' }}>
                                    <Card.Img variant="top" src={product.img} />
                                    <Card.Body>
                                        <Card.Title>{product.name}</Card.Title>
                                        <Card.Text>
                                            {product.description}. Giá: {product.price}
                                        </Card.Text>
                                        <Button variant="danger">Mua ngay</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Demo;
