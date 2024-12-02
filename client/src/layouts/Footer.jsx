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
    { id: 1, name: "Banking", icon: faMoneyCheckDollar, box: "bxs-dollar-circle", link: "#" },
    { id: 2, name: "Cash", icon: faMoneyBill, box: "bx-money", link: "#" },
    { id: 3, name: "ATM Card", icon: faCreditCard, box: "bx-credit-card-front", link: "#" },
    { id: 4, name: "PayPal", icon: faCcPaypal, box: "bxl-paypal", link: "#" },
    { id: 5, name: "VISA Card", icon: faCcVisa, box: "bxl-visa", link: "#" },
    { id: 6, name: "Mastercard", icon: faCcMastercard, box: "bx-credit-card", link: "#" },
]

const usefulInfo = [
    { id: 1, name: "Warranty Policy", icon: faCircleCheck, box: "bx-check-circle", link: "#" },
    { id: 2, name: "Return Policy", icon: faRotate, box: "bx-rotate-left", link: "#" },
    { id: 3, name: "Shipping Policy", icon: faTruck, box: "bx-package", link: "#" },
    { id: 4, name: "Privacy Policy", icon: faShieldAlt, box: "bx-shield-quarter", link: "#" },
    { id: 5, name: "Payment Policy", icon: faMoneyCheck, box: "bx-wallet", link: "#" },
    { id: 6, name: "Inspection Policy", icon: faExpand, box: "bx-expand", link: "#" },
    { id: 7, name: "Online Shopping Guide", icon: faShoppingBag, box: "bx-planet", link: "#" },
    { id: 8, name: "About Us", icon: faCircleInfo, box: "bx-info-circle", link: "/about" }
];

const socialIcons = [
    { id: 1, name: "Github", icon: faGithub, box: "bxl-github", link: "https://github.com/goraria/e-commerce" },
    { id: 2, name: "Facebook", icon: faFacebook, box: "bxl-facebook-circle", link: "#" },
    { id: 3, name: "Youtube", icon: faYoutube, box: "bxl-youtube", link: "#" },
    { id: 4, name: "Tiktok", icon: faTiktok, box: "bxl-tiktok", link: "#" },
    { id: 5, name: "Twitter", icon: faTwitter, box: "bxl-twitter", link: "#" },
    // { id: 6, name: "Threads", icon: faThreads, box: "bxl-thread", link: "#" },
    { id: 7, name: "Instagram", icon: faInstagram, box: "bxl-instagram", link: "#" },
    { id: 8, name: "Pinterest", icon: faPinterest, box: "bxl-pinterest", link: "#" },
    { id: 9, name: "Whatsapp", icon: faWhatsapp, box: "bxl-whatsapp", link: "#" },
    { id: 10, name: "Reddit", icon: faReddit, box: "bxl-reddit", link: "#" },
    { id: 11, name: "Steam", icon: faSteam, box: "bxl-steam", link: "#" },
    { id: 12, name: "Snapchat", icon: faSnapchat, box: "bxl-snapchat", link: "#" },
    { id: 13, name: "Telegram", icon: faTelegram, box: "bxl-telegram", link: "#" }
];

const FooterLink = ({ item }) => {
    return (
        <Link to={item.link}>
            <button className="btn btn-link text-dark"> {/* text-light */}
                {/*<FontAwesomeIcon icon={item.icon} style={{width: 28}}/>*/}
                <i className={`${item.box} bx bx-sm me-2`}></i>
                <span>{item.name}</span>
            </button>
        </Link>
    )
}

const Footer = () => {
    return (
        <>
            <footer className="bg-light text-dark text-left">
                <div className="container">
                    <div className="row">
                        <div className="col mt-5 mb-5">
                            <h5 className="text-dark">Payment diversity</h5>
                            <ul style={{listStyle: 'none', padding: 0}}>
                                {paymentIcons.map((paymentIcon, index) => (
                                    <li key={index}>
                                        <FooterLink item={paymentIcon}/>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="col mt-5 mb-5">
                            <h5 className="text-dark">Thông tin hữu ích</h5>
                            <ul style={{listStyle: 'none', padding: 0}}>
                                {usefulInfo.map((useful, index) => (
                                    <li key={index}>
                                        <FooterLink item={useful}/>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="col mt-5 mb-5">
                            <h5 className="text-dark">Social networks</h5>
                            <ul style={{listStyle: 'none', padding: 0}}>
                                {socialIcons.map((socialIcon, index) => (
                                    <li key={index}>
                                        <FooterLink item={socialIcon}/>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="col mt-5 mb-5">
                            <h5 className="text-dark">Phản hồi, góp ý, khiếu nại</h5>
                            <p className="p-2">Phản hồi nóng về chất lượng sản phẩm và dịch vụ. Đội ngũ Kiểm Soát Chất
                                Lượng của chúng tôi sẵn sàng lắng nghe quý khách.</p>
                            <Button href="#" variant="primary">
                                Gửi phản hồi ngay
                            </Button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col text-center mb-4">  {/* text-muted */}
                            <h5 className="text-dark">Copyright &copy; 2020 - 2025 Gorth Inc. All rights reserved.</h5>
                            <h6 className="text-dark">Address: La Gorta, San Siro, Milano, Italia. Hotline:
                                999-9999999</h6>
                        </div>
                    </div>
                </div>
            </footer>
            {/*<footer className="bg-dark text-white text-left">*/}
            {/*    <div className="container">*/}
            {/*        <div className="row">*/}
            {/*            <div className="col mt-5 mb-5">*/}
            {/*                <h5 className="text-white">Payment diversity</h5>*/}
            {/*                <ul style={{ listStyle: 'none', padding: 0 }}>*/}
            {/*                    {paymentIcons.map((paymentIcon, index) => (*/}
            {/*                        <li key={index}>*/}
            {/*                            <FooterLink item={paymentIcon} />*/}
            {/*                        </li>*/}
            {/*                    ))}*/}
            {/*                </ul>*/}
            {/*            </div>*/}
            {/*            <div className="col mt-5 mb-5">*/}
            {/*                <h5 className="text-white">Thông tin hữu ích</h5>*/}
            {/*                <ul style={{listStyle: 'none', padding: 0}}>*/}
            {/*                    {usefulInfo.map((useful, index) => (*/}
            {/*                        <li key={index}>*/}
            {/*                            <FooterLink item={useful}/>*/}
            {/*                        </li>*/}
            {/*                    ))}*/}
            {/*                </ul>*/}
            {/*            </div>*/}
            {/*            <div className="col mt-5 mb-5">*/}
            {/*                <h5 className="text-white">Social networks</h5>*/}
            {/*                <ul style={{listStyle: 'none', padding: 0}}>*/}
            {/*                    {socialIcons.map((socialIcon, index) => (*/}
            {/*                        <li key={index}>*/}
            {/*                            <FooterLink item={socialIcon}/>*/}
            {/*                        </li>*/}
            {/*                    ))}*/}
            {/*                </ul>*/}
            {/*            </div>*/}
            {/*            <div className="col mt-5 mb-5">*/}
            {/*                <h5 className="text-white">Phản hồi, góp ý, khiếu nại</h5>*/}
            {/*                <p className="p-2">Phản hồi nóng về chất lượng sản phẩm và dịch vụ. Đội ngũ Kiểm Soát Chất Lượng của chúng tôi sẵn sàng lắng nghe quý khách.</p>*/}
            {/*                <Button href="#" variant="primary">*/}
            {/*                    Gửi phản hồi ngay*/}
            {/*                </Button>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className="row">*/}
            {/*            <div className="col text-center mb-4">  /!* text-muted *!/*/}
            {/*                <h5 className="text-white">Copyright &copy; 2020 - 2025 Gorth Inc. All rights reserved.</h5>*/}
            {/*                <h6 className="text-white">Address: La Gorta, San Siro, Milano, Italia. Hotline: 999-9999999</h6>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</footer>*/}
        </>
    )
}

export default Footer;


