import React, {Component, useState} from "react";
import { Alert, Button, Col, Container, Form, Image, InputGroup, Nav, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAt, faBullseye, faCity, faGift, faHistory, faLocationDot, faMapMarkerAlt, faMapPin,
    faPhone, faQuestionCircle, faSignOutAlt, faStar, faUser
} from "@fortawesome/free-solid-svg-icons";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import SaveChange from "../components/modal/notify/SaveChange.jsx";

const sidebarLinks = [
    { id: 1, title: "Account Information", href: '/profile', icon: faUser, isActive: false},
    { id: 2, title: "Order History", href: '/bill', icon: faHistory, isActive: false },
    { id: 3, title: "Voucher Wallet", href: '/voucher', icon: faGift, isActive: false },
    { id: 4, title: "Address", href: '/address', icon: faMapPin, isActive: false },
    { id: 5, title: "Rating", href: '', icon: faStar, isActive: false },
    { id: 6, title: "Faq", href: '', icon: faQuestionCircle, isActive: false },
    // { id: 7, title: "Log out", href: '', icon: faSignOutAlt, isActive: false },
]

const AccountSidebar = ({ directory }) => {
    return (
        <Link to={directory.href}>
            <Button
                href={directory.href}
                className="d-flex align-items-center btn"
                style={{ color: '#696cff', backgroundColor: '#f8f9fa', justifyContent: "left", border: "none", boxShadow: "none" }}>
                <FontAwesomeIcon icon={directory.icon} className="me-2" style={{ width: 28 }} />
                <span>{directory.title}</span>
            </Button>
        </Link>
    )
}

const UserSidebar = () => {
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    const handleLogout = async () => {
        const token = localStorage.getItem('token');
        try {
            await axios.post('http://localhost:5172/authentication/logout', {}, {
                headers: { Authorization: `Bearer ${token}` }
            });
            localStorage.removeItem('token');  // Xóa JWT
            setShowModal(false)
            navigate('/login');
        } catch (error) {
            console.error('Logout failed', error);
        }
    };
    return (
        <>
            <Nav defaultActiveKey="/account" className="flex-column">
                {
                    sidebarLinks.map((sidebarLink, index) => (
                        <AccountSidebar key={index} directory={sidebarLink} />
                    ))
                }
                <Button
                    onClick={() => setShowModal(true)}
                    className="d-flex align-items-center btn"
                    style={{ color: '#696cff', backgroundColor: '#f8f9fa', justifyContent: "left", border: "none", boxShadow: "none" }}>
                    <FontAwesomeIcon icon={faSignOutAlt} className="me-2" style={{ width: 28 }} />
                    <span>Log out</span>
                </Button>
            </Nav>
            <SaveChange
                show={showModal}
                onHide={() => setShowModal(false)}
                onSave={handleLogout}
                title="Log out"
                text="Do you want to log out?"
                button="Log out"
            />
        </>
    )
}

// class AccountSidebar extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {}
//     }
//
//     render() {
//         const { directory } = this.props
//     }
// }

// class UserSidebar extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {}
//     }
//
//     render() {
//         return (
//             <Nav.Link href="/account" className="d-flex align-items-center">
//                 <FontAwesomeIcon icon={faUser} className="me-2" />
//                 Thông tin tài khoản
//             </Nav.Link>
//             <Nav.Link href="/orders" className="d-flex align-items-center">
//                 <FontAwesomeIcon icon={faHistory} className="me-2" />
//                 Lịch sử đơn hàng
//             </Nav.Link>
//             <Nav.Link href="/voucher" className="d-flex align-items-center">
//                 <FontAwesomeIcon icon={faGift} className="me-2" />
//                 Ví voucher
//             </Nav.Link>
//             <Nav.Link href="/address" className="d-flex align-items-center">
//                 <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />
//                 Số địa chỉ
//             </Nav.Link>
//             <Nav.Link href="/reviews" className="d-flex align-items-center">
//                 <FontAwesomeIcon icon={faStar} className="me-2" />
//                 Đánh giá & nhận xét
//             </Nav.Link>
//             <Nav.Link href="/faq" className="d-flex align-items-center">
//                 <FontAwesomeIcon icon={faQuestionCircle} className="me-2" />
//                 Câu hỏi thường gặp
//             </Nav.Link>
//             <Nav.Link href="/logout" className="d-flex align-items-center">
//                 <FontAwesomeIcon icon={faSignOutAlt} className="me-2" />
//                 Đăng xuất
//             </Nav.Link>
//             <SidebarAccount directory={sidebarLink} />
//         )
//     }
// }

export default UserSidebar;