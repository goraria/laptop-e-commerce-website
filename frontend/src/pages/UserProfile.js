import React, {Component} from "react";
import {Alert, Button, Col, Container, Form, Image, InputGroup, Nav, Row} from "react-bootstrap";
import jp from "../resources/images/jp.jpeg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faAt, faBullseye, faCity, faGift, faHistory, faLocationDot, faMapMarkerAlt, faMapPin,
    faPhone, faQuestionCircle, faSignOutAlt, faStar, faUser
} from "@fortawesome/free-solid-svg-icons";
import UserSidebar from "../components/UserSidebar";
import AccountInfo from "../components/AccountInfo";

class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div style={{marginTop: 112}}>
                <div>
                    <Container style={{padding: 0}}>
                        <Row lg="8"
                        style={{
                            margin: '0'
                        }}>
                            <Col
                            sm={12} md={3} lg={3}
                            className="bg-light p-3 mb-4"
                            style={{
                                padding: '15px 12px 15px 12px',
                                borderRadius: 10,
                                backgroundColor: '#f8f9fa', // backgroundColor: '#eaedf0' '0, 12px'
                            }}>
                                <UserSidebar/>
                            </Col>
                            <Col 
                            sm={12} md={9} lg={9}
                            className="bg-light p-3 mb-4"
                            style={{
                                padding: '15px 12px 15px 12px',
                                borderRadius: 10,
                                // height: '100vh',
                                backgroundColor: '#000', // backgroundColor: '#eaedf0'
                            }}>
                                <AccountInfo/>
                            </Col>
                        </Row>
                    </Container>
                    {/* <Container style={{padding: '0, 12px'}}>
                        <Row lg="8"
                            style={{
                                margin: '0',
                            }}>
                        </Row>
                    </Container> */}
                </div>
            </div>
        )
    }
}

export default UserProfile