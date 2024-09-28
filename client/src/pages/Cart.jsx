
import React, { Component } from 'react';
import { Container, Button, Row, Col, Card, Form } from 'react-bootstrap';
import TransitionBar from '../components/TransitionBar.jsx';
import CardItem from '../elements/CartItem.jsx';

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

var pre_total = 0
products.map((item) => pre_total += Number(item['price']))

var discount = 0.5
var total = pre_total - (discount * pre_total)
class Cart extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        return (
            <div>
                <TransitionBar />
                <Container style={{ marginTop: 168 }}>
                    <h4>Giỏ hàng </h4>
                    <Row>
                        {/* Product List Section */}
                        <Col sm={12} md={6} lg={8} className="mb-3">
                            {products.map((item) => <CardItem key={item.id} item={item} />)}
                        </Col>

                        {/* Payment Summary Section */}
                        <Col sm={12} md={6} lg={4} className="mb-2">
                            <Card className="p-3 sticky-summary" style={{ position: 'sticky', top: 120 }}>
                                <h5>Khuyến mãi</h5>
                                <Form.Select aria-label="Default select example" style={{ padding: 10, margin: '1px 0 10px 0' }}>
                                    <option> Chọn hoặc nhập khuyến mãi</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>

                                <h5>Tóm tắt đơn hàng</h5>
                                <div className="d-flex justify-content-between">
                                    <span>Tạm tính</span>
                                    <span>{pre_total}$</span>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <span>Được giảm</span>
                                    <span>{pre_total * discount}$</span>
                                </div>

                                <div className="d-flex justify-content-between mt-2">
                                    <span>Tổng cộng</span>
                                    <span style={{ fontWeight: 'bold', fontSize: '1.5em' }}>{total}$</span>
                                </div>

                                <Button className="w-100 mt-3" variant="danger" size="lg">
                                    Đặt hàng
                                </Button>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Cart;
