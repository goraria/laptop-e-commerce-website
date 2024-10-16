import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCreditCard, faCircleCheck, faTruck, faShieldAlt, faShoppingBag, faMoneyBill,
    faMoneyCheck, faMoneyCheckDollar, faCircleInfo, faExpand, faRotate
} from '@fortawesome/free-solid-svg-icons';
import {
    faThreads, faFacebook, faGithub, faInstagram, faPinterest, faTwitter, faYoutube,
    faWhatsapp, faReddit, faSnapchat, faSteam, faTiktok, faTelegram, faCcVisa, faCcPaypal, faCcMastercard
} from '@fortawesome/free-brands-svg-icons';

const paymentIcons = [
    { id: 1, name: "Banking", icon: faMoneyCheckDollar, link: "#" },
    { id: 2, name: "Cash", icon: faMoneyBill, link: "#" },
    { id: 3, name: "ATM Card", icon: faCreditCard, link: "#" },
    { id: 4, name: "PayPal", icon: faCcPaypal, link: "#" },
    { id: 5, name: "VISA Card", icon: faCcVisa, link: "#" },
    { id: 6, name: "Mastercard", icon: faCcMastercard, link: "#" },
]

const usefulInfo = [
    { id: 1, name: "Warranty Policy", icon: faCircleCheck, link: "#" },
    { id: 2, name: "Return Policy", icon: faRotate, link: "#" },
    { id: 3, name: "Shipping Policy", icon: faTruck, link: "#" },
    { id: 4, name: "Privacy Policy", icon: faShieldAlt, link: "#" },
    { id: 5, name: "Payment Policy", icon: faMoneyCheck, link: "#" },
    { id: 6, name: "Inspection Policy", icon: faExpand, link: "#" },
    { id: 7, name: "Online Shopping Guide", icon: faShoppingBag, link: "#" },
    { id: 8, name: "About Us", icon: faCircleInfo, link: "/about" }
];

const socialIcons = [
    { id: 1, name: "Github", icon: faGithub, link: "#" },
    { id: 2, name: "Facebook", icon: faFacebook, link: "#" },
    { id: 3, name: "Youtube", icon: faYoutube, link: "#" },
    { id: 4, name: "Tiktok", icon: faTiktok, link: "#" },
    { id: 5, name: "Twitter", icon: faTwitter, link: "#" },
    { id: 6, name: "Threads", icon: faThreads, link: "#" },
    { id: 7, name: "Instagram", icon: faInstagram, link: "#" },
    { id: 8, name: "Pinterest", icon: faPinterest, link: "#" },
    { id: 9, name: "Whatsapp", icon: faWhatsapp, link: "#" },
    { id: 10, name: "Reddit", icon: faReddit, link: "#" },
    { id: 11, name: "Steam", icon: faSteam, link: "#" },
    { id: 12, name: "Snapchat", icon: faSnapchat, link: "#" },
    { id: 13, name: "Telegram", icon: faTelegram, link: "#" }
];

class FooterLink extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        const { item } = this.props
        return (
            <Link to={item.link}>
                <Button variant={"link"} style={{textDecoration: "none", color: '#f8f9fa'}}>
                    <FontAwesomeIcon icon={item.icon} style={{width: 28}}/>
                    {item.name}
                </Button>
            </Link>
        )
    }
}

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            // <footer className="footer bg-light pt-5">
            // <footer className="bg-dark text-white text-center py-3 mt-5">
            //     <p>Copyright &copy; 2020 - 2024 Gorth Inc. All rights reserved.</p>
            // </footer>
            <footer className="bg-dark text-white text-left py-3 mt-5">
                <Container>
                    <Row className="mb-3" style={{margin: '48px 0'}}>
                        {/*<Col md={3}>*/}
                        {/*    <h5>Đa dạng thanh toán</h5>*/}
                        {/*    <ul style={{ listStyle: 'none', padding: 0 }}>*/}
                        {/*        <li><FontAwesomeIcon icon={faCreditCard} style={{width: iconsize}}/> Chuyển khoản</li>*/}
                        {/*        <li><FontAwesomeIcon icon={faMoneyBills} style={{width: iconsize}}/> Tiền mặt</li>*/}
                        {/*        <li><FontAwesomeIcon icon={faCheck} style={{width: iconsize}}/> VNPay</li>*/}
                        {/*        <li><FontAwesomeIcon icon={faCreditCard} style={{width: iconsize}}/> VietQR</li>*/}
                        {/*        <li><FontAwesomeIcon icon={faCreditCard} style={{width: iconsize}}/> Thẻ ATM</li>*/}
                        {/*        <li><FontAwesomeIcon icon={faCreditCard} style={{width: iconsize}}/> Thẻ Quốc tế</li>*/}
                        {/*    </ul>*/}
                        {/*</Col>*/}
                        {/*<Col md={3}>*/}
                        {/*    <h5>Thông tin hữu ích</h5>*/}
                        {/*    <ul style={{ listStyle: 'none', padding: 0 }}>*/}
                        {/*        <li><FontAwesomeIcon icon={faShieldAlt} style={{width: iconsize}}/> Chính sách bảo hành</li>*/}
                        {/*        <li><FontAwesomeIcon icon={faShieldAlt} style={{width: iconsize}}/> Chính sách đổi trả</li>*/}
                        {/*        <li><FontAwesomeIcon icon={faTruck} style={{width: iconsize}}/> Chính sách vận chuyển</li>*/}
                        {/*        <li><FontAwesomeIcon icon={faShieldAlt} style={{width: iconsize}}/> Chính sách bảo mật</li>*/}
                        {/*        <li><FontAwesomeIcon icon={faCheck} style={{width: iconsize}}/> Chính sách thanh toán</li>*/}
                        {/*        <li><FontAwesomeIcon icon={faShoppingBag} style={{width: iconsize}}/> Hướng dẫn mua hàng</li>*/}
                        {/*    </ul>*/}
                        {/*</Col>*/}
                        {/*<Col md={3}>*/}
                        {/*    <h5>Social networks</h5>*/}
                        {/*    <ul style={{listStyle: 'none', padding: 0}}>*/}
                        {/*        <li><FontAwesomeIcon icon={faGithub} style={{width: iconsize}}/> Github</li>*/}
                        {/*        <li><FontAwesomeIcon icon={faFacebook} style={{width: iconsize}}/> Facebook</li>*/}
                        {/*        <li><FontAwesomeIcon icon={faYoutube} style={{width: iconsize}}/> Youtube</li>*/}
                        {/*        <li><FontAwesomeIcon icon={faTiktok} style={{width: iconsize}}/> Tiktok</li>*/}
                        {/*        <li><FontAwesomeIcon icon={faTwitter} style={{width: iconsize}}/> Twitter</li>*/}
                        {/*        <li><FontAwesomeIcon icon={faThreads} style={{width: iconsize}}/> Threads</li>*/}
                        {/*        <li><FontAwesomeIcon icon={faInstagram} style={{width: iconsize}}/> Instagram</li>*/}
                        {/*        <li><FontAwesomeIcon icon={faPinterest} style={{width: iconsize}}/> Pinterest</li>*/}
                        {/*        <li><FontAwesomeIcon icon={faWhatsapp} style={{width: iconsize}}/> Whatsapp</li>*/}
                        {/*        <li><FontAwesomeIcon icon={faReddit} style={{width: iconsize}}/> Reddit</li>*/}
                        {/*        <li><FontAwesomeIcon icon={faSteam} style={{width: iconsize}}/> Steam</li>*/}
                        {/*        <li><FontAwesomeIcon icon={faSnapchat} style={{width: iconsize}}/> Snapchat</li>*/}
                        {/*        <li><FontAwesomeIcon icon={faTelegram} style={{width: iconsize}}/> Telegram</li>*/}
                        {/*    </ul>*/}
                        {/*</Col>*/}
                        <Col md={3}>
                            <h5 style={{color: "white"}}>Payment diversity</h5>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {paymentIcons.map((paymentIcon, index) => (
                                    <li key={index}>
                                        <FooterLink item={paymentIcon} />
                                    </li>
                                ))}
                            </ul>
                        </Col>
                        <Col md={3}>
                            <h5 style={{color: "white"}}>Thông tin hữu ích</h5>
                            <ul style={{listStyle: 'none', padding: 0}}>
                                {usefulInfo.map((useful, index) => (
                                    <li key={index}>
                                        <FooterLink item={useful}/>
                                    </li>
                                ))}
                            </ul>
                        </Col>
                        <Col md={3}>
                            <h5 style={{color: "white"}}>Social networks</h5>
                            <ul style={{listStyle: 'none', padding: 0}}>
                                {socialIcons.map((socialIcon, index) => (
                                    <li key={index}>
                                        <FooterLink item={socialIcon}/>
                                    </li>
                                ))}
                            </ul>
                        </Col>
                        <Col md={3}>
                            <h5 style={{color: "white"}}>Phản hồi, góp ý, khiếu nại</h5>
                            <p>Phản hồi nóng về chất lượng sản phẩm và dịch vụ. Đội ngũ Kiểm Soát Chất Lượng của chúng
                                tôi
                                sẵn sàng lắng nghe quý khách.</p>
                            <Button href="#" variant="primary">
                            Gửi phản hồi ngay
                            </Button>
                        </Col>
                    </Row>
                    <Row style={{margin: '24px 0'}}>
                        <Col className="text-center">  {/* text-muted */}
                            <h5 style={{color: "white"}}>Copyright &copy; 2020 - 2025 Gorth Inc. All rights reserved.</h5>
                            <h6 style={{color: "white"}}>Address: La Gorta, San Siro, Milano, Italia. Hotline: 999-9999999</h6>
                        </Col>
                    </Row>
                </Container>
            </footer>
        );
    }
}

export default Footer;


