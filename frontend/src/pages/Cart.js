import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCreditCard, faCheck, faTruck, faShieldAlt, faShoppingBag, faMoneyBills, faLaptop, faKeyboard, faMouse
} from '@fortawesome/free-solid-svg-icons';
import {
    Container, Button, Form, ButtonGroup, DropdownButton, Dropdown, Row, Col, Card, Image, Stack, Carousel,
    DropdownItem
} from 'react-bootstrap';
import TransitionBar from '../components/TransitionBar';
import CardItem from '../elements/CartItem';
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




class Cart extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        const { obj } = this.props;
        return (

            <div>
                <TransitionBar/>
                <Container style={{marginTop:168}}>
                    <h4>Giỏ hàng </h4>
                    <Row>
                        <Col sm={12} md={6} lg={8} className="mb-3" >
                            {products.map(
                                (item) => <CardItem item = {item}/>
                            )}
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

export default Cart