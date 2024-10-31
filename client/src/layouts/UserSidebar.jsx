import React, {Component, useState} from "react";
import { Alert, Button, Col, Container, Form, Image, InputGroup, Nav, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAt, faBullseye, faCity, faGift, faHistory, faLocationDot, faMapMarkerAlt, faMapPin,
    faPhone, faQuestionCircle, faSignOutAlt, faStar, faUser
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate, NavLink, useLocation } from "react-router-dom";
import axios from "axios";
import SaveChange from "../components/modal/notify/SaveChange.jsx";

// const sidebarLinks = [
//     { id: 1, title: "Account Information", href: '/profile', icon: faUser, isActive: false},
//     { id: 2, title: "Order History", href: '/bill', icon: faHistory, isActive: false },
//     { id: 3, title: "Voucher Wallet", href: '/voucher', icon: faGift, isActive: false },
//     { id: 4, title: "Address", href: '/address', icon: faMapPin, isActive: false },
//     { id: 5, title: "Rating", href: '', icon: faStar, isActive: false },
//     { id: 6, title: "Faq", href: '', icon: faQuestionCircle, isActive: false },
//     // { id: 7, title: "Log out", href: '', icon: faSignOutAlt, isActive: false },
// ]

const sidebarLinks = [
    { id: 1, text: "Dashboard", icon: faUser, link: "/profile" },
    { id: 2, text: "Order History", icon: faHistory, link: "/bill" },
    { id: 3, text: "Voucher Wallet", icon: faGift, link: "/voucher" },
    { id: 4, text: "Address", icon: faMapPin, link: "/address" },
    { id: 5, text: "Rating", icon: faStar, link: "/rating" },
    { id: 6, text: "FAQ", icon: faQuestionCircle, link: "/faq" },
    // { id: 7, text: "Log out", icon: faSignOutAlt, link: '' },
];
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const MenuItem = ({ directory, item, isActive }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Button
            as={Link}
            to={directory.link}
            className="d-flex align-items-center btn" // bg-label-primary
            style={{
                color: isActive ? '#696cff' : "#384551",
                backgroundColor: isActive ? "#e7e7ff" : isHovered ? "#f8f9fa" : "transparent",
                justifyContent: "left",
                border: "none",
                boxShadow: "none"
            }}>
            <FontAwesomeIcon icon={directory.icon} className="me-2" style={{ width: 28 }} />
            <span>{directory.text}</span>
        </Button>

    )
}

const UserSidebar = () => {
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
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
                        <MenuItem
                            key={index}
                            directory={sidebarLink}
                            isActive={location.pathname === sidebarLink.link}
                        />
                    ))
                }
                <Button
                    onClick={() => setShowModal(true)}
                    className="d-flex align-items-center btn"
                    style={{ color: '#384551', backgroundColor: '#f8f9fa', justifyContent: "left", border: "none", boxShadow: "none" }}>
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

export default UserSidebar;

