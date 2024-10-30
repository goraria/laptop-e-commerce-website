import React, { Component } from 'react';
import { Container, Button, Row, Col, Card, Form } from 'react-bootstrap';
import TransitionBar from '../../layouts/TransitionBar.jsx';
import CardItem from '../../components/product/CartItem.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

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

var pre_total = 0;
products.map((item) => pre_total += Number(item['price']));

var discount = 0.5;
var total = pre_total - (discount * pre_total);

function Cart() {
    const [carts, setCart] = useState();
    const [cartItems, setCartItem] = useState(null);
    const [product, setProduct] = useState([]);
    const [default_config, setdefaultconfig] = useState([]);
    const [descriptions, setArray] = useState([]);


    const idcart = 1;

    const fetchCart = async () => {
        const response = await axios.get(`http://localhost:5172/cart/load-cart/${idcart}`);
        setCart(response.data[0]);
    };

    const fetchCartItem = async () => {
        const response = await axios.get(`http://localhost:5172/cart/load-cartItem/${idcart}`);
        setCartItem(response.data[0]);
        console.log(response.data)
    };

    const fetchProductDetails = async () => {
        if (cartItems && cartItems.idproduct) {  // Check if idproduct is available
            try {
                const response = await fetch(`http://localhost:5172/products/load-productid/${cartItems.idproduct}`);
                const data = await response.json();
                setProduct(data[0]);
                // console.log(data)
            } catch (error) {
                console.error('Error fetching product details:', error);
            }
        }
    };
    const fetchProductConfiguration = async () => {
        try {
            const response = await fetch(`http://localhost:5172/products/load-idconfiguration/${cartItems.idconfiguration}`);
            const data = await response.json();
            setdefaultconfig(data[0]); // Cập nhật thông tin sản phẩm từ backend
            console.log(data)
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu sản phẩm:', error);
        }
    };

    const fetchProductDecription = async () => {
        try {
            const response = await fetch(`http://localhost:5172/products/load-description/${cartItems.idproduct}`);
            const data = await response.json();
            setArray(data[0]); // Cập nhật thông tin sản phẩm từ backend
            console.log(data[0])

        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu mô tả của sản phẩm:', error);
        }
    };

    useEffect(() => {
        fetchCartItem();
    }, []);

    useEffect(() => {
        // fetchProductDetails();
        // fetchProductConfiguration();
        // fetchProductDecription();
        
    }, [cartItems]); // Run fetchProductDetails when cartItems is updated

    
    return (
        <div>
            <TransitionBar />
            <Container style={{ marginTop: 168 }}>
                <Row>
                    {/* Left Section: Product List */}
                    <Col sm={12} md={6} lg={8} className="mb-3">
                        <Card style={{ marginBottom: 10, padding: '10px 10px', borderRadius: 8 }}>
                            <div className="d-flex justify-content-between align-items-center">
                                <h3 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 'bold', color: '#4a5568' }}>Giỏ hàng</h3>
                                <Button variant="primary" style={{ borderRadius: 8, backgroundColor: '#5a67d8', borderColor: '#5a67d8' }}>
                                    <FontAwesomeIcon icon={faPlus} className="me-2" />
                                    <span>Thêm sản phẩm</span>
                                </Button>
                            </div>
                        </Card>
                        {products.map((item) => (
                            <Card className="p-3 mb-2" key={item.id}>
                                <CardItem item={item} product_name = {product.product_name} />
                            </Card>
                        ))}
                    </Col>

                    {/* Right Section: Order Summary */}
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
                            <Link to={`/order`} style={{ textDecoration: 'none' }}>
                                <Button className="w-100 mt-3" variant="danger" size="lg">
                                    Đặt hàng
                                </Button>
                            </Link>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Cart;
