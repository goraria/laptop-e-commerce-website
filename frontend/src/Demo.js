import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCreditCard, faCheck, faTruck, faShieldAlt, faShoppingBag, faMoneyBills, faLaptop, faKeyboard, faMouse
} from '@fortawesome/free-solid-svg-icons';
import {
    Container, Button, Form, ButtonGroup, DropdownButton, Dropdown, Row, Col, Card, Image, Stack, Carousel,
    DropdownItem
} from 'react-bootstrap';
import CustomDropDown from './elements/CustomDropDown'
import './App.css';
import ProductItem from "./elements/ProductItem"
import TransitionBar from './components/TransitionBar';

const products = [
    { id: 1, name: 'Product 1', price: '5', image: 'https://via.placeholder.com/300x200', description: 'Mô tả ngắn về Product 1' },
    { id: 2, name: 'Product 2', price: '6', image: 'https://via.placeholder.com/300x200', description: 'Mô tả ngắn về Product 2' },
    { id: 3, name: 'Product 3', price: '7', image: 'https://via.placeholder.com/300x200', description: 'Mô tả ngắn về Product 3' },
    { id: 4, name: 'Product 4', price: '8', image: 'https://via.placeholder.com/300x200', description: 'Mô tả ngắn về Product 4' },
    { id: 5, name: 'Product 5', price: '9', image: 'https://via.placeholder.com/300x200', description: 'Mô tả ngắn về Product 5' },
    { id: 6, name: 'Product 6', price: '10', image: 'https://via.placeholder.com/300x200', description: 'Mô tả ngắn về Product 6' },
    { id: 7, name: 'Product 7', price: '9', image: 'https://via.placeholder.com/300x200', description: 'Mô tả ngắn về Product 7' },
    { id: 8, name: 'Product 8', price: '10', image: 'https://via.placeholder.com/300x200', description: 'Mô tả ngắn về Product 8' },
];

var item = {
    name: "A",
    description: 'B',

}


class Demo extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <Container>
                    <h4>Giỏ hàng </h4>
                    <Row>
                        <Col sm={12} md={6} lg={8} className="mb-3">
                            <Row className="align-items-center border-bottom py-3">
                                {/* Product Image */}
                                <Col md={2}>
                                    <Image style={{ objectFit: 'cover', height: '84px', width: '84px' }} src='https://via.placeholder.com/300x200' alt="anh" fluid />
                                </Col>

                                {/* Product Name and Specs */}
                                <Col md={6}>
                                    <h5>{item.name}</h5>
                                    <p>{item.description}</p>
                                    {item.gift && (
                                        <div className="mt-2 p-2 bg-light">
                                            <Button variant="warning" size="sm">Tặng kèm</Button>
                                            <span className="ms-2">{item.gift.description}</span>
                                        </div>
                                    )}
                                </Col>

                                {/* Quantity Control */}
                                <Col md={2} className="d-flex align-items-center">
                                    <Button variant="light" onClick={item.decrementQuantity}>-</Button>
                                    <div className="px-3">{item.quantity}</div>
                                    <Button variant="light" onClick={item.incrementQuantity}>+</Button>
                                </Col>

                                {/* Pricing */}
                                <Col md={2} className="text-end">
                                    <p style={{ textDecoration: 'line-through', color: '#ccc' }}>
                                        {item.originalPrice}
                                    </p>
                                    <p style={{ color: '#f00', fontSize: '1.5em', fontWeight: 'bold' }}>
                                        {item.discountedPrice}
                                    </p>
                                </Col>

                                {/* Remove Button */}
                                <Col md={1} className="text-end">
                                    <Button variant="light" onClick={() => (item.id)}>Xóa</Button>
                                </Col>
                            </Row>
                        </Col>


                        <Col sm={12} md={6} lg={4} className="mb-2">
                            <Card className="p-3">
                                <h5>Khuyến mãi</h5>
                                <Button variant="outline-secondary" className="mb-3">
                                    Chọn hoặc nhập khuyến mãi
                                </Button>

                                <h5>Tóm tắt đơn hàng</h5>
                                <div className="d-flex justify-content-between">
                                    <span>Tạm tính</span>
                                    <span>subtotal</span>
                                </div>

                                <div className="d-flex justify-content-between mt-2">
                                    <span>Tổng cộng</span>
                                    <span style={{ fontWeight: 'bold', fontSize: '1.5em' }}>50$</span>
                                </div>

                                <Button className="w-100 mt-3" variant="danger" size="lg" onClick>
                                    Đặt hàng
                                </Button>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Demo;
