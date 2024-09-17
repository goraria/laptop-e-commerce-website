import React, {Component} from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCreditCard, faCheck, faTruck, faShieldAlt, faShoppingBag, faMoneyBills,
} from '@fortawesome/free-solid-svg-icons';
import {
    faThreads, faFacebook, faGithub, faInstagram, faPinterest, faTwitter, faYoutube,
    faWhatsapp, faReddit, faSnapchat, faSteam, faTiktok, faTelegram
} from '@fortawesome/free-brands-svg-icons';

// <footer className="bg-dark text-white text-center py-3 mt-5">
//     <p>Copyright &copy; 2020 - 2024 Gorth Inc. All rights reserved.</p>
// </footer>

class Footer extends Component{
    render() {
        let iconsize = 24;
        return (
            // <footer className="footer bg-light pt-5">
            <footer className="bg-dark text-white text-left py-3 mt-5" >
                <Container>
                    <Row className="mb-3" style={{margin: '48px 0'}}>
                        <Col md={3}>
                            <h5>Đa dạng thanh toán</h5>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li><FontAwesomeIcon icon={faCreditCard} style={{width: iconsize}}/> Chuyển khoản</li>
                                <li><FontAwesomeIcon icon={faMoneyBills} style={{width: iconsize}}/> Tiền mặt</li>
                                <li><FontAwesomeIcon icon={faCheck} style={{width: iconsize}}/> VNPay</li>
                                <li><FontAwesomeIcon icon={faCreditCard} style={{width: iconsize}}/> VietQR</li>
                                <li><FontAwesomeIcon icon={faCreditCard} style={{width: iconsize}}/> Thẻ ATM</li>
                                <li><FontAwesomeIcon icon={faCreditCard} style={{width: iconsize}}/> Thẻ Quốc tế</li>
                            </ul>
                        </Col>
                        <Col md={3}>
                            <h5>Thông tin hữu ích</h5>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li><FontAwesomeIcon icon={faShieldAlt} style={{width: iconsize}}/> Chính sách bảo hành</li>
                                <li><FontAwesomeIcon icon={faShieldAlt} style={{width: iconsize}}/> Chính sách đổi trả</li>
                                <li><FontAwesomeIcon icon={faTruck} style={{width: iconsize}}/> Chính sách vận chuyển</li>
                                <li><FontAwesomeIcon icon={faShieldAlt} style={{width: iconsize}}/> Chính sách bảo mật</li>
                                <li><FontAwesomeIcon icon={faCheck} style={{width: iconsize}}/> Chính sách thanh toán</li>
                                <li><FontAwesomeIcon icon={faShoppingBag} style={{width: iconsize}}/> Hướng dẫn mua hàng</li>
                            </ul>
                        </Col>
                        <Col md={3}>
                            <h5>Social networks</h5>
                            <ul style={{listStyle: 'none', padding: 0}}>
                                <li><FontAwesomeIcon icon={faGithub} style={{width: iconsize}}/> Github</li>
                                <li><FontAwesomeIcon icon={faFacebook} style={{width: iconsize}}/> Facebook</li>
                                <li><FontAwesomeIcon icon={faYoutube} style={{width: iconsize}}/> Youtube</li>
                                <li><FontAwesomeIcon icon={faTiktok} style={{width: iconsize}}/> Tiktok</li>
                                <li><FontAwesomeIcon icon={faTwitter} style={{width: iconsize}}/> Twitter</li>
                                <li><FontAwesomeIcon icon={faThreads} style={{width: iconsize}}/> Threads</li>
                                <li><FontAwesomeIcon icon={faInstagram} style={{width: iconsize}}/> Instagram</li>
                                <li><FontAwesomeIcon icon={faPinterest} style={{width: iconsize}}/> Pinterest</li>
                                <li><FontAwesomeIcon icon={faWhatsapp} style={{width: iconsize}}/> Whatsapp</li>
                                <li><FontAwesomeIcon icon={faReddit} style={{width: iconsize}}/> Reddit</li>
                                <li><FontAwesomeIcon icon={faSteam} style={{width: iconsize}}/> Steam</li>
                                <li><FontAwesomeIcon icon={faSnapchat} style={{width: iconsize}}/> Snapchat</li>
                                <li><FontAwesomeIcon icon={faTelegram} style={{width: iconsize}}/> Telegram</li>
                            </ul>
                        </Col>
                        <Col md={3}>
                            <h5>Phản hồi, góp ý, khiếu nại</h5>
                            <p>Phản hồi nóng về chất lượng sản phẩm và dịch vụ. Đội ngũ Kiểm Soát Chất Lượng của chúng tôi
                                sẵn sàng lắng nghe quý khách.</p>
                            <Button href="#" variant="danger">
                                Gửi phản hồi ngay
                            </Button>
                        </Col>
                    </Row>
                    <Row style={{margin: '24px 0'}}>
                        <Col className="text-center">  {/* text-muted */}
                            <h5>Copyright &copy; 2020 - 2024 Gorth Inc. All rights reserved.</h5>
                            <h6>Address: La Gorta, San Siro, Milano, Italia. Hotline: 999-9999999</h6>
                        </Col>
                    </Row>
                </Container>
            </footer>
        );
    }
};

export default Footer;


