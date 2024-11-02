import { Component } from "react";
import { Container, Button, Row, Col, Card, Form } from 'react-bootstrap';
import TransitionBar from '../../layouts/TransitionBar.jsx';
import CardItem from '../../components/product/CartItem.jsx';
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import OrderItem from "../../components/product/OrderItem.jsx";
import { useState, useEffect } from 'react';



function Order() {
    var city = 'Hồ Chí Minh';
    const [user, setUser] = useState([]);

    const location = useLocation();
    const { cartData, prePrice, discount, totalPrice } = location.state || {};
    const token = localStorage.getItem('token');
    console.log(token)

    const fetchUser= async () => {
        try {
            const response = await fetch(`http://localhost:5172/cart/loadcart`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const data = await response.json();
            setCart(data)
            console.log(data)

        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu mô tả của sản phẩm:', error);
        }
    };
    return (
        <div>
            <TransitionBar />
            <Container style={{ marginTop: 168 }}>
                <h4>Giỏ hàng </h4>
                <Row>
                    {/* Left Section */}
                    <Col sm={12} md={6} lg={8} className="mb-3">
                        {/* Delivery Method Selection */}
                        <Card className="p-3 mb-3">
                            <h5>Phương thức nhận hàng</h5>
                            <Form.Check
                                type="radio"
                                label="Tại cửa hàng"
                                name="deliveryMethod"
                                value="store"
                            // checked={deliveryMethod === 'store'}
                            // onChange={this.handleInputChange}
                            />
                            <Form.Check
                                type="radio"
                                label="Giao tận nơi"
                                name="deliveryMethod"
                                value="home"
                            // checked={deliveryMethod === 'home'}
                            // onChange={this.handleInputChange}
                            />
                        </Card>

                        {/* Store Locations */}
                        <Card className="p-3 mb-3">
                            <h5>{city === 'Hồ Chí Minh' ? 'Thành phố Hồ Chí Minh' : 'Hà Nội'}</h5>
                            <Form.Check
                                type="radio"
                                label="Số 5 - 7 Nguyễn Huy Tưởng, Quận Bình Thạnh, Hồ Chí Minh"
                                name="storeLocation"
                                disabled={city !== 'Hồ Chí Minh'}
                            />
                            <Form.Check
                                type="radio"
                                label="95 Trần Thiện Chánh, F12, Q10, Hồ Chí Minh"
                                name="storeLocation"
                                disabled={city !== 'Hồ Chí Minh'}
                            />
                            <Form.Check
                                type="radio"
                                label="53 Thái Hà, Trung Liệt, Đống Đa, Hà Nội"
                                name="storeLocation"
                                disabled={city !== 'Hà Nội'}
                            />
                        </Card>

                        {/* Recipient Information */}
                        <Card className="p-3 mb-3">
                            <h5>Thông tin người nhận</h5>
                            <Form.Group controlId="formRecipientName">
                                <Form.Label>Họ và tên</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Nhập họ và tên"
                                    name="recipientName"
                                // value={recipientName}
                                // onChange={this.handleInputChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="formPhoneNumber" className="mt-3">
                                <Form.Label>Số điện thoại</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Nhập số điện thoại"
                                    name="phoneNumber"
                                // value={phoneNumber}
                                // onChange={this.handleInputChange}
                                />
                            </Form.Group>
                        </Card>

                        {/* Product List */}
                        {/* <Card className="p-3">
                            {products.map((item) => <CardItem key={item.id} item={item} />)}
                        </Card> */}
                    </Col>

                    {/* Right Section: Order Summary */}
                    <Col sm={12} md={6} lg={4} className="mb-2">
                        <Card className="p-3 sticky-summary mb-3 shadow-none" style={{ position: 'sticky', top: 100, backgroundColor: 'transparent', boxShadow: 'none' }}>
                            <Card className="p-3 sticky-summary">
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
                                    <span>${prePrice}</span>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <span>Được giảm</span>
                                    <span>{prePrice * discount}$</span>
                                </div>

                                <div className="d-flex justify-content-between mt-2">
                                    <span>Tổng cộng</span>
                                    <span style={{ fontWeight: 'bold', fontSize: '1.5em' }}>${totalPrice}</span>
                                </div>
                                <Link to={`/checkout`} style={{ textDecoration: 'none' }}>
                                    <Button className="w-100 mt-3" variant="danger" size="lg">
                                        Đặt hàng
                                    </Button>
                                </Link>
                            </Card>
                            <Card className="p-3 sticky-summary mb-3" style={{marginTop:10}}>
                                <h5>Sản phẩm trong đơn</h5>
                                {cartData.map((item) => (
                                    <OrderItem Item= {item} />
                                ))}
                            </Card>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )

}

export default Order