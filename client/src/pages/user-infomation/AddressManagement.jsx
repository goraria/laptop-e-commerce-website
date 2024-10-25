import React, {Component, useEffect, useState} from "react";
import {Alert, Button, Card, Col, Container, Form, Image, InputGroup, Nav, Row} from "react-bootstrap";
import jp from "../../assets/images/jp.jpeg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faAt, faBullseye, faCity, faGift, faHistory, faLocationDot, faMapMarkerAlt, faMapPin,
    faPhone, faQuestionCircle, faSignOutAlt, faStar, faUser
} from "@fortawesome/free-solid-svg-icons";
import UserSidebar from "../../layouts/UserSidebar";
import ListAddress from "./ListAddress";
import AddressItem from "../../components/information/address/AddressItem.jsx";
import axios from "axios";

function AddressManagement() {
    const [addresses, setAddresses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAddresses = async () => {
            try {
                const response = await axios.get('http://localhost:5172/address/list');
                console.log(response.data)
                setAddresses(response.data);
            } catch (error) {
                console.error('Lỗi khi lấy dữ liệu:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchAddresses();
    }, []);

    // if (loading) {
    //     return <p>Đang tải dữ liệu...</p>;
    // }
    return (
        <div>
            <Container style={{marginTop: 112, marginBottom: 56}}>
                <Row lg="8">
                    <Col sm={12} md={3} lg={3}>
                        <Card
                            className="sticky-summary"
                            style={{
                                position: "sticky",
                                padding: '15px 12px 15px 12px',
                                borderRadius: 10,
                                // position: "fixed",
                                top: 80,
                                border: "none",
                                backgroundColor: '#f8f9fa', // backgroundColor: '#eaedf0' '0, 12px'
                            }}>
                            <UserSidebar/>
                        </Card>
                    </Col>
                    <Col sm={12} md={9} lg={9}>
                        <Card
                            className="sticky-summary mb-4"
                            style={{
                                position: "sticky",
                                padding: '15px 12px 15px 12px',
                                borderRadius: 10,
                                top: 80,
                                zIndex: 1,
                                border: "none",
                                backgroundColor: '#f8f9fa', // backgroundColor: '#eaedf0' '0, 12px'
                            }}>
                            <ListAddress/>
                        </Card>
                        <Row>
                            {addresses.map((address, index) => (
                                <Col key={index} sm={12} md={12} lg={6}>
                                    <Card
                                        className="sticky-summary mb-4"
                                        style={{
                                            position: "sticky",
                                            padding: '15px 12px 15px 12px',
                                            borderRadius: 10,
                                            top: 80,
                                            border: "none",
                                            backgroundColor: '#f8f9fa', // backgroundColor: '#eaedf0' '0, 12px'
                                        }}>
                                        <AddressItem item={address}/>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

// class AddressManagement extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {}
//     }
//
//     render() {
//         // const [sidebarTop, setSidebarTop] = useState(56);
//         //
//         // useEffect(() => {
//         //     const handleScroll = () => {
//         //         const scrollY = window.scrollY;
//         //
//         //         if (scrollY > 32) {
//         //             setSidebarTop(24);
//         //         } else {
//         //             setSidebarTop(56 - scrollY);
//         //         }
//         //     };
//         //     window.addEventListener("scroll", handleScroll);
//         //
//         //     return () => {
//         //         window.removeEventListener("scroll", handleScroll);
//         //     };
//         // }, []);
//
//
//     }
// }

export default AddressManagement
