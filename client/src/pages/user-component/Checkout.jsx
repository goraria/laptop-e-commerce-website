import { Component } from "react";
import { Container, Button, Row, Col, Card, Form } from 'react-bootstrap';
import TransitionBar from '../../layouts/TransitionBar.jsx';

const products = [
    { id: 1, name: 'Dell Inspiron 14 5430', price: 15990000, description: 'i5 1340P, 16GB, 512GB, FHD+, Platinum Silver', quantity: 1 },
    { id: 2, name: 'Chuột Không Dây M13 - Ergonomic', price: 0, description: 'Silent - Wireless 2.4Ghz, Black, Mới, Full box', quantity: 1 },
];

var pre_total = 0;
products.map((item) => pre_total += item['price']);

var discount = 0; // Assuming no discount applied.
var total = pre_total - (discount * pre_total);
var paid = 0;
var remaining = total - paid;

function CheckOut() {
    var city = 'Hồ Chí Minh';

    return (
        <div>
            <TransitionBar />
            <Container style={{ marginTop: 168 }}>
                <Row>
                    {/* Left Section: Order Info and Payment Method */}
                    <Col sm={12} md={6} lg={8} className="mb-3">
                        {/* Order Information */}
                        <Card className="p-3 mb-3">
                            <h5>Thông tin đơn hàng</h5>
                            <div>Mã đặt hàng: <strong>DH2410160005</strong></div>
                            <div>Người nhận: <strong>df, 0981453692</strong></div>
                            <div>Nhận tại cửa hàng: <strong>53 Thái Hà, Trung Liệt, Đống Đa, Hà Nội</strong></div>
                        </Card>

                        {/* Payment Method */}
                        <Card className="p-3 mb-3">
                            <h5>Phương thức thanh toán</h5>
                            <Form.Check
                                type="radio"
                                label="Chuyển Khoản QR"
                                name="paymentMethod"
                                value="qr"
                                defaultChecked
                            />
                            <Card className="p-3 mb-3">
                                <h6>Hướng dẫn chuyển khoản</h6>
                                <div><strong>Cách 1:</strong> Dùng ứng dụng ngân hàng để quét mã QR.</div>
                                <div><strong>Cách 2:</strong> Nhập thông tin chuyển khoản bên dưới. Lưu ý nhập chính xác số tiền, nội dung chuyển khoản.</div>
                                <div>Sau khi chuyển khoản thành công, bấm nút "Tôi đã chuyển khoản". Hệ thống sẽ mất khoảng 30 giây để xác minh đã nhận được tiền.</div>

                                {/* Bank Info */}
                                <Card className="p-3 mt-3">
                                    <Row>
                                        <Col>
                                            <p>Ngân hàng: <strong>Ngân hàng TMCP Ngoại thương Việt Nam (Vietcombank)</strong></p>
                                            <p>Tên tài khoản: <strong>Lê Tuấn Linh</strong></p>
                                            <p>Số tài khoản: <strong>9968727279</strong></p>
                                            <p>Nội dung CK: <strong>212410160005 RYPRGG</strong></p>
                                            <p>Số tiền: <strong>15.990.000 đ</strong></p>
                                        </Col>
                                        <Col>
                                            <img src="https://via.placeholder.com/150" alt="QR Code" />
                                            <p className="text-center">Quét mã QR bằng ứng dụng ngân hàng</p>
                                        </Col>
                                    </Row>
                                    <Button className="w-100 mt-2" variant="primary">Tôi đã chuyển khoản</Button>
                                </Card>
                            </Card>

                            {/* Other Payment Methods */}
                            <Form.Check
                                type="radio"
                                label="Thanh toán khi nhận hàng"
                                name="paymentMethod"
                                value="cod"
                            />
                           
                        </Card>
                    </Col>

                    {/* Right Section: Order Summary & Product List */}
                    <Col sm={12} md={6} lg={4} className="mb-2">
                        {/* First Card: Order Summary */}
                        <Card className="p-3 sticky-summary mb-3" style={{ position: 'sticky', top: 120 }}>

                            <Card className="p-3 sticky-summary mb-3" >
                                <h5>Tóm tắt đơn hàng</h5>
                                <div className="d-flex justify-content-between">
                                    <span>Tạm tính</span>
                                    <span>{pre_total.toLocaleString('vi-VN')} đ</span>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <span>Được giảm</span>
                                    <span>{(pre_total * discount).toLocaleString('vi-VN')} đ</span>
                                </div>
                                <div className="d-flex justify-content-between mt-2">
                                    <span>Tổng cộng</span>
                                    <span style={{ fontWeight: 'bold', fontSize: '1.5em' }}>{total.toLocaleString('vi-VN')} đ</span>
                                </div>
                                <div className="d-flex justify-content-between mt-2">
                                    <span>Đã thanh toán</span>
                                    <span>{paid.toLocaleString('vi-VN')} đ</span>
                                </div>
                                <div className="d-flex justify-content-between mt-2">
                                    <span>Còn lại</span>
                                    <span>{remaining.toLocaleString('vi-VN')} đ</span>
                                </div>

                                
                            </Card>

                            {/* Second Card: Product List */}
                            <Card className="p-3 sticky-summary mb-3" >
                                <h5>Sản phẩm trong đơn</h5>
                                {products.map((product) => (
                                    <div key={product.id} className="d-flex justify-content-between align-items-center mb-2">
                                        <div>
                                            <strong>{product.name}</strong>
                                            <div>{product.description}</div>
                                        </div>
                                        <div className="text-right">
                                            <span>{product.price.toLocaleString('vi-VN')} đ</span><br />
                                            <span>x{product.quantity}</span>
                                        </div>
                                    </div>
                                ))}
                            </Card>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default CheckOut;
