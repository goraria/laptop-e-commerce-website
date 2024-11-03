import React, {Component, useEffect, useState} from "react";
import {Alert, Button, Card, Col, Container, Form, Image, InputGroup, Nav, Row} from "react-bootstrap";
import jp from "../../assets/images/jp.jpeg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faAt, faBullseye, faCity, faGift, faHistory, faLocationDot, faMapMarkerAlt, faMapPin,
    faPhone, faQuestionCircle, faSignOutAlt, faStar, faUser
} from "@fortawesome/free-solid-svg-icons";
import UserSidebar from "../../layouts/UserSidebar";
import AddressList from "./AddressList.jsx";
import AddressItem from "../../components/information/address/AddressItem.jsx";
import axios from "axios";
import Profile from "../../layouts/Profile.jsx";

const AddressManagement = () => {
    const [addresses, setAddresses] = useState([]);
    const [loading, setLoading] = useState(true);
    // const [reloadAddressManagement, setReloadAddressManagement] = useState(0);
    const [reloadTrigger, setReloadTrigger] = useState(false);

    const handleReload = () => {
        setReloadTrigger(!reloadTrigger);
    };

    useEffect(() => {
        const fetchAddresses = async () => {
            try {
                // setLoading(true);
                const token = localStorage.getItem('token');
                const response = await axios.get('http://localhost:5172/address/list', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setAddresses(response.data);
            } catch (error) {
                console.error('Lỗi khi lấy dữ liệu:', error);
            } finally {
                // setLoading(false);
            }
        };

        fetchAddresses();
    }, [reloadTrigger]);  // Khi reloadTrigger thay đổi, useEffect sẽ gọi lại API //

    // if (loading) {
    //     return <p>Đang tải dữ liệu...</p>;
    // }

    return (
        <Profile>
            <Card
                className="sticky-summary"
                style={{
                    position: "sticky",
                    padding: '15px 12px 15px 12px',
                    borderRadius: 10,
                    top: 80,
                    zIndex: 1,
                    border: "none",
                    backgroundColor: '#f8f9fa', // backgroundColor: '#eaedf0' '0, 12px'
                }}>
                <AddressList key={reloadTrigger} onReload={handleReload}/>
            </Card>
            <Row>
                {addresses.map((address, index) => (
                    <Col key={index} sm={12} md={12} lg={6}>
                        <Card
                            className="sticky-summary mt-4"
                            style={{
                                position: "sticky",
                                padding: '15px 12px 15px 12px',
                                borderRadius: 10,
                                top: 80,
                                border: "none",
                                backgroundColor: '#f8f9fa', // backgroundColor: '#eaedf0' '0, 12px'
                            }}>
                            <AddressItem item={address} key={reloadTrigger} onReload={handleReload}/>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Profile>
    )
}

// class AddressManagement extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {}
//     }
//
//     render() {
//     }
// }

export default AddressManagement
