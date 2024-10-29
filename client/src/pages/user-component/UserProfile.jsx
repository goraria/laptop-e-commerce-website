import React, {Component, useEffect, useState} from "react";
import {Alert, Button, Card, Col, Container, Form, Image, InputGroup, Nav, Row} from "react-bootstrap";
import jp from "../../assets/images/jp.jpeg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faAt, faBullseye, faCity, faGift, faHistory, faLocationDot, faMapMarkerAlt, faMapPin,
    faPhone, faQuestionCircle, faSignOutAlt, faStar, faUser
} from "@fortawesome/free-solid-svg-icons";
import UserSidebar from "../../layouts/UserSidebar";
import AccountInfo from "../user-infomation/AccountInfo";

const UserProfile = () => {
    const [reloadAccountInfo, setReloadAccountInfo] = useState(0);

    // Hàm reload được truyền vào AccountInfo dưới dạng callback
    const handleReloadAccountInfo = () => {
        setReloadAccountInfo(reloadAccountInfo + 1);  // Tăng giá trị để force re-render
    };

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
                            className="sticky-summary"
                            style={{
                                position: "sticky",
                                padding: '15px 12px 15px 12px',
                                borderRadius: 10,
                                top: 80,
                                border: "none",
                                backgroundColor: '#f8f9fa', // backgroundColor: '#eaedf0' '0, 12px'
                            }}>
                            <AccountInfo key={reloadAccountInfo} onReload={handleReloadAccountInfo}/>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

// class UserProfile extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {}
//     }
//
//     render() {
//
//         return (
//
//         )
//     }
// }

export default UserProfile
